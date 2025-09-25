import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { useQuestionnaire, validateQuestion } from '../../hooks/useQuestionnaire';
import ErrorMessage from '../common/ErrorMessage';

const CurrencyInputComponent = ({
  question,
  value = '',
  onChange,
  error,
  disabled = false,
  responses = {},
  variables = {},
  validation = []
}) => {

  const { setTouched, touched, setError } = useQuestionnaire();
  const [localValue, setLocalValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');


  // Indonesian Rupiah formatting
  const formatCurrency = useCallback((amount) => {
    if (!amount || amount === '') {
      return '';
    }

    // Remove any non-numeric characters except decimal point
    const numericValue = String(amount).replace(/[^\d.]/g, '');

    // Parse the number
    const numValue = parseFloat(numericValue) || 0;

    // Format with provided locale/format
    const formatted = new Intl.NumberFormat(question.separatorFormat, {
      style: 'currency',
      currency: question.currency || 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numValue);
    return formatted;
  }, [question.separatorFormat, question.currency]);

  // Parse currency string to number
  const parseCurrency = (currencyString) => {
    if (!currencyString || currencyString === '') {
      return '';
    }

    // Remove currency symbol and formatting, keep only numbers and decimal
    const numericString = currencyString.replace(/[^\d]/g, '');
    const result = numericString === '' ? '' : parseInt(numericString, 10);
    return result;
  };

  // Update display value when value prop changes
  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value);
      const formattedValue = formatCurrency(value);
      setDisplayValue(formattedValue);
    }
  }, [value, localValue, formatCurrency]);

  // Handle input change
  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Allow empty input
    if (inputValue === '') {
      setDisplayValue('');
      setLocalValue('');
      onChange('');
      return;
    }

    // Remove any non-numeric characters except decimal point for processing
    const cleanValue = inputValue.replace(/[^\d.]/g, '');

    // Parse to get numeric value
    const numericValue = parseCurrency(cleanValue);

    // Update local state
    setLocalValue(numericValue);
    const formattedValue = formatCurrency(numericValue);
    setDisplayValue(formattedValue);

    // Pass numeric value to parent
    onChange(numericValue);
  };

  // Handle blur for validation
  const handleBlur = () => {
    setTouched(question.dataKey);

    const errors = validateQuestion(question, localValue, responses, variables, validation, touched);

    if (errors.length > 0) {
      setError(question.dataKey, errors[0]);
    } else {
      setError(question.dataKey, null);
    }
  };

  // Parse label HTML to extract main label and help text
  const parseLabel = (htmlLabel) => {
    if (!htmlLabel) return { mainLabel: '', helpText: '' };

    // Remove HTML tags for the main label
    let mainLabel = htmlLabel.replace(/<[^>]*>/g, '').trim();

    // Extract help text (content after <br> with specific styling)
    let helpText = '';
    const helpTextMatch = htmlLabel.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    if (helpTextMatch) {
      helpText = helpTextMatch[1];
      // Remove the help text part from main label
      mainLabel = htmlLabel.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
    }

    return { mainLabel, helpText };
  };

  const questionLabel = question.label || question.title || question.name || '';
  const { mainLabel, helpText } = parseLabel(questionLabel);

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        label={mainLabel || question.title}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error}
  // Errors are rendered by <ErrorMessage /> below; helperText should only show help/instructions.
  helperText={helpText ? undefined : question.instructions}
        disabled={disabled}
        required={question.required}
        type="text"
        inputProps={{
          inputMode: 'numeric',
          'aria-label': `Currency input for ${mainLabel || question.title}`,
          'aria-describedby': error ? `${question.dataKey}-error` : undefined
        }}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
          },
        }}
      />

      <ErrorMessage
        error={error}
        isRequired={question.required}
        hasValue={!!localValue && localValue !== ''}
        isTouched={touched[question.dataKey]}
      />

      {helpText && (
        <Typography
          variant="caption"
          sx={{ mt: 0.5, display: 'block', color: '#007bff', fontStyle: 'italic' }}
        >
          {helpText}
        </Typography>
      )}

      {question.instructions && !error && !helpText && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 0.5, display: 'block' }}
        >
          {question.instructions}
        </Typography>
      )}
    </Box>
  );
};

export default CurrencyInputComponent;