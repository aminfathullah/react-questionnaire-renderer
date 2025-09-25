import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const TextAreaComponent = ({ 
  question, 
  value = '', 
  onChange, 
  error,
  disabled = false 
}) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
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
        multiline
        rows={question.rows || 4}
        label={mainLabel || question.title}
        value={value}
        onChange={handleChange}
  error={!!error}
  // Do not duplicate error text in helperText; ErrorMessage component handles error display.
  helperText={helpText ? undefined : question.instructions}
        disabled={disabled}
        required={question.required}
        inputProps={{
          maxLength: question.maxLength
        }}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            alignItems: 'flex-start',
          },
        }}
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

export default TextAreaComponent;