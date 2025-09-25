import React from 'react';
import { Typography, Box, Alert } from '@mui/material';

// Placeholder components for complex types that need more implementation

export const SectionComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography variant="h6">Section: {question.label || question.title}</Typography>
      <Typography variant="body2">Section components need nested question rendering - coming soon!</Typography>
    </Alert>
  </Box>
);

export const NestedRosterComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'warning.main', borderRadius: 1 }}>
    <Alert severity="warning">
      <Typography variant="h6">Roster: {question.label || question.title}</Typography>
      <Typography variant="body2">Nested roster functionality under development</Typography>
    </Alert>
  </Box>
);

export const InnerHTMLComponent = ({ question }) => (
  <Box sx={{ p: 2 }}>
    <Typography 
      component="div"
      dangerouslySetInnerHTML={{ __html: question.html || question.content || question.instructions }}
    />
  </Box>
);

export const VariableComponent = ({ question, value }) => (
  <Box sx={{ p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
    <Typography variant="caption" color="info.dark">
      Variable: {question.variable} = {value}
    </Typography>
  </Box>
);

export const ToggleComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Toggle: {question.label || question.title}</Typography>
      <Typography variant="body2">Toggle component coming soon</Typography>
    </Alert>
  </Box>
);

export const RangeSliderComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Range Slider: {question.label || question.title}</Typography>
      <Typography variant="body2">Range slider component coming soon</Typography>
    </Alert>
  </Box>
);

export const CurrencyInputComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Currency: {question.label || question.title}</Typography>
      <Typography variant="body2">Currency input component coming soon</Typography>
    </Alert>
  </Box>
);

export const ListTextRepeatComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>List Repeat: {question.label || question.title}</Typography>
      <Typography variant="body2">List repeat component coming soon</Typography>
    </Alert>
  </Box>
);

export const MultipleSelectComponent = ({ question }) => (
  <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
    <Alert severity="info">
      <Typography>Multiple Select: {question.label || question.title}</Typography>
      <Typography variant="body2">Multiple select component coming soon</Typography>
    </Alert>
  </Box>
);

// Default exports for individual components
export default SectionComponent;