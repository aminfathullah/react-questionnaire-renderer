import React, { useState, useEffect } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import ErrorMessage from '../common/ErrorMessage';
import { useQuestionnaire, validateQuestion } from '../../hooks/useQuestionnaire';

const TextInputComponent = ({
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
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleBlur = () => {
    setTouched(question.dataKey);
    const errors = validateQuestion(question, localValue, responses, variables, validation, touched);
    if (errors.length > 0) {
      setError(question.dataKey, errors[0]);
    } else {
      setError(question.dataKey, null);
    }
  };

  // Extract label and help text from HTML
  const parseLabel = (label) => {
    if (!label) return { main: '', help: '' };
    
    // Check if label contains HTML with help text
    if (label.includes('<br><small><i><font color="#007bff">')) {
      const parts = label.split('<br><small><i><font color="#007bff">');
      const mainLabel = parts[0].replace(/<[^>]*>/g, ''); // Strip HTML tags
      const helpText = parts[1]?.replace(/<\/font><\/i><\/small>/g, '').replace(/<[^>]*>/g, '') || '';
      return { main: mainLabel, help: helpText };
    }
    
    // Strip HTML tags for simple labels
    const cleanLabel = label.replace(/<[^>]*>/g, '');
    return { main: cleanLabel, help: '' };
  };

  const { main: mainLabel, help: helpText } = parseLabel(question.label || question.title);

  const getInputType = () => {
    if (question.mask === 'integer') return 'number';
    if (question.mask === 'decimal') return 'number';
    if (question.title?.toLowerCase().includes('email')) return 'email';
    if (question.title?.toLowerCase().includes('phone')) return 'tel';
    return 'text';
  };

  const getInputProps = () => {
    const props = {};
    
    if (question.mask === 'integer') {
      props.step = 1;
      props.inputMode = 'numeric';
    } else if (question.mask === 'decimal') {
      props.step = 'any';
      props.inputMode = 'decimal';
    }
    
    if (question.maxLength) {
      props.maxLength = question.maxLength;
    }
    
    return props;
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <TextField
        fullWidth
        label={mainLabel}
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error}
        helperText={helpText && !error ? helpText : undefined}
        disabled={disabled}
        required={question.required}
        type={getInputType()}
        inputProps={getInputProps()}
        multiline={question.questionType === 'TEXT_LONG'}
        rows={question.questionType === 'TEXT_LONG' ? 4 : 1}
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
        hasValue={!!localValue && localValue.trim() !== ''}
        isTouched={touched[question.dataKey]}
      />
      
      {helpText && error && (
        <Typography 
          variant="caption" 
          sx={{ 
            mt: 0.5, 
            display: 'block',
            color: '#007bff',
            fontStyle: 'italic',
            fontSize: '12px'
          }}
        >
          {helpText}
        </Typography>
      )}
    </Box>
  );
};

export default TextInputComponent;