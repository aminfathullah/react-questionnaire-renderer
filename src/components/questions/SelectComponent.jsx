import React, { useEffect, useMemo, useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  CircularProgress
} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ErrorMessage from '../common/ErrorMessage';
import {
  useQuestionnaire,
  validateQuestion,
  getValue
} from '../../hooks/useQuestionnaire';
import { compareLoose } from '../../utils/lookups';

const normalizeArrayValue = (raw) => {
  if (Array.isArray(raw)) {
    return raw
      .map((item) => {
        if (item && typeof item === 'object') {
          if ('value' in item) return item.value;
          return item;
        }
        return item;
      })
      .filter((item) => item !== undefined && item !== null);
  }
  if (raw && typeof raw === 'object' && 'value' in raw) {
    return raw.value !== undefined ? [raw.value] : [];
  }
  if (raw === undefined || raw === null) return [];
  return [raw];
};

const SelectComponent = ({
  question,
  value = '',
  onChange,
  error,
  disabled = false,
  responses = {},
  variables = {},
  validation = []
}) => {
  const {
    setTouched,
    touched,
    setError,
    ensureLookupDataset
  } = useQuestionnaire();

  const [lookupDataSets, setLookupDataSets] = useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState(null);
  const [lookupInitialized, setLookupInitialized] = useState(() => {
    const sources = question.sourceSelect;
    return !Array.isArray(sources) || sources.length === 0;
  });

  const handleOptionChange = (_event, selectedOption) => {
    if (disabled || lookupLoading) {
      return;
    }

    if (!selectedOption) {
      onChange(null);
      return;
    }

    onChange([
      {
        value: selectedOption.value,
        label: selectedOption.label,
        meta: {
          sourceId: selectedOption.sourceId,
          row: selectedOption.row
        }
      }
    ]);
  };

  const handleBlur = () => {
    setTouched(question.dataKey);
    const errors = validateQuestion(question, value, responses, variables, validation, touched);
    if (errors.length > 0) {
      setError(question.dataKey, errors[0]);
    } else {
      setError(question.dataKey, null);
    }
  };

  const parseLabel = (htmlLabel) => {
    if (!htmlLabel) return { mainLabel: '', helpText: '' };

    let mainLabel = htmlLabel.replace(/<[^>]*>/g, '').trim();

    let helpText = '';
    const helpTextMatch = htmlLabel.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    if (helpTextMatch) {
      helpText = helpTextMatch[1];
      mainLabel = htmlLabel.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
    }

    return { mainLabel, helpText };
  };

  const questionDefinedOptions = useMemo(() => {
    if (question.answers && Array.isArray(question.answers)) {
      return question.answers;
    }

    if (question.options && Array.isArray(question.options)) {
      return question.options;
    }

    if (question.categorical && Array.isArray(question.categorical)) {
      return question.categorical.map(cat => ({
        value: cat.value || cat.id,
        text: cat.text || cat.title || cat.label,
        description: cat.description
      }));
    }

    return [];
  }, [question.answers, question.options, question.categorical]);

  const lookupSources = useMemo(
    () => Array.isArray(question.sourceSelect) ? question.sourceSelect : [],
    [question.sourceSelect]
  );

  const hasLookupSources = lookupSources.length > 0;
  const sourcesSignature = useMemo(
    () => (hasLookupSources ? JSON.stringify(lookupSources) : ''),
    [lookupSources, hasLookupSources]
  );

  useEffect(() => {
    let active = true;
    if (!hasLookupSources || typeof ensureLookupDataset !== 'function') {
      setLookupDataSets([]);
      setLookupLoading(false);
      setLookupError(null);
      setLookupInitialized(true);
      return () => {
        active = false;
      };
    }

    setLookupInitialized(false);

    const fetchLookups = async () => {
      setLookupLoading(true);
      setLookupError(null);
      try {
        const datasets = await Promise.all(
          lookupSources.map((source) => ensureLookupDataset(source))
        );
        if (!active) return;
        setLookupDataSets(datasets.map((set) => (Array.isArray(set) ? set : [])));
        setLookupInitialized(true);
      } catch (error) {
        if (!active) return;
        const message = error && error.message ? error.message : 'Failed to load lookup data';
        setLookupError(message);
        setLookupDataSets([]);
        setLookupInitialized(true);
      } finally {
        if (active) {
          setLookupLoading(false);
        }
      }
    };

    fetchLookups();

    return () => {
      active = false;
    };
  }, [ensureLookupDataset, sourcesSignature, hasLookupSources, lookupSources]);

  const lookupOptions = useMemo(() => {
    if (!hasLookupSources) return [];

    return lookupSources.flatMap((source, sourceIndex) => {
      const rows = lookupDataSets[sourceIndex] || [];
      const conditions = source.parentCondition || [];

      const filteredRows = conditions.length === 0
        ? rows
        : rows.filter((row) => conditions.every((condition) => {
          const datasetValue = row?.[condition.key];
          const rawReference = typeof condition.value === 'string'
            ? getValue(condition.value, responses, variables)
            : condition.value;
          const normalizedValues = normalizeArrayValue(rawReference);
          if (!normalizedValues.length) {
            return false;
          }
          return normalizedValues.some((candidate) => compareLoose(datasetValue, candidate));
        }));

      const sourceId = source.id || source.tableName || `lookup-${sourceIndex}`;

      return filteredRows.map((row) => {
        const rawValue = row?.[source.value];
        const label = row?.[source.desc]
          ?? row?.label
          ?? row?.text
          ?? row?.title
          ?? String(rawValue ?? '');
        const description = source.fullDesc ? row?.[source.fullDesc] : row?.description;
        const optionKey = `${sourceId}:${rawValue ?? ''}`;

        return {
          optionKey,
          value: rawValue,
          label,
          description,
          sourceId,
          row
        };
      });
    });
  }, [lookupSources, lookupDataSets, responses, variables, hasLookupSources]);

  const staticOptions = useMemo(() => {
    return questionDefinedOptions.map((option) => {
      const rawValue = option.value ?? option.id ?? option.code ?? option.text ?? '';
      return {
        optionKey: `static:${rawValue ?? ''}`,
        value: rawValue,
        label: option.text || option.label || option.title || String(rawValue ?? ''),
        description: option.description
      };
    });
  }, [questionDefinedOptions]);

  const effectiveOptions = useMemo(() => {
    if (hasLookupSources) {
      return lookupOptions;
    }
    return staticOptions;
  }, [hasLookupSources, lookupOptions, staticOptions]);

  const sortedOptions = useMemo(() => {
    if (!effectiveOptions.length) return [];
    const cloned = [...effectiveOptions];
    cloned.sort((a, b) => {
      const valA = a?.value ?? '';
      const valB = b?.value ?? '';
      return String(valA).localeCompare(String(valB), undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
    return cloned;
  }, [effectiveOptions]);

  const selectedOption = useMemo(() => {
    if (!Array.isArray(value) || value.length === 0) {
      return null;
    }
    const current = value[0];
    const storedValue = current && typeof current === 'object'
      ? (current.value !== undefined ? current.value : current)
      : current;
    return sortedOptions.find((option) => compareLoose(option.value, storedValue)) || null;
  }, [value, sortedOptions]);

  const filterOptions = useMemo(() => createFilterOptions({
    stringify: (option) => `${option?.label ?? ''} ${option?.value ?? ''} ${option?.description ?? ''}`.trim()
  }), []);

  useEffect(() => {
    if (!hasLookupSources) return;
    if (!lookupInitialized) return;
    if (!Array.isArray(value) || value.length === 0) return;
    if (!sortedOptions.length || !selectedOption) {
      onChange(null);
    }
  }, [hasLookupSources, lookupInitialized, sortedOptions, selectedOption, value, onChange]);

  const questionLabel = question.label || question.title || question.name || '';
  const { mainLabel, helpText } = parseLabel(questionLabel);

  return (
    <Box sx={{ width: '100%' }}>
      {question.instructions && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {question.instructions}
        </Typography>
      )}

      <Autocomplete
        fullWidth
        disableClearable={question.required}
        options={sortedOptions}
        value={selectedOption}
        onChange={handleOptionChange}
        onBlur={handleBlur}
        disabled={disabled}
        loading={lookupLoading}
        filterOptions={filterOptions}
        autoHighlight
        includeInputInList
        selectOnFocus
        clearOnEscape
        handleHomeEndKeys
        getOptionLabel={(option) => option?.label ?? ''}
        isOptionEqualToValue={(option, optionValue) =>
          compareLoose(option.value, optionValue?.value ?? optionValue)
        }
        ListboxProps={{
          style: { maxHeight: 300 }
        }}
        noOptionsText={
          lookupLoading
            ? 'Loading options...'
            : lookupError
              ? 'Failed to load options'
              : 'No options available'
        }
        loadingText="Loading options..."
        renderOption={(props, option) => (
          <li {...props} key={option.optionKey}>
            <Box>
              <Typography variant="body1">
                {option.label}
              </Typography>
              {option.description && (
                <Typography variant="caption" color="text.secondary" display="block">
                  {option.description}
                </Typography>
              )}
            </Box>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={mainLabel || question.title}
            required={question.required}
            error={!!error}
            placeholder={!question.required ? 'Select an option...' : undefined}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {lookupLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />

      {helpText && (
        <Typography
          variant="caption"
          sx={{ color: '#007bff', fontStyle: 'italic', display: 'block', mt: 1 }}
        >
          {helpText}
        </Typography>
      )}

      {lookupError && (
        <Typography variant="caption" color="error" sx={{ display: 'block', mt: 1 }}>
          {lookupError}
        </Typography>
      )}

      <ErrorMessage
        error={error}
        isRequired={question.required}
        hasValue={Array.isArray(value) && value.length > 0}
        isTouched={touched[question.dataKey]}
      />
    </Box>
  );
};

export default SelectComponent;