import React, { createContext, useReducer, useEffect, useCallback } from 'react';

const QuestionnaireContext = createContext();

const ActionTypes = {
  SET_QUESTIONNAIRE: 'SET_QUESTIONNAIRE',
  SET_VALIDATION: 'SET_VALIDATION',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_RESPONSE: 'SET_RESPONSE',
  SET_VARIABLE: 'SET_VARIABLE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_OFFLINE: 'SET_OFFLINE',
  LOAD_QUESTIONNAIRE: 'LOAD_QUESTIONNAIRE',
  SET_TOUCHED: 'SET_TOUCHED',
  SET_INITIAL_RESPONSES: 'SET_INITIAL_RESPONSES',
  RESET_RESPONSES: 'RESET_RESPONSES',
  SET_ERRORS: 'SET_ERRORS',
  SET_RUNTIME_METHODS: 'SET_RUNTIME_METHODS',
  SET_CONFIG: 'SET_CONFIG'
};

const safeNavigator = typeof navigator !== 'undefined' ? navigator : undefined;

const deepClone = (value) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return value;
  }
};

const isDeepEqual = (a, b) => {
  if (a === b) return true;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
};

const initialState = {
  questionnaire: null,
  template: null,
  validation: null,
  currentPage: 0,
  responses: {},
  initialResponses: {},
  variables: {},
  errors: {},
  touched: {},
  isLoading: false,
  isOnline: safeNavigator ? safeNavigator.onLine : true,
  isDirty: false,
  validationState: 'unknown',
  runtime: null,
  config: {
    readOnly: false,
    disabled: false,
    locale: 'en',
    translations: {},
    fetchMedia: null,
    theme: null,
    componentsMap: {}
  }
};

function questionnaireReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_QUESTIONNAIRE:
      // Avoid setting same questionnaire/template repeatedly to prevent render loops
      if (isDeepEqual(state.template, action.payload)) return state;
      return {
        ...state,
        questionnaire: action.payload,
        template: action.payload
      };
    
    case ActionTypes.SET_VALIDATION:
      if (isDeepEqual(state.validation, action.payload)) return state;
      return { ...state, validation: action.payload };
    
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    
    case ActionTypes.SET_RESPONSE: {
      const newResponses = { ...state.responses };
      if (action.payload.value === null || action.payload.value === undefined) {
        if (!(action.payload.dataKey in newResponses)) return state;
        delete newResponses[action.payload.dataKey];
      } else {
        const existing = state.responses[action.payload.dataKey];
        const unchanged = existing === action.payload.value || JSON.stringify(existing) === JSON.stringify(action.payload.value);
        if (unchanged) return state;
        newResponses[action.payload.dataKey] = action.payload.value;
      }
      return {
        ...state,
        responses: newResponses,
        isDirty: !isDeepEqual(newResponses, state.initialResponses)
      };
    }
    
    case ActionTypes.SET_VARIABLE: {
      const newVariables = { ...state.variables };
      if (action.payload.value === null || action.payload.value === undefined) {
        if (!(action.payload.dataKey in newVariables)) return state;
        delete newVariables[action.payload.dataKey];
      } else {
        const existing = state.variables[action.payload.dataKey];
        const unchanged = existing === action.payload.value || JSON.stringify(existing) === JSON.stringify(action.payload.value);
        if (unchanged) return state;
        newVariables[action.payload.dataKey] = action.payload.value;
      }
      return { ...state, variables: newVariables };
    }
    
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        errors: { ...state.errors, [action.payload.dataKey]: action.payload.error },
        validationState: 'invalid'
      };

    case ActionTypes.CLEAR_ERROR: {
      const newErrors = { ...state.errors };
      delete newErrors[action.payload.dataKey];
      return {
        ...state,
        errors: newErrors,
        validationState: Object.keys(newErrors).length ? 'invalid' : 'valid'
      };
    }

    case ActionTypes.SET_TOUCHED:
      return {
        ...state,
        touched: { ...state.touched, [action.payload.dataKey]: true }
      };
    
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    
    case ActionTypes.SET_OFFLINE:
      return { ...state, isOnline: !action.payload };
    
    case ActionTypes.LOAD_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: action.payload.questionnaire,
        template: action.payload.questionnaire,
        validation: action.payload.validation
      };

    case ActionTypes.SET_INITIAL_RESPONSES: {
      const initial = deepClone(action.payload || {});
      return {
        ...state,
        initialResponses: initial,
        responses: deepClone(action.payload || {}),
        isDirty: false
      };
    }

    case ActionTypes.RESET_RESPONSES:
      return {
        ...state,
        responses: deepClone(state.initialResponses || {}),
        isDirty: false
      };

    case ActionTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload || {},
        validationState: action.payload && Object.keys(action.payload).length ? 'invalid' : 'valid'
      };

    case ActionTypes.SET_RUNTIME_METHODS:
      // runtime usually holds function refs. Do a shallow referential equality
      // check on keys to avoid JSON.stringify on functions and avoid repeated
      // updates when the functions are unchanged.
      try {
        const oldRuntime = state.runtime || null;
        const newRuntime = action.payload || null;
        if (oldRuntime === newRuntime) return state;
        if (oldRuntime && newRuntime && typeof oldRuntime === 'object' && typeof newRuntime === 'object') {
          const oldKeys = Object.keys(oldRuntime);
          const newKeys = Object.keys(newRuntime);
          if (oldKeys.length === newKeys.length && oldKeys.every(k => newKeys.includes(k))) {
            const allSame = oldKeys.every((k) => oldRuntime[k] === newRuntime[k]);
            if (allSame) return state;
          }
        }
        return {
          ...state,
          runtime: action.payload
        };
      } catch {
        return {
          ...state,
          runtime: action.payload
        };
      }

    case ActionTypes.SET_CONFIG:
      // Merge incoming config and avoid returning a new object if nothing changed
      try {
        const nextConfig = { ...state.config, ...(action.payload || {}) };
        if (isDeepEqual(state.config, nextConfig)) return state;
        return {
          ...state,
          config: nextConfig
        };
      } catch {
        return {
          ...state,
          config: { ...state.config, ...(action.payload || {}) }
        };
      }
    
    default:
      return state;
  }
}

export function QuestionnaireProvider({ children }) {
  const [state, dispatch] = useReducer(questionnaireReducer, initialState);

  // Monitor online/offline status
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleOnline = () => dispatch({ type: ActionTypes.SET_OFFLINE, payload: false });
    const handleOffline = () => dispatch({ type: ActionTypes.SET_OFFLINE, payload: true });

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Action creators
  const setQuestionnaire = useCallback((questionnaire) => {
    dispatch({ type: ActionTypes.SET_QUESTIONNAIRE, payload: questionnaire });
  }, []);

  const setValidation = useCallback((validation) => {
    dispatch({ type: ActionTypes.SET_VALIDATION, payload: validation });
  }, []);

  const setCurrentPage = useCallback((page) => {
    dispatch({ type: ActionTypes.SET_CURRENT_PAGE, payload: page });
  }, []);

  const setResponse = useCallback((dataKey, value, rowIndex = null) => {
    const finalDataKey = rowIndex !== null ? `${dataKey}#${rowIndex}` : dataKey;
    dispatch({ 
      type: ActionTypes.SET_RESPONSE, 
      payload: { dataKey: finalDataKey, value } 
    });
  }, []);

  const setVariable = useCallback((dataKey, value, rowIndex = null) => {
    const finalDataKey = rowIndex !== null ? `${dataKey}#${rowIndex}` : dataKey;
    dispatch({ 
      type: ActionTypes.SET_VARIABLE, 
      payload: { dataKey: finalDataKey, value } 
    });
  }, []);

  const setError = useCallback((dataKey, error) => {
    dispatch({ type: ActionTypes.SET_ERROR, payload: { dataKey, error } });
  }, []);

  const clearError = useCallback((dataKey) => {
    dispatch({ type: ActionTypes.CLEAR_ERROR, payload: { dataKey } });
  }, []);

  const setTouched = useCallback((dataKey) => {
    dispatch({ type: ActionTypes.SET_TOUCHED, payload: { dataKey } });
  }, []);

  const setLoading = useCallback((isLoading) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: isLoading });
  }, []);

  const loadQuestionnaire = useCallback((questionnaire, validation) => {
    dispatch({ 
      type: ActionTypes.LOAD_QUESTIONNAIRE, 
      payload: { questionnaire, validation } 
    });
  }, []);

  const setInitialResponses = useCallback((responses) => {
    dispatch({ type: ActionTypes.SET_INITIAL_RESPONSES, payload: responses });
  }, []);

  const resetResponses = useCallback(() => {
    dispatch({ type: ActionTypes.RESET_RESPONSES });
  }, []);

  const setErrors = useCallback((errors) => {
    dispatch({ type: ActionTypes.SET_ERRORS, payload: errors });
  }, []);

  const setRuntimeMethods = useCallback((runtime) => {
    dispatch({ type: ActionTypes.SET_RUNTIME_METHODS, payload: runtime });
  }, []);

  const setConfig = useCallback((config) => {
    dispatch({ type: ActionTypes.SET_CONFIG, payload: config });
  }, []);

  const value = {
    ...state,
    setQuestionnaire,
    setValidation,
    setCurrentPage,
    setResponse,
    setVariable,
    setError,
    clearError,
    setTouched,
    setLoading,
    loadQuestionnaire,
    setInitialResponses,
    resetResponses,
    setErrors,
    setRuntimeMethods,
    setConfig
  };

  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
}

export default QuestionnaireContext;