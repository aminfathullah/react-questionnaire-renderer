import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  Typography,
  FormHelperText,
  OutlinedInput
} from '@mui/material';

const MultipleSelectComponent = ({ 
  question, 
  value = [], 
  onChange, 
  error,
  disabled = false 
}) => {
  const handleChange = (event) => {
    const selectedValues = event.target.value;
    
    // Convert selected values to the expected format
    const newValue = selectedValues.map(val => {
      const selectedOption = options.find(opt => opt.value == val);
      return selectedOption ? {
        value: selectedOption.value,
        label: selectedOption.text || selectedOption.label
      } : { value: val, label: val };
    });
    
    onChange(newValue);
  };

  // Parse label HTML to extract main label and help text
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

  // Get options from question definition
  const getOptions = () => {
    if (question.answers && Array.isArray(question.answers)) {
      return question.answers;
    }
    
    if (question.options && Array.isArray(question.options)) {
      return question.options;
    }
    
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
  const selectedValues = currentValueArray.map(item => item.value);
  const labelId = `multiple-select-${question.variable}-label`;
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
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<OutlinedInput label={mainLabel || question.title} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((val) => {
                const selectedItem = currentValueArray.find(item => item.value == val);
                return (
                  <Chip 
                    key={val} 
                    label={selectedItem?.label || val}
                    size="small"
                  />
                );
              })}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
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
        
        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default MultipleSelectComponent;