import React from 'react';
import { Typography, Box, Alert } from '@mui/material';

const RangeSliderComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Range Slider: {question.label || question.title}</Typography>
      <Typography variant="body2">Range slider component coming soon</Typography>
    </Alert>
  </Box>
);

export default RangeSliderComponent;