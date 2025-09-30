import React from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { useQuestionnaire, validateQuestion } from '../../hooks/useQuestionnaire';
import ErrorMessage from '../common/ErrorMessage';

const NumberInputComponent = ({
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

  const handleChange = (event) => {
    if (disabled) {
      return;
    }
    const newValue = event.target.value;
    // Convert to number if valid, otherwise keep as string for validation
    const numericValue = newValue === '' ? '' : Number(newValue);
    onChange(numericValue);
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error}
  // Don't show the error in the TextField helperText to avoid duplicate messages.
  // Use the separate <ErrorMessage /> component below to render validation errors.
  helperText={helpText ? undefined : question.instructions}
        disabled={disabled}
        required={question.required}
        type="number"
        inputProps={{
          min: question.min,
          max: question.max,
          step: question.step || 1,
          inputMode: 'numeric'
        }}
        variant="outlined"
      />

      <ErrorMessage
        error={error}
        isRequired={question.required}
        hasValue={!!value}
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

export default NumberInputComponent;