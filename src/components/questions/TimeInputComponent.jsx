import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const TimeInputComponent = ({ 
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

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        label={question.label || question.title}
        value={value}
        onChange={handleChange}
  error={!!error}
  // Leave helperText for instructions only; errors are shown by <ErrorMessage/> if needed
  helperText={question.instructions}
        disabled={disabled}
        required={question.required}
        type="time"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      {question.instructions && !error && (
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

export default TimeInputComponent;