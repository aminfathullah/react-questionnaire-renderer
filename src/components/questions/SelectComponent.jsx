import React, { useEffect, useMemo, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  FormHelperText
} from '@mui/material';
import ErrorMessage from '../common/ErrorMessage';
import {
  useQuestionnaire,
  validateQuestion,
  getValue
} from '../../hooks/useQuestionnaire';
import { compareLoose } from '../../utils/lookups';

const LOADING_OPTION_KEY = '__lookup-loading__';

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

  const handleChange = (event) => {
    const selectedKey = event.target.value;
    if (selectedKey === '') {
      onChange(null);
      return;
    }

    if (selectedKey === LOADING_OPTION_KEY) {
      return;
    }

    const selectedOption = effectiveOptions.find((opt) => opt.optionKey === selectedKey);

    const newValue = selectedOption
      ? [{
          value: selectedOption.value,
          label: selectedOption.label,
          meta: {
            sourceId: selectedOption.sourceId,
            row: selectedOption.row
          }
        }]
      : null;

    onChange(newValue);
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

  const selectedOptionKey = useMemo(() => {
    if (!Array.isArray(value) || value.length === 0) {
      return '';
    }
    const current = value[0];
    const storedValue = current && typeof current === 'object' ? current.value ?? current : current;
    const matched = effectiveOptions.find((option) => compareLoose(option.value, storedValue));
    return matched ? matched.optionKey : '';
  }, [value, effectiveOptions]);

  useEffect(() => {
    if (!hasLookupSources) return;
    if (!lookupInitialized) return;
    if (!Array.isArray(value) || value.length === 0) return;
    if (effectiveOptions.length === 0 || !selectedOptionKey) {
      onChange(null);
    }
  }, [hasLookupSources, lookupInitialized, effectiveOptions, selectedOptionKey, value, onChange]);

  const labelId = `select-${question.variable}-label`;
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
      
      <FormControl fullWidth error={!!error} disabled={disabled || lookupLoading}>
        <InputLabel id={labelId} required={question.required}>
          {mainLabel || question.title}
        </InputLabel>
        <Select
          labelId={labelId}
          value={selectedOptionKey}
          onChange={handleChange}
          onBlur={handleBlur}
          label={mainLabel || question.title}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'divider',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          }}
        >
          {!question.required && (
            <MenuItem value="">
              <em>Select an option...</em>
            </MenuItem>
          )}

          {lookupLoading && (
            <MenuItem disabled value={LOADING_OPTION_KEY}>
              <em>Loading options...</em>
            </MenuItem>
          )}

          {!lookupLoading && effectiveOptions.map((option) => (
            <MenuItem key={option.optionKey} value={option.optionKey}>
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
            </MenuItem>
          ))}

          {!lookupLoading && hasLookupSources && !effectiveOptions.length && !lookupError && (
            <MenuItem disabled value="__no-data__">
              <em>No options available</em>
            </MenuItem>
          )}
        </Select>
        
        {helpText && (
          <FormHelperText sx={{ color: '#007bff', fontStyle: 'italic' }}>
            {helpText}
          </FormHelperText>
        )}

        {lookupError && (
          <FormHelperText error>
            {lookupError}
          </FormHelperText>
        )}
      </FormControl>
      
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