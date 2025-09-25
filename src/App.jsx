import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box, Alert } from '@mui/material';
import { QuestionnaireProvider } from './contexts/QuestionnaireContext';
import QuestionnaireRenderer from './components/QuestionnaireLayout';

// Create Material-UI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

function App() {
  const [questionnaire, setQuestionnaire] = useState(null);
  const [validation, setValidation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load questionnaire and validation data
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load questionnaire template
        const questionnaireResponse = await fetch('/json/template.json');
        if (!questionnaireResponse.ok) {
          throw new Error(`Failed to load questionnaire: ${questionnaireResponse.status}`);
        }
        const questionnaireData = await questionnaireResponse.json();
        
        // Load validation rules
        const validationResponse = await fetch('/json/validation.json');
        if (!validationResponse.ok) {
          throw new Error(`Failed to load validation: ${validationResponse.status}`);
        }
        const validationData = await validationResponse.json();
        
        setQuestionnaire(questionnaireData);
        setValidation(validationData);
        setError(null);
      } catch (err) {
        console.error('Error loading questionnaire:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h4" align="center">
            Loading Questionnaire...
          </Typography>
        </Container>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Alert severity="error">
            <Typography variant="h6">Error Loading Questionnaire</Typography>
            <Typography variant="body2">{error}</Typography>
          </Alert>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionnaireProvider>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              {questionnaire?.title || 'Research Survey'}
            </Typography>
            {questionnaire?.description && (
              <Typography variant="body1" align="center" color="text.secondary">
                {questionnaire.description}
              </Typography>
            )}
          </Box>
          
          <QuestionnaireRenderer 
            questionnaire={questionnaire} 
            validation={validation}
          />
        </Container>
      </QuestionnaireProvider>
    </ThemeProvider>
  );
}

export default App;
