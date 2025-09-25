import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  LinearProgress,
  AppBar,
  Toolbar,
  IconButton,
  Chip,
  Alert,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  WifiOff as WifiOffIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import { useQuestionnaire, processPlaceholders } from '../hooks/useQuestionnaire';
import QuestionRenderer from './QuestionRenderer';

function QuestionnaireRenderer({ questionnaire, validation }) {
  const {
    currentPage,
    responses,
    variables,
    errors,
    isOnline,
    setCurrentPage,
    loadQuestionnaire,
    setTouched
  } = useQuestionnaire();

  const [currentSection, setCurrentSection] = useState(null);
  const [sections, setSections] = useState([]);

  // Load questionnaire data when component mounts
  useEffect(() => {
    if (questionnaire && validation) {
      loadQuestionnaire(questionnaire, validation);
    }
  }, [questionnaire, validation, loadQuestionnaire]);

  // Extract sections from questionnaire
  useEffect(() => {
    if (questionnaire?.components) {
      const sectionList = [];
      questionnaire.components.forEach((component) => {
        if (Array.isArray(component)) {
          component.forEach((item) => {
            if (item.type === 1) { // Section type
              sectionList.push(item);
            }
          });
        }
      });
      setSections(sectionList);
      if (sectionList.length > 0 && !currentSection) {
        setCurrentSection(sectionList[0]);
      }
    }
  }, [questionnaire, currentSection]);

  // Update current section based on page
  useEffect(() => {
    if (sections.length > 0 && currentPage < sections.length) {
      setCurrentSection(sections[currentPage]);
    }
  }, [currentPage, sections]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      // Touch all questions in current section before navigating
      if (currentSection?.components?.[0]) {
        currentSection.components[0].forEach(component => {
          if (component.dataKey) {
            setTouched(component.dataKey);
          }
        });
      }
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < sections.length - 1) {
      // Touch all questions in current section before navigating
      if (currentSection?.components?.[0]) {
        currentSection.components[0].forEach(component => {
          if (component.dataKey) {
            setTouched(component.dataKey);
          }
        });
      }
      setCurrentPage(currentPage + 1);
    }
  };

  const calculateProgress = () => {
    if (sections.length === 0) return 0;
    return Math.round(((currentPage + 1) / sections.length) * 100);
  };

  const renderSectionContent = (section) => {
    if (!section?.components) return null;

    return section.components[0]?.map((component, index) => (
      <Box key={component.dataKey || index} sx={{ mb: 3 }}>
        <QuestionRenderer 
          question={component}
          responses={responses}
          variables={variables}
          errors={errors}
          validation={validation}
        />
      </Box>
    ));
  };

  if (!questionnaire) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h6" align="center">
          No questionnaire data available
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ pb: 8 }}>
      {/* Header with progress */}
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              {questionnaire.title || 'Survey'}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Section {currentPage + 1} of {sections.length}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Online/Offline indicator */}
            <Chip
              icon={isOnline ? <SaveIcon /> : <WifiOffIcon />}
              label={isOnline ? 'Online' : 'Offline'}
              color={isOnline ? 'success' : 'warning'}
              size="small"
            />
          </Box>
        </Toolbar>
        
        {/* Progress bar */}
        <LinearProgress 
          variant="determinate" 
          value={calculateProgress()} 
          sx={{ height: 6 }}
        />
      </AppBar>

      {/* Main content */}
      <Container maxWidth="md" sx={{ py: 3 }}>
        {currentSection && (
          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {processPlaceholders(currentSection.label, responses, variables)}
            </Typography>
            
            {currentSection.description && (
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {processPlaceholders(currentSection.description, responses, variables)}
              </Typography>
            )}

            {renderSectionContent(currentSection)}
          </Paper>
        )}

        {/* Error display */}
        {Object.keys(errors).length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="body2">
              Please correct the errors above before continuing.
            </Typography>
          </Alert>
        )}
      </Container>

      {/* Mobile navigation bar - fixed at bottom */}
      <Paper 
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 1000,
          borderRadius: 0,
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 'md',
            mx: 'auto',
          }}
        >
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' },
              '&:disabled': { bgcolor: 'grey.300' },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="body2" sx={{ mx: 2 }}>
            {currentSection?.label && processPlaceholders(currentSection.label, responses, variables)}
          </Typography>

          <IconButton
            onClick={handleNextPage}
            disabled={currentPage >= sections.length - 1}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' },
              '&:disabled': { bgcolor: 'grey.300' },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default QuestionnaireRenderer;