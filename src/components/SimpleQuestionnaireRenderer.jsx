import React, { useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  LinearProgress,
  Alert,
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
    <Container maxWidth="md" sx={{ py: 4 }} className={className} style={style}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {effectiveTemplate?.title || 'Survey'} - Section {currentPage + 1} of {sections.length || 1}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={sections.length ? ((currentPage + 1) / sections.length) * 100 : 0} 
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      <Alert severity={isOnline ? 'success' : 'warning'} sx={{ mb: 3 }}>
        Status: {isOnline ? 'Online' : 'Offline'}
      </Alert>

      {currentSection ? (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {currentSection.label || currentSection.title}
          </Typography>
          
          {currentSection.description && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {currentSection.description}
            </Typography>
          )}

          {renderSectionQuestions(currentSection)}
        </Paper>
      ) : (
        <Alert severity="info">No sections available</Alert>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="outlined" 
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </Button>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="contained" 
            onClick={handleNext}
            disabled={currentPage >= sections.length - 1}
          >
            Next
          </Button>
          {sections.length > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>

      {footer}
    </Container>
  );
}

export default SimpleQuestionnaireRenderer;