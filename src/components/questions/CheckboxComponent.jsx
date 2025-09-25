import React from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  FormHelperText
} from '@mui/material';

const CheckboxComponent = ({ 
  question, 
  value = [], 
  onChange, 
  error,
  disabled = false 
}) => {
  const handleChange = (optionValue) => (event) => {
    const isChecked = event.target.checked;
    const selectedOption = options.find(opt => opt.value == optionValue);
    let currentValueArray = Array.isArray(value) ? [...value] : [];
    
    if (isChecked) {
      // Add new selection in {value, label} format
      if (selectedOption && !currentValueArray.find(item => item.value == optionValue)) {
        currentValueArray.push({
          value: selectedOption.value,
          label: selectedOption.text || selectedOption.label
        });
      }
    } else {
      // Remove selection
      currentValueArray = currentValueArray.filter(item => item.value != optionValue);
    }
    
    onChange(currentValueArray);
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
    
    return [];
  };

  const options = getOptions();
  const currentValueArray = Array.isArray(value) ? value : [];
  const questionLabel = question.label || question.title || question.name || '';
  const { mainLabel, helpText } = parseLabel(questionLabel);

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl component="fieldset" fullWidth error={!!error} disabled={disabled}>
        <FormLabel component="legend" sx={{ mb: 2, color: 'text.primary' }}>
          {mainLabel || question.title}
          {question.required && (
            <Typography component="span" color="error" sx={{ ml: 0.5 }}>
              *
            </Typography>
          )}
        </FormLabel>
        
        {helpText && (
          <Typography 
            variant="body2" 
            sx={{ mb: 2, color: '#007bff', fontStyle: 'italic' }}
          >
            {helpText}
          </Typography>
        )}
        
        {question.instructions && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {question.instructions}
          </Typography>
        )}
        
        <FormGroup
          sx={{
            '& .MuiFormControlLabel-root': {
              mb: 1,
              ml: 0,
              '& .MuiCheckbox-root': {
                p: 1,
              },
            },
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={currentValueArray.some(item => item.value == option.value)}
                  onChange={handleChange(option.value)}
                  size="medium"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">
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
                borderRadius: 1,
                m: 0,
                mb: 1,
                p: 1,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                '& .Mui-checked + .MuiFormControlLabel-label': {
                  fontWeight: 'medium',
                },
              }}
            />
          ))}
        </FormGroup>
        
        {error && <FormHelperText>{error}</FormHelperText>}
        
        {question.maxSelections && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            Maximum {question.maxSelections} selections allowed
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default CheckboxComponent;