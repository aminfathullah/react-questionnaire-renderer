import { validateQuestion } from '../hooks/useQuestionnaire';

const isPromise = (value) => value && typeof value.then === 'function';

const traverseComponents = (components, visitor) => {
  if (!components) {
    return;
  }

  if (Array.isArray(components)) {
    components.forEach((component) => traverseComponents(component, visitor));
    return;
  }

  const component = components;
  if (!component || typeof component !== 'object') {
    return;
  }

  visitor(component);

  if (component.components) {
    traverseComponents(component.components, visitor);
  }
};

export const collectQuestions = (templateJson) => {
  const questions = [];
  const seen = new Set();

  traverseComponents(templateJson?.components, (component) => {
    if (!component) return;
    if (component.type === 1) {
      // Section container; its children will be visited via traverse
      return;
    }
    if (component.dataKey && !seen.has(component.dataKey)) {
      seen.add(component.dataKey);
      questions.push(component);
    }
  });

  return questions;
};

const normalizeValidationRules = (validationJson) => {
  if (!validationJson) {
    return [];
  }
  if (Array.isArray(validationJson)) {
    return validationJson;
  }
  if (typeof validationJson === 'object') {
    if (Array.isArray(validationJson.testFunctions)) {
      return validationJson.testFunctions;
    }
  }
  return [];
};

export async function validateResponse(templateJson, validationJson, responses = {}, options = {}) {
  if (!templateJson || typeof templateJson !== 'object') {
    throw new Error('validateResponse requires a templateJson object');
  }

  const {
    variables = {},
    touched = {},
    validators = {},
    asyncValidation = false,
    locale,
    translations
  } = options;

  const rules = normalizeValidationRules(validationJson ?? templateJson?.validation);
  const questions = collectQuestions(templateJson);
  const errors = {};

  const ensureTouched = { ...touched };
  questions.forEach((question) => {
    if (question?.dataKey) {
      ensureTouched[question.dataKey] = true;
    }
  });

  for (const question of questions) {
    if (!question?.dataKey) {
      continue;
    }

    const dataKey = question.dataKey;
    const value = responses[dataKey];

    const builtInErrors = validateQuestion(
      question,
      value,
      responses,
      variables,
      rules,
      ensureTouched
    );

    if (builtInErrors.length) {
      errors[dataKey] = [...(errors[dataKey] || []), ...builtInErrors];
    }

    const validator = validators[dataKey];
    if (typeof validator === 'function') {
      try {
        const context = {
          question,
          responses,
          variables,
          locale,
          translations,
          template: templateJson
        };
        const result = validator(value, context);
        let resolved = result;
        if (isPromise(result)) {
          if (!asyncValidation) {
            console.warn(`Validator for ${dataKey} returned a Promise but asyncValidation is disabled.`);
          }
          resolved = await result;
        }
        if (resolved) {
          errors[dataKey] = [...(errors[dataKey] || []), resolved];
        }
      } catch (validatorError) {
        console.error(`Validator for ${dataKey} threw an error:`, validatorError);
        errors[dataKey] = [
          ...(errors[dataKey] || []),
          validatorError.message || 'Validation failed'
        ];
      }
    }
  }

  // Remove empty arrays
  Object.keys(errors).forEach((key) => {
    if (!errors[key] || errors[key].length === 0) {
      delete errors[key];
    }
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
