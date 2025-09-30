import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box, Alert } from '@mui/material';
import QuestionnaireRenderer from './components/QuestionnaireRenderer';
import LayoutSwitcher from './components/LayoutSwitcher';

// Create Material-UI theme with enhanced styling
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#f50057',
      dark: '#c51162',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
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
  const [layout, setLayout] = useState('default'); // 'default' or 'simple'

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
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {submitStatus && (
          <Box sx={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 2000, width: '90%', maxWidth: 600 }}>
            <Alert 
              severity={submitStatus.type === 'error' ? 'error' : 'success'}
              onClose={() => setSubmitStatus(null)}
              sx={{ boxShadow: 3 }}
            >
              {submitStatus.message}
            </Alert>
          </Box>
        )}
        
        <LayoutSwitcher currentLayout={layout} onLayoutChange={setLayout} />
        
        <QuestionnaireRenderer
          templateJson={questionnaire}
          validationJson={validation}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onValidationError={handleValidationError}
          enableAutosave={{ debounceMs: 500, clearOnSubmit: true }}
          storageKey="rsurvey-demo-draft"
          layout={layout}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;