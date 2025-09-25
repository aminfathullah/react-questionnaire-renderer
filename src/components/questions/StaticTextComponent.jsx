import React from 'react';
import {
  Typography,
  Box,
  Paper
} from '@mui/material';

const StaticTextComponent = ({ question }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          backgroundColor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}
      >
        {question.title && (
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ mb: 1, color: 'text.primary' }}
          >
            {question.title}
          </Typography>
        )}
        
        {question.instructions && (
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.primary',
              lineHeight: 1.6,
              '& p': { mb: 1 },
              '& ul, & ol': { pl: 2, mb: 1 },
              '& li': { mb: 0.5 }
            }}
            dangerouslySetInnerHTML={{ __html: question.instructions }}
          />
        )}
        
        {question.text && (
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.primary',
              lineHeight: 1.6,
              '& p': { mb: 1 },
              '& ul, & ol': { pl: 2, mb: 1 },
              '& li': { mb: 0.5 }
            }}
            dangerouslySetInnerHTML={{ __html: question.text }}
          />
        )}
      </Paper>
    </Box>
  );
};

export default StaticTextComponent;