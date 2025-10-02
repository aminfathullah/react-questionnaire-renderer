import React from 'react';
import { Typography, Box } from '@mui/material';
import TextInputComponent from './TextInputComponent';
import ListTextRepeatComponent from './ListTextRepeatComponent';
import InnerHTMLComponent from './InnerHTMLComponent';

// Displays computed text/value depending on render flags in JSON
// - render: when true, show content; when false, keep hidden (used as helper variable)
// - renderType:
//      1 => TextInputComponent (read-only)
//      2 => ListTextRepeatComponent (read-only)
//      3 => InnerHTMLComponent
const VariableComponent = ({ question, value, onChange, ...rest }) => {
  const renderFlag = typeof question.render === 'string'
    ? question.render.trim().toLowerCase() === 'true'
    : question.render;

  if (renderFlag === false) {
    return null;
  }

  const renderType = Number(question.renderType);

  if (renderFlag === true) {
    const commonChildProps = {
      ...rest,
      question: {
        ...question,
        disableInput: true
      },
      value,
      onChange,
      disabled: true
    };

    switch (renderType) {
      case 1: {
        return (
          <TextInputComponent
            {...commonChildProps}
            value={value != null ? String(value) : ''}
          />
        );
      }
      case 2: {
        const listValue = Array.isArray(value) ? value : (value ? [value] : []);
        return (
          <ListTextRepeatComponent
            {...commonChildProps}
            value={listValue}
          />
        );
      }
      case 3: {
        const htmlQuestion = {
          ...question,
          html: typeof value === 'string' && value.length > 0 ? value : question.label
        };
        return (
          <InnerHTMLComponent
            {...rest}
            question={htmlQuestion}
          />
        );
      }
      default:
        break;
    }
  }

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