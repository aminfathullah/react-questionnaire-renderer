import React from 'react';
import { Box, LinearProgress, Typography, Chip } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

/**
 * Visual progress indicator for a section
 */
function SectionProgress({ current, total, sectionName, isComplete }) {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isComplete ? (
            <CheckCircle sx={{ fontSize: 20, color: 'success.main' }} />
          ) : (
            <RadioButtonUnchecked sx={{ fontSize: 20, color: 'action.disabled' }} />
          )}
          <Typography variant="body2" fontWeight={500}>
            {sectionName}
          </Typography>
        </Box>
        <Chip
          label={`${current}/${total}`}
          size="small"
          color={isComplete ? 'success' : 'default'}
          sx={{ fontWeight: 600, minWidth: 50 }}
        />
      </Box>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 6,
          borderRadius: 3,
          bgcolor: 'action.hover',
          '& .MuiLinearProgress-bar': {
            borderRadius: 3,
            bgcolor: isComplete ? 'success.main' : 'primary.main',
          },
        }}
      />
    </Box>
  );
}

export default SectionProgress;
