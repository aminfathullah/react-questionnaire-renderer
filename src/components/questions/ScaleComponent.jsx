import React from 'react';
import {
  FormControl,
  FormLabel,
  Rating,
  Typography,
  Box,
  FormHelperText
} from '@mui/material';

const ScaleComponent = ({ 
  question, 
  value = null, 
  onChange, 
  error,
  disabled = false 
}) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  // Parse scale configuration
  const minValue = question.scaleMin || question.min || 1;
  const maxValue = question.scaleMax || question.max || 5;
  const stepValue = question.step || 1;

  // Create labels for scale endpoints
  const getScaleLabels = () => {
    const labels = {};
    
    if (question.scaleLabels) {
      return question.scaleLabels;
    }
    
    if (question.minLabel && question.maxLabel) {
      labels[minValue] = question.minLabel;
      labels[maxValue] = question.maxLabel;
    }
    
    return labels;
  };

  const scaleLabels = getScaleLabels();

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl component="fieldset" fullWidth error={!!error} disabled={disabled}>
        <FormLabel component="legend" sx={{ mb: 2, color: 'text.primary' }}>
          {question.title}
          {question.required && (
            <Typography component="span" color="error" sx={{ ml: 0.5 }}>
              *
            </Typography>
          )}
        </FormLabel>
        
        {question.instructions && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 3 }}
          >
            {question.instructions}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {scaleLabels[minValue] && (
            <Typography variant="body2" sx={{ mr: 2, minWidth: 60 }}>
              {scaleLabels[minValue]}
            </Typography>
          )}
          
          <Rating
            value={value}
            onChange={handleChange}
            max={maxValue}
            precision={stepValue}
            size="large"
            sx={{
              '& .MuiRating-icon': {
                mx: 0.5,
              },
              '& .MuiRating-iconFilled': {
                color: 'primary.main',
              },
              '& .MuiRating-iconHover': {
                color: 'primary.light',
              },
            }}
          />
          
          {scaleLabels[maxValue] && (
            <Typography variant="body2" sx={{ ml: 2, minWidth: 60 }}>
              {scaleLabels[maxValue]}
            </Typography>
          )}
        </Box>
        
        {/* Scale numbers */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          {Array.from({ length: maxValue - minValue + 1 }, (_, i) => minValue + i).map((num) => (
            <Typography 
              key={num}
              variant="caption" 
              sx={{ 
                mx: 2.2,
                color: value === num ? 'primary.main' : 'text.secondary',
                fontWeight: value === num ? 'bold' : 'normal'
              }}
            >
              {num}
            </Typography>
          ))}
        </Box>
        
        {error && <FormHelperText>{error}</FormHelperText>}
        
        {value && (
          <Typography variant="caption" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Selected: {value}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default ScaleComponent;