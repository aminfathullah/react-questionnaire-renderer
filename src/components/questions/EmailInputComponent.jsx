import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const EmailInputComponent = ({ 
  question, 
  value = '', 
  onChange, 
  error,
  disabled = false 
}) => {
  const handleChange = (event) => {
    if (disabled) {
      return;
    }
    const newValue = event.target.value;
    onChange(newValue);
  };

  // Basic email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const displayError = error || (value && !isValidEmail(value) ? 'Please enter a valid email address' : '');

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        label={question.label || question.title}
        value={value}
        onChange={handleChange}
        error={!!displayError}
        helperText={displayError || question.instructions}
        disabled={disabled}
        required={question.required}
        type="email"
        inputProps={{
          inputMode: 'email',
          autoComplete: 'email'
        }}
        variant="outlined"
      />
      
      {question.instructions && !displayError && (
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

export default EmailInputComponent;