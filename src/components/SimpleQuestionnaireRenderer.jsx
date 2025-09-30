import React, { useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  LinearProgress,
  Alert,
  Chip,
} from '@mui/material';
import { useQuestionnaire } from '../hooks/useQuestionnaire';
import QuestionRenderer from './QuestionRenderer';

const extractSections = (template) => {
  if (!template?.components) {
    return [];
  }

  const sections = [];
  template.components.forEach((pageComponents) => {
    if (!Array.isArray(pageComponents)) return;
    pageComponents.forEach((component) => {
      if (component?.type === 1) {
        sections.push(component);
      }
    });
  });

  return sections;
};

function SimpleQuestionnaireRenderer({ template: templateOverride, className, style, footer }) {
  const {
    currentPage,
    responses,
    variables,
    errors,
    isOnline,
    validation,
    setCurrentPage,
    template,
    submit
  } = useQuestionnaire();

  const effectiveTemplate = templateOverride || template;
  const sections = useMemo(() => extractSections(effectiveTemplate), [effectiveTemplate]);
  const currentSection = sections[currentPage];
  const canSubmit = Boolean(submit);

  const handleNext = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!submit) {
      console.warn('Submit handler is not available yet.');
      return;
    }
    try {
      await submit();
    } catch (error) {
      console.error('Failed to submit questionnaire:', error);
    }
  }, [submit]);

  const renderSectionQuestions = (section) => {
    if (!section?.components) {
      return <Typography color="text.secondary">No questions in this section</Typography>;
    }

    const questions = section.components[0] || [];
    if (questions.length === 0) {
      return <Typography color="text.secondary">No questions available</Typography>;
    }
    
    return questions.map((question, index) => (
      <Box key={question.dataKey || index} sx={{ mb: 3 }}>
        <QuestionRenderer
          question={question}
          responses={responses}
          variables={variables}
          errors={errors}
          validation={validation}
        />
      </Box>
    ));
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 10 }} className={className} style={style}>
      {/* Fixed Header */}
      <Box 
        sx={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          boxShadow: 1,
        }}
      >
        <Container maxWidth="md" sx={{ py: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" gutterBottom fontWeight={600} color="primary.main">
              {effectiveTemplate?.title || 'Survey'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                Section {currentPage + 1} of {sections.length || 1}
              </Typography>
              <Chip 
                label={isOnline ? 'Online' : 'Offline'} 
                size="small"
                color={isOnline ? 'success' : 'warning'}
                sx={{ fontWeight: 600 }}
              />
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={sections.length ? ((currentPage + 1) / sections.length) * 100 : 0} 
              sx={{ 
                height: 10, 
                borderRadius: 5,
                bgcolor: 'action.hover',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 3 } }}>

        {currentSection ? (
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 2, sm: 3, md: 4 }, 
              mb: 3,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Box sx={{ mb: 3, pb: 2, borderBottom: 2, borderColor: 'primary.main' }}>
              <Typography variant="h4" gutterBottom fontWeight={600} color="text.primary">
                {currentSection.label || currentSection.title}
              </Typography>
              
              {currentSection.description && (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                  {currentSection.description}
                </Typography>
              )}
            </Box>

            {renderSectionQuestions(currentSection)}
          </Paper>
        ) : (
          <Alert severity="info" sx={{ borderRadius: 2 }}>
            No sections available. Please check the questionnaire configuration.
          </Alert>
        )}

        {footer && <Box sx={{ mt: 3 }}>{footer}</Box>}
      </Container>

      {/* Fixed Bottom Navigation */}
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          py: { xs: 1.5, sm: 2 },
          px: { xs: 2, sm: 3 },
          zIndex: 1100,
          borderRadius: 0,
          borderTop: 2,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="outlined" 
              onClick={handlePrev}
              disabled={currentPage === 0}
              sx={{ 
                minWidth: { xs: 80, sm: 100 },
                fontWeight: 600,
              }}
            >
              Previous
            </Button>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary" display="block">
                Progress: {Math.round(((currentPage + 1) / sections.length) * 100)}%
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {currentPage < sections.length - 1 ? (
                <Button 
                  variant="contained" 
                  onClick={handleNext}
                  disabled={currentPage >= sections.length - 1}
                  sx={{ 
                    minWidth: { xs: 80, sm: 100 },
                    fontWeight: 600,
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  sx={{ 
                    minWidth: { xs: 100, sm: 120 },
                    fontWeight: 600,
                  }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default SimpleQuestionnaireRenderer;