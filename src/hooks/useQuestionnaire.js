import { useContext } from 'react';
import QuestionnaireContext from '../contexts/QuestionnaireContext';

// Custom hook to use questionnaire context
export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  const { runtime, ...rest } = context;
  return {
    ...rest,
    submit: runtime?.submit || null,
    reset: runtime?.reset || null,
    getResponses: runtime?.getResponses || null
  };
}

// Utility function to get value from responses or variables
export function getValue(dataKey, responses = {}, variables = {}, currentRowIndex = null) {
  // Handle row-specific data keys like "r201@$ROW$"
  let processedDataKey = dataKey;
  if (processedDataKey.includes('@$ROW$') && currentRowIndex !== null) {
    processedDataKey = processedDataKey.replace('@$ROW$', `#${currentRowIndex}`);
  }
  
  // Check responses first, then variables
  const rawValue = responses[processedDataKey] !== undefined ? responses[processedDataKey] : variables[processedDataKey];
  
  // Return the raw value as-is - components now save in the correct format
  return rawValue;
}

// Utility function to evaluate JavaScript expressions safely
// Utility function to evaluate JavaScript expressions safely-ish and
// return the last completion value (like the browser console)
export function evaluateExpression(
  expression,
  responses = {},
  variables = {},
  currentRowIndex = null
) {
  try {
    // Helpers exposed to the evaluated code
    const getValueFunc = (key) => getValue(key, responses, variables, currentRowIndex);
    const getRowIndex = (index) => {
      // template uses getRowIndex(1) to mean current row value id
      if (currentRowIndex !== null && (index === 1 || index === '1')) return currentRowIndex;
      return index ?? currentRowIndex;
    };

    // Use direct eval inside a Function so we get the "completion value"
    // of the last expression, just like in the console.
    // We shadow a few globals to reduce accidental access.
    const code = String(expression ?? '').trim();

    const evaluator = new Function(
      'getValue',
      'getRowIndex',
      'responses',
      'variables',
      'currentRowIndex',
      'code',
      `
      "use strict";
      // Short aliases if users prefer them in expressions
      const $getValue = getValue;
      const $getRowIndex = getRowIndex;
      const $responses = responses;
      const $variables = variables;
      const $row = currentRowIndex;

      // Shadow some globals to avoid accidental/dangerous access
      const window = undefined, document = undefined, globalThis = undefined;
      const Function = undefined, require = undefined, module = undefined, exports = undefined;

      // IMPORTANT: direct eval returns the last completion value
      return eval(code);
    `
    );

    return evaluator(getValueFunc, getRowIndex, responses, variables, currentRowIndex, code);
  } catch (error) {
    // Deduplicate identical errors for the same expression to avoid console spam
    try {
      // module-level cache stored on the function object
      evaluateExpression._lastErrors = evaluateExpression._lastErrors || new Map();
      const last = evaluateExpression._lastErrors.get(expression);
      const msg = error && error.message ? error.message : String(error);
      if (last !== msg) {
        console.error('Error evaluating expression:', expression, error);
        evaluateExpression._lastErrors.set(expression, msg);
      } else {
        // silently ignore repeated identical errors
        // still return undefined so callers can handle absence of value
      }
    } catch {
      // Fallback logging if anything goes wrong during dedupe
      console.error('Error evaluating expression (fallback):', expression, error);
    }
    return undefined;
  }
}


// Utility function to check if a question should be enabled/shown
export function isQuestionEnabled(question, responses = {}, variables = {}, currentRowIndex = null) {
  if (!question.enableCondition) return true;
  
  try {
    return evaluateExpression(question.enableCondition, responses, variables, currentRowIndex);
  } catch (error) {
    console.error('Error evaluating enable condition:', error);
    return false;
  }
}

// Utility function to process smart placeholders
export function processPlaceholders(text, responses = {}, variables = {}, currentRowIndex = null) {
  if (typeof text !== 'string') return text;
  
  let processedText = text;
  
  // Handle $NAME$ placeholder - get name from nested roster
  if (processedText.includes('$NAME$') && currentRowIndex !== null) {
    const nameKey = `r202_nama#${currentRowIndex}`;
    const nameValue = getValue(nameKey, responses, variables) || 'N/A';
    processedText = processedText.replace(/\$NAME\$/g, nameValue);
  }
  
  // Handle @$ROW$ placeholder
  if (processedText.includes('@$ROW$') && currentRowIndex !== null) {
    processedText = processedText.replace(/@\$ROW\$/g, `#${currentRowIndex}`);
  }
  
  return processedText;
}

// Utility function to validate question responses
export function validateQuestion(question, value, allResponses = {}, allVariables = {}, validationRules = [], touched = {}) {
  const errors = [];

  // Check required field - only if touched
  const dataKey = question.dataKey;
  const isTouched = touched[dataKey];
  if (question.required && (!value || (Array.isArray(value) && value.length === 0)) && isTouched) {
    errors.push('This field is required');
  }
  
  // Check length constraints
  if (question.lengthInput && value && typeof value === 'string') {
    const lengthConstraint = question.lengthInput[0];
    if (lengthConstraint.minlength && value.length < lengthConstraint.minlength) {
      errors.push(`Minimum length is ${lengthConstraint.minlength}`);
    }
    if (lengthConstraint.maxlength && value.length > lengthConstraint.maxlength) {
      errors.push(`Maximum length is ${lengthConstraint.maxlength}`);
    }
  }
  
  // Check range constraints for numbers
  if (question.rangeInput && value && !isNaN(value)) {
    const rangeConstraint = question.rangeInput[0];
    if (rangeConstraint.min !== undefined && Number(value) < rangeConstraint.min) {
      errors.push(`Minimum value is ${rangeConstraint.min}`);
    }
    if (rangeConstraint.max !== undefined && Number(value) > rangeConstraint.max) {
      errors.push(`Maximum value is ${rangeConstraint.max}`);
    }
  }
  
  // Check validation rules from validation.json
  // Handle both old format (direct array) and new format (object with testFunctions)
  let rulesArray = validationRules;
  if (validationRules && typeof validationRules === 'object' && !Array.isArray(validationRules)) {
    // New format: extract testFunctions array from object
    rulesArray = validationRules.testFunctions || [];
  }

  if (!Array.isArray(rulesArray)) {
    console.error('validationRules is not an array:', validationRules, 'type:', typeof validationRules);
    return errors; // Return early to prevent the filter error
  }
  const questionValidationRules = rulesArray.filter(rule => rule.dataKey === question.dataKey);
  for (const rule of questionValidationRules) {
    for (const validation of rule.validations) {
      try {
        const isValid = !evaluateExpression(validation.test, allResponses, allVariables);
        if (!isValid) {
          errors.push(validation.message);
        }
      } catch (error) {
        console.error('Error evaluating validation rule:', error);
      }
    }
  }
  
  return errors;
}