export { default } from './components/QuestionnaireRenderer';
export { default as QuestionnaireRenderer } from './components/QuestionnaireRenderer';
export { default as QuestionnaireLayout } from './components/QuestionnaireLayout';
export { useQuestionnaire } from './hooks/useQuestionnaire';
export { validateResponse, collectQuestions } from './utils/validation';
export {
  normalizeResponses,
  serializeResponses,
  deserializeResponses
} from './utils/responses';

export const types = Object.freeze({
  QuestionnaireRendererProps: 'QuestionnaireRendererProps',
  QuestionnaireRuntimeHandle: 'QuestionnaireRuntimeHandle',
  QuestionnaireValidationErrors: 'QuestionnaireValidationErrors'
});
