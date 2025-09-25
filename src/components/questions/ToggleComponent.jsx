import React from 'react';
import { Typography, Box, Alert } from '@mui/material';

const ToggleComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Toggle: {question.label || question.title}</Typography>
      <Typography variant="body2">Toggle component coming soon</Typography>
    </Alert>
  </Box>
);

export default ToggleComponent;