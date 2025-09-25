import React from 'react';
import { Typography, Box } from '@mui/material';

// Displays computed text/value depending on render flags in JSON
// - render: when true, show content; when false, keep hidden (used as helper variable)
// - renderType: 1 => inline text, 2 => block/HTML-like small label
const VariableComponent = ({ question, value }) => {
  if (question.render === false) return null;

  const content = value !== undefined && value !== null ? String(value) : '';
  const isBlock = Number(question.renderType) === 2;

  return (
    <Box sx={{ mb: 1 }}>
      {isBlock ? (
        <Typography variant="body1">{content}</Typography>
      ) : (
        <Typography variant="subtitle2" color="text.primary">{content}</Typography>
      )}
    </Box>
  );
};

export default VariableComponent;