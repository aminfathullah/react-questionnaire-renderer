import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  FormHelperText
} from '@mui/material';
import { getValue } from '../../hooks/useQuestionnaire';

const RadioGroupComponent = ({ 
  question, 
  value = '', 
  onChange, 
  error,
  disabled = false,
  responses = {},
  variables = {},
  rowIndex = null
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(opt => opt.value == selectedValue);
    
    // Save as array with single object for consistency with expressions
    const newValue = selectedOption ? [{
      value: selectedOption.value,
      label: selectedOption.text || selectedOption.label
    }] : null;
    
    onChange(newValue);
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

  // Get options from question definition
  const getOptions = () => {
    if (question.answers && Array.isArray(question.answers)) {
      return question.answers;
    }
    
    if (question.options && Array.isArray(question.options)) {
      return question.options;
    }
    
    // Handle categorical options
    if (question.categorical && Array.isArray(question.categorical)) {
      return question.categorical.map(cat => ({
        value: cat.value || cat.id,
        text: cat.text || cat.title || cat.label
      }));
    }

    if (question.sourceOption){
      // resolve sourceOption using the current responses/variables and rowIndex
      const sourceOptions = getValue(question.sourceOption, responses, variables, rowIndex) || [];

      // If the source returns an object with nested array, try to extract common shapes
      if (Array.isArray(sourceOptions)) return sourceOptions;

      // Single option object -> wrap as array
      if (sourceOptions && typeof sourceOptions === 'object') return [sourceOptions];

      // Primitive -> convert to a single option entry
      return [{ value: sourceOptions, text: String(sourceOptions) }];
    }
    
    return [];
  };

  const options = getOptions();

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <FormControl component="fieldset" fullWidth error={!!error} disabled={disabled}>
        <FormLabel component="legend" sx={{ mb: 1, color: 'text.primary', fontSize: '16px' }}>
          {mainLabel}
          {question.required && (
            <Typography component="span" color="error" sx={{ ml: 0.5 }}>
              *
            </Typography>
          )}
        </FormLabel>
        
        {helpText && (
          <Typography 
            variant="caption" 
            sx={{ 
              mb: 2,
              color: '#007bff',
              fontStyle: 'italic',
              fontSize: '12px',
              display: 'block'
            }}
          >
            {helpText}
          </Typography>
        )}
        
        <RadioGroup
          value={Array.isArray(value) && value.length > 0 ? value[0].value : ''}
          onChange={handleChange}
          sx={{
            '& .MuiFormControlLabel-root': {
              mb: 0.5,
              ml: 0,
              '& .MuiRadio-root': {
                p: 1,
              },
            },
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio size="medium" />}
              label={
                <Box>
                  <Typography variant="body2">
                    {option.text || option.label}
                  </Typography>
                  {option.description && (
                    <Typography variant="caption" color="text.secondary">
                      {option.description}
                    </Typography>
                  )}
                </Box>
              }
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                  borderRadius: 1,
                },
                '& .Mui-checked + .MuiFormControlLabel-label': {
                  fontWeight: 'medium',
                },
              }}
            />
          ))}
        </RadioGroup>
        
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default RadioGroupComponent;