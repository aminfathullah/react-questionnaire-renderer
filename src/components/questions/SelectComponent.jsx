import React from 'react';
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
import { useQuestionnaire, validateQuestion } from '../../hooks/useQuestionnaire';

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
  const { setTouched, touched, setError } = useQuestionnaire();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === '') {
      onChange(null);
      return;
    }
    
    const selectedOption = options.find(opt => opt.value == selectedValue);
    
    // Save as array with single object for consistency with expressions
    const newValue = selectedOption ? [{
      value: selectedOption.value,
      label: selectedOption.text || selectedOption.label
    }] : null;
    
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
      
      <FormControl fullWidth error={!!error} disabled={disabled}>
        <InputLabel id={labelId} required={question.required}>
          {mainLabel || question.title}
        </InputLabel>
        <Select
          labelId={labelId}
          value={Array.isArray(value) && value.length > 0 ? value[0].value : ''}
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
          {/* Empty option for non-required fields */}
          {!question.required && (
            <MenuItem value="">
              <em>Select an option...</em>
            </MenuItem>
          )}
          
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Box>
                <Typography variant="body1">
                  {option.text || option.label}
                </Typography>
                {option.description && (
                  <Typography variant="caption" color="text.secondary" display="block">
                    {option.description}
                  </Typography>
                )}
              </Box>
            </MenuItem>
          ))}
        </Select>
        
        {helpText && (
          <FormHelperText sx={{ color: '#007bff', fontStyle: 'italic' }}>
            {helpText}
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