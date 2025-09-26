import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useImperativeHandle
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QuestionnaireProvider } from '../contexts/QuestionnaireContext';
import { useQuestionnaire } from '../hooks/useQuestionnaire';
import QuestionnaireLayout from './QuestionnaireLayout';
import SimpleQuestionnaireRenderer from './SimpleQuestionnaireRenderer';
import {
  normalizeResponses,
  serializeResponses,
  deserializeResponses
} from '../utils/responses';
import { validateResponse as runValidation } from '../utils/validation';

const resolveLayoutComponent = (layout) => {
  if (!layout || layout === 'default') {
    return QuestionnaireLayout;
  }
  if (layout === 'simple') {
    return SimpleQuestionnaireRenderer;
  }
  return layout;
};

const createDefaultStore = () => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }

  return {
    async get(key) {
      return window.localStorage.getItem(key);
    },
    async set(key, value) {
      window.localStorage.setItem(key, value);
    },
    async remove(key) {
      window.localStorage.removeItem(key);
    }
  };
};

const QuestionnaireRendererInner = forwardRef((props, ref) => {
  const {
    templateJson,
    validationJson,
    initialData,
    onChange,
    onSubmit,
    onValidationError,
    componentsMap,
    layout = 'default',
    readOnly = false,
    disabled = false,
    locale = 'en',
    translations = {},
    theme = null,
    persistentStore = null,
    storageKey = 'questionnaire-draft',
    autosaveConfig = null,
    validators = {},
    asyncValidation = false,
    fetchMedia = null,
    onError = null,
    lookupClient = null,
    lookupBaseUrl = null,
    resolveLookupUrl = null,
    className,
    style,
    children,
    ...layoutProps
  } = props;

  const {
    responses,
    variables,
    touched,
    validation,
    setConfig,
    setInitialResponses,
    loadQuestionnaire,
    setErrors,
    resetResponses,
    setRuntimeMethods,
    setTouched
  } = useQuestionnaire();

  const [hydrationState, setHydrationState] = useState({ initial: false, draft: false });
  const initialDataHashRef = useRef(null);
  const autosaveEnabled = Boolean(autosaveConfig);
  const debounceMs = autosaveConfig?.debounceMs ?? 300;

  const store = useMemo(() => {
    if (persistentStore) {
      return persistentStore;
    }
    if (autosaveEnabled) {
      return createDefaultStore();
    }
    return null;
  }, [persistentStore, autosaveEnabled]);

  const handleError = useCallback((error) => {
    if (!error) return;
    console.error('[QuestionnaireRenderer] error:', error);
    if (typeof onError === 'function') {
      onError(error);
    }
  }, [onError]);

  // Load template + validation when provided
  useEffect(() => {
    if (!templateJson) {
      handleError(new Error('templateJson is required for QuestionnaireRenderer'));
      return;
    }
    try {
      loadQuestionnaire(templateJson, validationJson ?? validation ?? null);
    } catch (error) {
      handleError(error);
    }
  }, [templateJson, validationJson, validation, loadQuestionnaire, handleError]);

  // Apply global config for consumers/layout/questions
  const memoizedConfig = useMemo(() => ({
    readOnly,
    disabled,
    locale,
    translations,
    fetchMedia,
    theme,
    componentsMap: componentsMap || {},
    lookupClient,
    lookupBaseUrl,
    resolveLookupUrl
  }), [readOnly, disabled, locale, translations, fetchMedia, theme, componentsMap, lookupClient, lookupBaseUrl, resolveLookupUrl]);

  useEffect(() => {
    try {
      setConfig(memoizedConfig);
    } catch (error) {
      handleError(error);
    }
  }, [memoizedConfig, setConfig, handleError]);

  // Hydrate initial responses when they change meaningfully
  useEffect(() => {
    const normalizedInitial = normalizeResponses(initialData || {});
    const hash = JSON.stringify(normalizedInitial);
    if (initialDataHashRef.current !== hash) {
      initialDataHashRef.current = hash;
      try {
        setInitialResponses(normalizedInitial);
      } catch (error) {
        handleError(error);
      }
    }
    setHydrationState((prev) => ({ ...prev, initial: true }));
  }, [initialData, setInitialResponses, handleError]);

  // Hydrate from persistent storage (autosave) if enabled
  useEffect(() => {
    let cancelled = false;

    if (!autosaveEnabled || !store) {
      setHydrationState((prev) => ({ ...prev, draft: true }));
      return () => {
        cancelled = true;
      };
    }

    const hydrateDraft = async () => {
      try {
        const saved = await Promise.resolve(store.get?.(storageKey));
        if (!cancelled && saved) {
          const parsed = deserializeResponses(saved);
          const merged = {
            ...normalizeResponses(initialData || {}),
            ...normalizeResponses(parsed)
          };
          setInitialResponses(merged);
          initialDataHashRef.current = JSON.stringify(merged);
        }
      } catch (error) {
        if (!cancelled) {
          handleError(error);
        }
      } finally {
        if (!cancelled) {
          setHydrationState((prev) => ({ ...prev, draft: true }));
        }
      }
    };

    hydrateDraft();

    return () => {
      cancelled = true;
    };
  }, [autosaveEnabled, store, storageKey, initialData, setInitialResponses, handleError]);

  const isReady = hydrationState.initial && hydrationState.draft;
  const normalizedResponses = useMemo(() => normalizeResponses(responses), [responses]);

  // Trigger onChange with debounce once hydrated
  useEffect(() => {
    if (!isReady || typeof onChange !== 'function') {
      return undefined;
    }
    const handle = setTimeout(() => {
      try {
        onChange(normalizedResponses);
      } catch (error) {
        handleError(error);
      }
    }, debounceMs);

    return () => clearTimeout(handle);
  }, [normalizedResponses, onChange, debounceMs, handleError, isReady]);

  // Autosave draft responses when enabled
  useEffect(() => {
    if (!isReady || !autosaveEnabled || !store) {
      return undefined;
    }

    const handle = setTimeout(() => {
      const snapshot = normalizedResponses;
      const hasContent = Object.keys(snapshot).length > 0;

      const operation = hasContent
        ? store.set?.(storageKey, serializeResponses(snapshot))
        : store.remove?.(storageKey);

      Promise.resolve(operation).catch(handleError);
    }, debounceMs);

    return () => clearTimeout(handle);
  }, [normalizedResponses, autosaveEnabled, store, storageKey, debounceMs, handleError, isReady]);

  const runValidate = useCallback(async () => {
    return runValidation(templateJson, validationJson ?? validation ?? null, normalizedResponses, {
      variables,
      touched,
      validators,
      asyncValidation,
      locale,
      translations
    });
  }, [templateJson, validationJson, validation, normalizedResponses, variables, touched, validators, asyncValidation, locale, translations]);

  const getCurrentResponses = useCallback(() => normalizeResponses(responses), [responses]);

  const clearDraft = useCallback(() => {
    if (!autosaveEnabled || !store) {
      return Promise.resolve();
    }
    return Promise.resolve(store.remove?.(storageKey)).catch(handleError);
  }, [autosaveEnabled, store, storageKey, handleError]);

  const handleSubmit = useCallback(async () => {
    try {
      const result = await runValidate();
      setErrors(result.errors);

      if (!result.valid) {
        Object.keys(result.errors).forEach((key) => setTouched(key));
        if (typeof onValidationError === 'function') {
          onValidationError(result.errors);
        }
        return { ok: false, errors: result.errors };
      }

      if (typeof onSubmit === 'function') {
        await Promise.resolve(onSubmit(normalizedResponses));
      }

      if (autosaveConfig?.clearOnSubmit) {
        await clearDraft();
      }

      return { ok: true, responses: normalizedResponses };
    } catch (error) {
      handleError(error);
      throw error;
    }
  }, [runValidate, setErrors, setTouched, onValidationError, onSubmit, normalizedResponses, autosaveConfig, clearDraft, handleError]);

  const handleReset = useCallback(async () => {
    try {
      resetResponses();
      setErrors({});
      await clearDraft();
    } catch (error) {
      handleError(error);
    }
  }, [resetResponses, setErrors, clearDraft, handleError]);

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
    reset: handleReset,
    getResponses: getCurrentResponses
  }), [handleSubmit, handleReset, getCurrentResponses]);

  // Keep stable runtime function identities by storing the current
  // implementations in refs and exposing wrapper functions that
  // call the refs. This prevents effects from dispatching a new
  // runtime object on every render and causing render loops.
  const handleSubmitRef = useRef(handleSubmit);
  const handleResetRef = useRef(handleReset);
  const getCurrentResponsesRef = useRef(getCurrentResponses);

  useEffect(() => { handleSubmitRef.current = handleSubmit; }, [handleSubmit]);
  useEffect(() => { handleResetRef.current = handleReset; }, [handleReset]);
  useEffect(() => { getCurrentResponsesRef.current = getCurrentResponses; }, [getCurrentResponses]);

  const stableRuntime = useMemo(() => ({
    submit: (...args) => handleSubmitRef.current(...args),
    reset: (...args) => handleResetRef.current(...args),
    getResponses: (...args) => getCurrentResponsesRef.current(...args)
  }), []);

  useEffect(() => {
    setRuntimeMethods(stableRuntime);
    return () => {
      setRuntimeMethods(null);
    };
  }, [setRuntimeMethods, stableRuntime]);

  const LayoutComponent = useMemo(() => resolveLayoutComponent(layout), [layout]);

  let content = null;
  if (React.isValidElement(LayoutComponent)) {
    content = React.cloneElement(LayoutComponent, { className, style, ...layoutProps }, children);
  } else if (typeof LayoutComponent === 'function') {
    content = (
      <LayoutComponent className={className} style={style} {...layoutProps}>
        {children}
      </LayoutComponent>
    );
  } else {
    content = (
      <QuestionnaireLayout className={className} style={style} {...layoutProps}>
        {children}
      </QuestionnaireLayout>
    );
  }

  if (theme) {
    if (React.isValidElement(theme)) {
      return React.cloneElement(theme, undefined, content);
    }
    if (typeof theme === 'function') {
      const ThemedWrapper = theme;
      return <ThemedWrapper>{content}</ThemedWrapper>;
    }
    return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
  }

  return content;
});

QuestionnaireRendererInner.displayName = 'QuestionnaireRendererInner';

const QuestionnaireRenderer = forwardRef((props, ref) => {
  const {
    templateJson,
    validationJson,
    initialData,
    onChange,
    onSubmit,
    onValidationError,
    componentsMap,
    layout,
    readOnly,
    disabled,
    locale,
    translations,
    theme,
    persistentStore,
    storageKey,
    enableAutosave,
    validators,
    asyncValidation,
    fetchMedia,
    onError,
    lookupClient,
    lookupBaseUrl,
    resolveLookupUrl,
    className,
    style,
    children,
    ...layoutProps
  } = props;

  const autosaveConfig = useMemo(() => {
    if (!enableAutosave) {
      return null;
    }
    if (typeof enableAutosave === 'object') {
      return enableAutosave;
    }
    return {};
  }, [enableAutosave]);

  return (
    <QuestionnaireProvider>
      <QuestionnaireRendererInner
        ref={ref}
        templateJson={templateJson}
        validationJson={validationJson}
        initialData={initialData}
        onChange={onChange}
        onSubmit={onSubmit}
        onValidationError={onValidationError}
        componentsMap={componentsMap}
        layout={layout}
        readOnly={readOnly}
        disabled={disabled}
        locale={locale}
        translations={translations}
        theme={theme}
        persistentStore={persistentStore}
        storageKey={storageKey}
        autosaveConfig={autosaveConfig}
        validators={validators}
        asyncValidation={asyncValidation}
        fetchMedia={fetchMedia}
        onError={onError}
        lookupClient={lookupClient}
        lookupBaseUrl={lookupBaseUrl}
        resolveLookupUrl={resolveLookupUrl}
        className={className}
        style={style}
        {...layoutProps}
      >
        {children}
      </QuestionnaireRendererInner>
    </QuestionnaireProvider>
  );
});

QuestionnaireRenderer.displayName = 'QuestionnaireRenderer';

export default QuestionnaireRenderer;