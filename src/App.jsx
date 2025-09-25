import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box, Alert } from '@mui/material';
import QuestionnaireRenderer from 'react-questionnaire-renderer';

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
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Move hooks here so they are always called (not after early returns)
  const handleSubmit = useCallback(async (responses) => {
    console.log('Submitting responses', responses);
    setSubmitStatus({ type: 'success', message: 'Responses submitted successfully.' });
  }, []);

  const handleValidationError = useCallback((errorsMap) => {
    const count = Object.keys(errorsMap || {}).length;
    setSubmitStatus({ type: 'error', message: `Please resolve ${count} validation error${count === 1 ? '' : 's'} before submitting.` });
  }, []);

  const handleChange = useCallback((responses) => {
    console.log('Responses changed', responses);
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

        {submitStatus && (
          <Alert sx={{ mb: 2 }} severity={submitStatus.type === 'error' ? 'error' : 'success'}>
            {submitStatus.message}
          </Alert>
        )}
        
        <QuestionnaireRenderer
          templateJson={questionnaire}
          validationJson={validation}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onValidationError={handleValidationError}
          enableAutosave={{ debounceMs: 500, clearOnSubmit: true }}
          storageKey="rsurvey-demo-draft"
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;