import React from 'react';
import { Typography, Box, Alert } from '@mui/material';

const SectionComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography variant="h6">Section: {question.label || question.title}</Typography>
      <Typography variant="body2">Section components need nested question rendering - coming soon!</Typography>
    </Alert>
  </Box>
);

export default SectionComponent;