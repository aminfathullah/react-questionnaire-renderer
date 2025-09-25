import React, { createContext, useReducer, useEffect, useCallback, useState } from 'react';

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
  LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
  LOAD_QUESTIONNAIRE: 'LOAD_QUESTIONNAIRE',
  SET_TOUCHED: 'SET_TOUCHED'
};

const initialState = {
  questionnaire: null,
  validation: null,
  currentPage: 0,
  responses: {},
  variables: {},
  errors: {},
  touched: {},
  isLoading: false,
  isOnline: navigator.onLine
};

function questionnaireReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_QUESTIONNAIRE:
      return { ...state, questionnaire: action.payload };
    
    case ActionTypes.SET_VALIDATION:
      return { ...state, validation: action.payload };
    
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    
    case ActionTypes.SET_RESPONSE: {
      // Build the new responses object but avoid updating state if nothing changed
      const newResponses = { ...state.responses };
      if (action.payload.value === null || action.payload.value === undefined) {
        // If deleting but key doesn't exist, no change
        if (!(action.payload.dataKey in newResponses)) return state;
        delete newResponses[action.payload.dataKey];
      } else {
        const existing = state.responses[action.payload.dataKey];
        // Shallow/structural equality check - works for primitives and simple objects/arrays
        const unchanged = existing === action.payload.value || JSON.stringify(existing) === JSON.stringify(action.payload.value);
        if (unchanged) return state;
        newResponses[action.payload.dataKey] = action.payload.value;
      }
      return { ...state, responses: newResponses };
    }
    
    case ActionTypes.SET_VARIABLE: {
      // Build the new variables object but avoid updating state if nothing changed
      const newVariables = { ...state.variables };
      if (action.payload.value === null || action.payload.value === undefined) {
        // If deleting but key doesn't exist, no change
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
        errors: { ...state.errors, [action.payload.dataKey]: action.payload.error }
      };

    case ActionTypes.CLEAR_ERROR: {
      const newErrors = { ...state.errors };
      delete newErrors[action.payload.dataKey];
      return { ...state, errors: newErrors };
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
    
    case ActionTypes.LOAD_FROM_STORAGE:
      return {
        ...state,
        ...action.payload,
        touched: action.payload.touched || {}
      };
    
    case ActionTypes.LOAD_QUESTIONNAIRE:
      // Preserve existing responses and variables when loading questionnaire
      return { 
        ...state, 
        questionnaire: action.payload.questionnaire,
        validation: action.payload.validation
      };
    
    default:
      return state;
  }
}

export function QuestionnaireProvider({ children }) {
  const [state, dispatch] = useReducer(questionnaireReducer, initialState);
  const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('questionnaire-state');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: ActionTypes.LOAD_FROM_STORAGE, payload: parsedState });
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    } finally {
      setHasLoadedFromStorage(true);
    }
  }, []);

  // Save to localStorage when state changes (but only after initial load)
  useEffect(() => {
    if (hasLoadedFromStorage) {
      try {
        const stateToSave = {
          currentPage: state.currentPage,
          responses: state.responses,
          variables: state.variables,
          touched: state.touched
        };
        localStorage.setItem('questionnaire-state', JSON.stringify(stateToSave));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }, [state.currentPage, state.responses, state.variables, hasLoadedFromStorage]);

  // Monitor online/offline status
  useEffect(() => {
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
    loadQuestionnaire
  };

  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
}

export default QuestionnaireContext;