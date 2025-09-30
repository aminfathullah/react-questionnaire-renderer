import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const DateInputComponent = ({ 
  question, 
  value = '', 
  onChange, 
  error,
  disabled = false,
  nowInput = false 
}) => {
  const handleChange = (event) => {
    if (disabled) {
      return;
    }
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

  // Set current date/time if nowInput is true
  React.useEffect(() => {
    if (nowInput && !value) {
      const now = new Date();
      const isoString = question.type === 11 ? // Date only
        now.toISOString().split('T')[0] : // YYYY-MM-DD
        now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
      onChange(isoString);
    }
  }, [nowInput, value, onChange, question.type]);

  const getInputType = () => {
    switch (question.type) {
      case 11: return 'date';
      case 12: return 'datetime-local';
      case 14: return 'month';
      case 15: return 'week';
      default: return 'date';
    }
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
        error={!!error}
  // Errors are rendered by <ErrorMessage /> below; helperText should only show help/instructions.
  helperText={helpText ? undefined : question.instructions}
        disabled={disabled}
        required={question.required}
        type={getInputType()}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
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
      
      {nowInput && (
        <Typography 
          variant="caption" 
          color="info.main"
          sx={{ mt: 0.5, display: 'block' }}
        >
          Automatically set to current date/time
        </Typography>
      )}
    </Box>
  );
};

export default DateInputComponent;