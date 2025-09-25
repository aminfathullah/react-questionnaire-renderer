import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useQuestionnaire, isQuestionEnabled, processPlaceholders, evaluateExpression } from '../hooks/useQuestionnaire';

// Import specific question type components
import SectionComponent from './questions/SectionComponent';
import NestedRosterComponent from './questions/NestedRosterComponent';
import InnerHTMLComponent from './questions/InnerHTMLComponent';
import VariableComponent from './questions/VariableComponent';
import TextInputComponent from './questions/TextInputComponent';
import RadioGroupComponent from './questions/RadioGroupComponent';
import SelectComponent from './questions/SelectComponent';
import NumberInputComponent from './questions/NumberInputComponent';
import CheckboxComponent from './questions/CheckboxComponent';
import TextAreaComponent from './questions/TextAreaComponent';
import DateInputComponent from './questions/DateInputComponent';
import TimeInputComponent from './questions/TimeInputComponent';
import ToggleComponent from './questions/ToggleComponent';
import RangeSliderComponent from './questions/RangeSliderComponent';
import MultipleSelectComponent from './questions/MultipleSelectComponent';
import EmailInputComponent from './questions/EmailInputComponent';
import CurrencyInputComponent from './questions/CurrencyInputComponent';
import ListTextRepeatComponent from './questions/ListTextRepeatComponent';
import GpsInputComponent from './questions/GpsInputComponent';
import PhotoInputComponent from './questions/PhotoInputComponent';
import NowInputComponent from './questions/NowInputComponent';

// Question type mapping based on the provided list
const QUESTION_TYPE_MAP = {
  1: 'Section',
  2: 'Nested/Roster', 
  3: 'Inner HTML',
  4: 'Variable',
  6: 'Action',
  11: 'Date',
  12: 'Date Time Local',
  13: 'Time',
  14: 'Month',
  15: 'Week',
  16: 'Single Check',
  17: 'Toggle',
  18: 'Range Slider',
  19: 'Url Input',
  20: 'Currency',
  21: 'List Text Repeat',
  22: 'List Select Repeat',
  23: 'Multiple Select',
  24: 'Masking',
  25: 'Text Input',
  26: 'Radio Group',
  27: 'Select',
  28: 'Number',
  29: 'Checkbox',
  30: 'Text Area',
  31: 'Email',
  32: 'PhotoInput',
  33: 'GpsInput',
  34: 'CsvInput',
  35: 'NowInput',
  36: 'SignatureInput',
  37: 'UnitInput',
  38: 'DecimalInput',
  39: 'FileInput',
  40: 'RatingInput'
};

function QuestionRenderer({ 
  question, 
  responses = {}, 
  variables = {}, 
  errors = {}, 
  validation = [],
  rowIndex = null 
}) {
  const {
    setResponse,
    setVariable,
    clearError,
    config
  } = useQuestionnaire();

  const isReadOnly = Boolean(config?.readOnly);
  const isDisabled = Boolean(config?.disabled);
  const isComponentDisabled = isReadOnly || isDisabled;
  const locale = config?.locale ?? 'en';
  const translations = config?.translations ?? {};
  const fetchMedia = config?.fetchMedia;
  const componentOverrides = config?.componentsMap || {};

  // For variable components with expression, compute and store the value
  useEffect(() => {
    if (question.type === 4 && question.expression) {
      let computed;
      try {
        computed = evaluateExpression(question.expression, responses, variables, rowIndex);
      } catch {
        // evaluateExpression already logs errors; ensure we don't crash here
        computed = undefined;
      }

      // Only set variable if it actually changed to avoid re-render loops
      const finalDataKey = rowIndex !== null ? `${question.dataKey}#${rowIndex}` : question.dataKey;
      const existing = responses[finalDataKey] || variables[finalDataKey];

      // Use JSON stringify for structural comparison for arrays/objects
      const same = existing === computed || JSON.stringify(existing) === JSON.stringify(computed);
      if (!same) {
        console.log(`Computed variable ${finalDataKey} =`, computed);
        setVariable(question.dataKey, computed, rowIndex);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.type, question.expression, JSON.stringify(responses), JSON.stringify(variables), rowIndex]);

  // Check if question should be rendered based on enable conditions
  const shouldRender = isQuestionEnabled(question, responses, variables, rowIndex);
  
  if (!shouldRender) {
    return null;
  }

  // Get current value
  const dataKey = rowIndex !== null ? `${question.dataKey}#${rowIndex}` : question.dataKey;
  const currentValue = responses[dataKey] || variables[dataKey];
  const currentError = errors[dataKey];

  // Handle value changes
  const handleChange = (value) => {
    if (isComponentDisabled) {
      return;
    }
    // Clear any existing error
    if (currentError) {
      clearError(dataKey);
    }

    // Set the value based on question type
    if (question.type === 4) { // Variable type
      setVariable(question.dataKey, value, rowIndex);
    } else {
      setResponse(question.dataKey, value, rowIndex);
    }
  };

  // Process label with placeholders
  const processedLabel = processPlaceholders(question.label, responses, variables, rowIndex);

  // Common props for all question components
  const commonProps = {
    question: {
      ...question,
      label: processedLabel
    },
    value: currentValue,
    onChange: handleChange,
    error: currentError,
    responses,
    variables,
    rowIndex,
    validation,
    readOnly: isReadOnly,
    disabled: isComponentDisabled,
    locale,
    translations,
    fetchMedia
  };

  const overrideComponent =
    componentOverrides[question.dataKey] ||
    componentOverrides[question.type] ||
    componentOverrides[String(question.type)] ||
    (question.questionType ? componentOverrides[question.questionType] : undefined) ||
    (QUESTION_TYPE_MAP[question.type] ? componentOverrides[QUESTION_TYPE_MAP[question.type]] : undefined);

  if (overrideComponent) {
    if (React.isValidElement(overrideComponent)) {
      return React.cloneElement(overrideComponent, commonProps);
    }
    if (typeof overrideComponent === 'function') {
      const OverrideComponent = overrideComponent;
      return <OverrideComponent {...commonProps} />;
    }
  }

  // Render appropriate component based on question type
  const renderQuestionComponent = () => {
    switch (question.type) {
      case 1: // Section
        return <SectionComponent {...commonProps} />;
      
      case 2: // Nested/Roster
        return <NestedRosterComponent {...commonProps} />;
      
      case 3: // Inner HTML
        return <InnerHTMLComponent {...commonProps} />;
      
      case 4: // Variable
        return <VariableComponent {...commonProps} />;
      
      case 11: // Date
      case 12: // Date Time Local
      case 14: // Month
      case 15: // Week
        return <DateInputComponent {...commonProps} />;
      
      case 13: // Time
        return <TimeInputComponent {...commonProps} />;
      
      case 16: // Single Check
        return <CheckboxComponent {...commonProps} single={true} />;
      
      case 17: // Toggle
        return <ToggleComponent {...commonProps} />;
      
      case 18: // Range Slider
        return <RangeSliderComponent {...commonProps} />;
      
      case 19: // URL Input
        return <TextInputComponent {...commonProps} inputType="url" />;
      
      case 20: // Currency
        return <CurrencyInputComponent {...commonProps} />;
      
      case 21: // List Text Repeat
        return <ListTextRepeatComponent {...commonProps} />;
      
      case 22: // List Select Repeat
        return <ListTextRepeatComponent {...commonProps} selectMode={true} />;
      
      case 23: // Multiple Select
        return <MultipleSelectComponent {...commonProps} />;
      
      case 24: // Masking
        return <TextInputComponent {...commonProps} masked={true} />;
      
      case 25: // Text Input
        return <TextInputComponent {...commonProps} />;
      
      case 26: // Radio Group
        return <RadioGroupComponent {...commonProps} />;
      
      case 27: // Select
        return <SelectComponent {...commonProps} />;
      
      case 28: // Number
        return <NumberInputComponent {...commonProps} />;
      
      case 29: // Checkbox
        return <CheckboxComponent {...commonProps} />;
      
      case 30: // Text Area
        return <TextAreaComponent {...commonProps} />;
      
      case 31: // Email
        return <EmailInputComponent {...commonProps} />;

      case 32: // Photo Input
        return <PhotoInputComponent {...commonProps} />;

      case 33: // GPS Input
        return <GpsInputComponent {...commonProps} />;
      
      case 35: // NowInput (current timestamp)
        return <NowInputComponent {...commonProps} />;
      
      default:
        return (
          <Box sx={{ p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
            <strong>Unsupported Question Type: {question.type}</strong>
            <br />
            {QUESTION_TYPE_MAP[question.type] || 'Unknown'}
            <br />
            <em>{processedLabel}</em>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {renderQuestionComponent()}
    </Box>
  );
}

export default QuestionRenderer;