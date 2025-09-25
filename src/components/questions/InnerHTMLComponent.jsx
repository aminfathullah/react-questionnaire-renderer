import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

const InnerHTMLComponent = ({ question }) => {
  const content = question.html || question.content || question.label || question.instructions || '';
  
  // Check if this is a section header (contains specific styling patterns)
  const isSectionHeader = content.includes('background-color') && 
                         (content.includes('#6467f2') || content.includes('grey'));

  if (isSectionHeader) {
    // Extract the text content from HTML
    const textMatch = content.match(/>([^<]+)</);
    const headerText = textMatch ? textMatch[1].replace(/<[^>]*>/g, '') : '';
    
    // Determine the color scheme based on content
    const isMainHeader = content.includes('background-color: grey') || 
                        content.includes('PEMUTAKHIRAN DATA TUNGGAL');
    const isPrimarySection = content.includes('#6467f2');
    
    return (
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            bgcolor: isMainHeader ? 'grey.600' : isPrimarySection ? '#6467f2' : 'primary.main',
            color: 'white',
            p: 2,
            borderRadius: '13px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: isMainHeader ? '16px' : '14px',
            border: '2px solid white'
          }}
        >
          {headerText}
        </Typography>
      </Box>
    );
  }

  // For other HTML content, render as-is
  return (
    <Box sx={{ mb: 2 }}>
      <Typography 
        component="div"
        sx={{ 
          '& p': { mb: 1 },
          '& ul, & ol': { pl: 2, mb: 1 },
          '& li': { mb: 0.5 }
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default InnerHTMLComponent;