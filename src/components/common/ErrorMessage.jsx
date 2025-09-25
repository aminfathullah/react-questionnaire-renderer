import React from 'react';
import { Box, Typography } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

const ErrorMessage = ({ error, isRequired, hasValue, customMessage, isTouched = false }) => {
  // Show error if there's a custom error or if field is required but empty and touched
  const shouldShowError = error || (isRequired && !hasValue && isTouched);
  
  if (!shouldShowError) return null;

  const message = error || customMessage || 'This field is required';

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1, 
      color: 'error.main',
      mt: 1 
    }}>
      <ErrorIcon fontSize="small" />
      <Typography variant="body2" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;