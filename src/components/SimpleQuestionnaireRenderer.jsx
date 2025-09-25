import React, { useState, useEffect } from 'react';
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

function SimpleQuestionnaireRenderer({ questionnaire, validation: validationRules }) {
  const {
    currentPage,
    responses,
    variables,
    errors,
    isOnline,
    setCurrentPage,
    loadQuestionnaire
  } = useQuestionnaire();

  const [sections, setSections] = useState([]);

  // Load questionnaire data
  useEffect(() => {
    if (questionnaire && validationRules) {
      loadQuestionnaire(questionnaire, validationRules);
    }
  }, [questionnaire, validationRules, loadQuestionnaire]);

  // Extract sections
  useEffect(() => {
    if (questionnaire?.components) {
      const sectionList = [];
      
      // The questionnaire.components is an array of arrays
      // Each outer array represents a page, each inner array contains components
      questionnaire.components.forEach((pageComponents) => {
        if (Array.isArray(pageComponents)) {
          pageComponents.forEach((component) => {
            if (component.type === 1) { // Section type
              sectionList.push(component);
            }
          });
        }
      });
      
      console.log('Extracted sections:', sectionList);
      setSections(sectionList);
    }
  }, [questionnaire]);

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

  const renderSectionQuestions = (section) => {
    if (!section?.components) {
      console.log('No components in section:', section);
      return <Typography color="text.secondary">No questions in this section</Typography>;
    }

    // Get the questions from the first component array
    const questions = section.components[0] || [];
    console.log('Section questions:', questions);
    
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
          validation={validationRules}
        />
      </Box>
    ));
  };

  const currentSection = sections[currentPage];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {questionnaire?.title || 'Survey'} - Section {currentPage + 1} of {sections.length}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={sections.length ? ((currentPage + 1) / sections.length) * 100 : 0} 
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      {/* Status */}
      <Alert severity={isOnline ? 'success' : 'warning'} sx={{ mb: 3 }}>
        Status: {isOnline ? 'Online' : 'Offline'}
      </Alert>

      {/* Content */}
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

          {/* Render actual questions */}
          {renderSectionQuestions(currentSection)}
          
          {/* Debug section structure */}
          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="caption" display="block" gutterBottom>
              Section Structure (Debug):
            </Typography>
            <Typography variant="caption" component="pre" sx={{ fontSize: '10px', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(currentSection, null, 2)}
            </Typography>
          </Box>
        </Paper>
      ) : (
        <Alert severity="info">No sections available</Alert>
      )}

      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button 
          variant="outlined" 
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </Button>
        
        <Button 
          variant="contained" 
          onClick={handleNext}
          disabled={currentPage >= sections.length - 1}
        >
          Next
        </Button>
      </Box>

      {/* Debug info */}
      <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="caption" display="block">
          Debug: Current Page = {currentPage}, Sections = {sections.length}
        </Typography>
        <Typography variant="caption" display="block">
          Responses: {Object.keys(responses).length} items
        </Typography>
        <Typography variant="caption" display="block">
          Variables: {Object.keys(variables).length} items
        </Typography>
        <Typography variant="caption" display="block">
          Errors: {Object.keys(errors).length} items
        </Typography>
      </Box>
    </Container>
  );
}

export default SimpleQuestionnaireRenderer;