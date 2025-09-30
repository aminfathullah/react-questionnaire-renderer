import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider
} from '@mui/material';
import ErrorMessage from '../common/ErrorMessage';

const NowInputComponent = ({
  question,
  value = '',
  onChange,
  error,
  disabled = false
}) => {
  const initialCompletionTime = value && typeof value === 'object' ? value.completionTime || '' : '';
  const [completionTime, setCompletionTime] = useState(initialCompletionTime);

  const handleGetTime = () => {
    if (disabled) {
      return;
    }
    const now = new Date().toLocaleString('id-ID', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setCompletionTime(now);
    onChange({
      completionTime: now
    });
  };

  const isRequired = question.required;

  return (
    <Box sx={{ mb: 3 }}>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: 500 }}>
          {question.label}
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <TextField
            fullWidth
            value={completionTime}
            disabled
            variant="outlined"
            sx={{ flex: 1 }}
          />
          <Button
            variant="contained"
            onClick={handleGetTime}
            disabled={disabled}
            sx={{
              bgcolor: '#6b46c1',
              '&:hover': { bgcolor: '#553c9a' },
              textTransform: 'none',
              minWidth: '120px'
            }}
          >
            Get Time
          </Button>
        </Box>


      <ErrorMessage
        error={error}
        isRequired={isRequired}
        hasValue={!!completionTime}
      />
      </Box>
  );
};

export default NowInputComponent;