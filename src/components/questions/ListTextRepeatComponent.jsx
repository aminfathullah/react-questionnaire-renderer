import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormHelperText,
  FormControl
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const ListTextRepeatComponent = ({ 
  question, 
  value = [], 
  onChange, 
  error,
  disabled = false,
  selectMode = false 
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const currentValueArray = Array.isArray(value) ? value : [];
      const newValue = currentValueArray.length > 0 ? Math.max(...currentValueArray.map(item => item.value)) + 1 : 1;
      
      const newItem = {
        value: newValue,
        label: inputValue.trim()
      };

      onChange([...currentValueArray, newItem]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (itemValue) => {
    const currentValueArray = Array.isArray(value) ? value : [];
    const newArray = currentValueArray.filter(item => item.value !== itemValue);
    onChange(newArray);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  // Parse label HTML to extract main label and help text
  const parseLabel = (htmlLabel) => {
    if (!htmlLabel) return { mainLabel: '', helpText: '' };
    
    let mainLabel = htmlLabel.replace(/<[^>]*>/g, '').trim();
    let helpText = '';
    const helpTextMatch = htmlLabel.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    if (helpTextMatch) {
      helpText = helpTextMatch[1];
      mainLabel = htmlLabel.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
    }
    
    return { mainLabel, helpText };
  };

  const currentValueArray = Array.isArray(value) ? value : [];
  const questionLabel = question.label || question.title || question.name || '';
  const { mainLabel, helpText } = parseLabel(questionLabel);

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth error={!!error} disabled={disabled}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
          {mainLabel || question.title}
          {question.required && (
            <Typography component="span" color="error" sx={{ ml: 0.5 }}>
              *
            </Typography>
          )}
        </Typography>
        
        {helpText && (
          <Typography 
            variant="body2" 
            sx={{ mb: 2, color: '#007bff', fontStyle: 'italic' }}
          >
            {helpText}
          </Typography>
        )}

        {question.instructions && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {question.instructions}
          </Typography>
        )}

        {/* Input field to add new items */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Add new ${selectMode ? 'option' : 'item'}...`}
            fullWidth
            size="small"
            disabled={disabled}
          />
          <Button 
            variant="contained" 
            onClick={handleAddItem}
            disabled={!inputValue.trim() || disabled}
            startIcon={<Add />}
          >
            Add
          </Button>
        </Box>

        {/* List of current items */}
        {currentValueArray.length > 0 && (
          <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
            {currentValueArray.map((item) => (
              <ListItem key={item.value} divider>
                <ListItemText 
                  primary={item.label}
                  secondary={`Value: ${item.value}`}
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    onClick={() => handleRemoveItem(item.value)}
                    disabled={disabled}
                    color="error"
                    size="small"
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}

        {currentValueArray.length === 0 && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1, textAlign: 'center' }}
          >
            No {selectMode ? 'options' : 'items'} added yet. Use the input above to add {selectMode ? 'options' : 'items'}.
          </Typography>
        )}

        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default ListTextRepeatComponent;