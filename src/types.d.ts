import type {
  ComponentType,
  CSSProperties,
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react';

export type QuestionnaireResponses = Record<string, unknown>;
export type QuestionnaireValidationErrors = Record<string, string[]>;

export interface QuestionnairePersistentStore {
  get: (key: string) => Promise<unknown> | unknown;
  set: (key: string, value: string) => Promise<void> | void;
  remove: (key: string) => Promise<void> | void;
}

export interface QuestionnaireValidatorContext {
  question: Record<string, unknown>;
  responses: QuestionnaireResponses;
  variables: Record<string, unknown>;
  locale?: string;
  translations?: Record<string, unknown>;
  template?: Record<string, unknown>;
}

export type QuestionnaireValidator = (
  value: unknown,
  context: QuestionnaireValidatorContext
) => string | null | Promise<string | null>;

export interface QuestionnaireLookupParentCondition {
  key: string;
  value: unknown;
}

export interface QuestionnaireLookupSource {
  id?: string;
  tableName?: string;
  fileName?: string;
  cacheKey?: string;
  value: string;
  desc?: string;
  fullDesc?: string;
  version?: string;
  url?: string;
  parentCondition?: QuestionnaireLookupParentCondition[];
  requestConfig?: Record<string, unknown>;
}

export interface QuestionnaireLookupEntry {
  data: any[];
  version: string | null;
  fetchedAt?: string;
}

export interface QuestionnaireLookupClient {
  get: (url: string, config?: Record<string, unknown>) => Promise<any>;
}

export interface QuestionnaireConfig {
  readOnly?: boolean;
  disabled?: boolean;
  locale?: string;
  translations?: Record<string, unknown>;
  fetchMedia?: (mediaRef: unknown) => Promise<string | Blob>;
  theme?: unknown;
  componentsMap?: Record<string | number, ComponentType<any> | ReactNode>;
  lookupClient?: QuestionnaireLookupClient | null;
  lookupBaseUrl?: string | null;
  resolveLookupUrl?: (source: QuestionnaireLookupSource, config: QuestionnaireConfig) => string | null;
}

export interface QuestionnaireRendererProps extends QuestionnaireConfig {
  templateJson: Record<string, unknown>;
  validationJson?: unknown;
  initialData?: QuestionnaireResponses;
  onChange?: (responses: QuestionnaireResponses) => void;
  onSubmit?: (responses: QuestionnaireResponses) => Promise<void> | void;
  onValidationError?: (errors: QuestionnaireValidationErrors) => void;
  componentsMap?: QuestionnaireConfig['componentsMap'];
  layout?: 'default' | 'simple' | ComponentType<any> | ReactNode;
  persistentStore?: QuestionnairePersistentStore | null;
  storageKey?: string;
  enableAutosave?: boolean | { debounceMs?: number; clearOnSubmit?: boolean };
  validators?: Record<string, QuestionnaireValidator>;
  asyncValidation?: boolean;
  fetchMedia?: QuestionnaireConfig['fetchMedia'];
  onError?: (error: Error) => void;
  lookupClient?: QuestionnaireLookupClient | null;
  lookupBaseUrl?: string | null;
  resolveLookupUrl?: QuestionnaireConfig['resolveLookupUrl'];
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
}

export interface QuestionnaireSubmitResult {
  ok: boolean;
  responses?: QuestionnaireResponses;
  errors?: QuestionnaireValidationErrors;
}

export interface QuestionnaireRuntimeHandle {
  submit: () => Promise<QuestionnaireSubmitResult>;
  reset: () => Promise<void> | void;
  getResponses: () => QuestionnaireResponses;
}

export interface QuestionnaireContextValue {
  questionnaire: Record<string, unknown> | null;
  template: Record<string, unknown> | null;
  validation: unknown;
  currentPage: number;
  responses: QuestionnaireResponses;
  initialResponses: QuestionnaireResponses;
  variables: Record<string, unknown>;
  errors: QuestionnaireValidationErrors;
  touched: Record<string, boolean>;
  isLoading: boolean;
  isOnline: boolean;
  isDirty: boolean;
  validationState: 'unknown' | 'valid' | 'invalid';
  config: QuestionnaireConfig;
  lookupCache: Record<string, QuestionnaireLookupEntry>;
  lookupStatus: Record<string, 'idle' | 'loading' | 'loaded' | 'error'>;
  lookupErrors: Record<string, string | null>;
  setQuestionnaire: (template: Record<string, unknown>) => void;
  setValidation: (validation: unknown) => void;
  setCurrentPage: (page: number) => void;
  setResponse: (dataKey: string, value: unknown, rowIndex?: number | null) => void;
  setVariable: (dataKey: string, value: unknown, rowIndex?: number | null) => void;
  setError: (dataKey: string, error: string | string[]) => void;
  clearError: (dataKey: string) => void;
  setTouched: (dataKey: string) => void;
  setLoading: (isLoading: boolean) => void;
  loadQuestionnaire: (template: Record<string, unknown>, validation?: unknown) => void;
  setInitialResponses: (responses: QuestionnaireResponses) => void;
  resetResponses: () => void;
  setErrors: (errors: QuestionnaireValidationErrors) => void;
  setRuntimeMethods: (runtime: QuestionnaireRuntimeHandle | null) => void;
  setConfig: (config: QuestionnaireConfig) => void;
  ensureLookupDataset: (source: QuestionnaireLookupSource) => Promise<any[]>;
  submit: QuestionnaireRuntimeHandle['submit'] | null;
  reset: QuestionnaireRuntimeHandle['reset'] | null;
  getResponses: QuestionnaireRuntimeHandle['getResponses'] | null;
}

export interface ValidateResponseOptions {
  variables?: Record<string, unknown>;
  touched?: Record<string, boolean>;
  validators?: Record<string, QuestionnaireValidator>;
  asyncValidation?: boolean;
  locale?: string;
  translations?: Record<string, unknown>;
}

export interface ValidateResponseResult {
  valid: boolean;
  errors: QuestionnaireValidationErrors;
}

export declare function useQuestionnaire(): QuestionnaireContextValue;

export declare const QuestionnaireLayout: ComponentType<any>;

export declare function validateResponse(
  templateJson: Record<string, unknown>,
  validationJson: unknown,
  responses: QuestionnaireResponses,
  options?: ValidateResponseOptions
): Promise<ValidateResponseResult>;

export declare function collectQuestions(
  templateJson: Record<string, unknown>
): Record<string, unknown>[];

export declare function normalizeResponses(
  responses?: QuestionnaireResponses
): QuestionnaireResponses;

export declare function serializeResponses(
  responses?: QuestionnaireResponses
): string;

export declare function deserializeResponses(
  serialized: unknown
): QuestionnaireResponses;

declare const QuestionnaireRenderer: ForwardRefExoticComponent<
  QuestionnaireRendererProps & RefAttributes<QuestionnaireRuntimeHandle>
>;

export default QuestionnaireRenderer;

export type {
  QuestionnaireRendererProps as QuestionnaireRendererComponentProps,
  QuestionnaireRuntimeHandle as QuestionnaireRendererRef,
  QuestionnaireValidationErrors as QuestionnaireErrors
};

export declare const types: {
  QuestionnaireRendererProps: 'QuestionnaireRendererProps';
  QuestionnaireRuntimeHandle: 'QuestionnaireRuntimeHandle';
  QuestionnaireValidationErrors: 'QuestionnaireValidationErrors';
};
