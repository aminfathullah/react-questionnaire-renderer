import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
  Paper,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Send as SubmitIcon
} from '@mui/icons-material';
import { useQuestionnaire } from '../hooks/useQuestionnaire';
import QuestionRenderer from './QuestionRenderer';

const DRAWER_WIDTH = 280;

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

function QuestionnaireLayout({
  template: templateOverride,
  className,
  style,
  header,
  footer
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const isMobile = true; // Always treat as mobile for simplicity
  
  const {
    currentPage,
    responses,
    variables,
    errors,
    validation,
    setCurrentPage,
    template,
    submit
  } = useQuestionnaire();

  const [mobileOpen, setMobileOpen] = useState(false);

  const effectiveTemplate = templateOverride || template;
  const sections = useMemo(() => extractSections(effectiveTemplate), [effectiveTemplate]);

  const canSubmit = Boolean(submit);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionClick = (index) => {
    setCurrentPage(index);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const currentSection = sections[currentPage];

  const renderSectionQuestions = (section) => {
    if (!section?.components) {
      return <Typography color="text.secondary">No questions in this section</Typography>;
    }

    const questions = section.components[0] || [];
    
    if (questions.length === 0) {
      return <Typography color="text.secondary">No questions available</Typography>;
    }
    
    return questions.map((question, index) => (
      <Box key={question.dataKey || index} sx={{ mb: 2 }}>
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

  const getSectionProgress = (sectionIndex) => {
    // Simple logic to determine if section has responses
    const section = sections[sectionIndex];
    if (!section?.components?.[0]) return 'incomplete';
    
    const questions = section.components[0];
    const requiredQuestions = questions.filter(q => q.required);
    
    if (requiredQuestions.length === 0) return 'complete';
    
    const answeredRequired = requiredQuestions.filter(q => 
      responses[q.dataKey] !== undefined && responses[q.dataKey] !== ''
    );
    
    return answeredRequired.length === requiredQuestions.length ? 'complete' : 'incomplete';
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, borderBottom: 1, borderColor: 'divider', bgcolor: 'primary.main' }}>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, fontSize: '13px', fontWeight: 600, color: 'white', lineHeight: 1.3 }}>
          {effectiveTemplate?.title || 'Survey Sections'}
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Toolbar>
      
      <List sx={{ px: 2, py: 2, flex: 1, overflow: 'auto' }}>
        {sections.map((section, index) => {
          const isActive = currentPage === index;
          const progress = getSectionProgress(index);
          
          return (
            <ListItem key={section.dataKey || index} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                selected={isActive}
                onClick={() => handleSectionClick(index)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'white' : 'text.primary',
                  py: 1.5,
                  px: 2,
                  transition: 'all 0.2s ease',
                  border: 1,
                  borderColor: isActive ? 'primary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.dark' : 'action.hover',
                    transform: 'translateX(4px)',
                  },
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 1.5 }}>
                  {progress === 'complete' ? (
                    <CheckCircleIcon sx={{ fontSize: 20, color: isActive ? 'white' : 'success.main', flexShrink: 0 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ fontSize: 20, opacity: 0.6, flexShrink: 0 }} />
                  )}
                  <ListItemText 
                    primary={section.label || `Section ${index + 1}`}
                    primaryTypographyProps={{
                      fontSize: '14px',
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: 1.4,
                    }}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }} className={className} style={style}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {effectiveTemplate?.title || 'Questionnaire'}
          </Typography>
          <Chip 
            icon={<SubmitIcon />}
            label="Submit"
            color="success"
            clickable
            onClick={handleSubmit}
            disabled={!canSubmit}
            sx={{ fontWeight: 600, display: { xs: 'none', sm: 'flex' } }}
          />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: 1,
              borderColor: 'divider',
              bgcolor: 'background.default',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
        
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: { xs: 2, sm: 3 }, 
            pb: { xs: 12, sm: 14 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {header && <Box sx={{ mb: 2 }}>{header}</Box>}
          
          {currentSection ? (
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 2, sm: 3, md: 4 }, 
                mb: 2,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                bgcolor: 'background.paper',
              }}
            >
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  color: 'primary.main',
                  borderBottom: 2,
                  borderColor: 'primary.main',
                  pb: 1,
                }}
              >
                {currentSection.label || `Section ${currentPage + 1}`}
              </Typography>
              {renderSectionQuestions(currentSection)}
            </Paper>
          ) : (
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Select a section from the sidebar to begin
              </Typography>
            </Paper>
          )}

          {footer && <Box sx={{ mt: 2 }}>{footer}</Box>}

          {/* Sticky Navigation footer */}
          <Paper
            elevation={8}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: { xs: 0, md: `${DRAWER_WIDTH}px` },
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 'lg',
                mx: 'auto',
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Button
                variant="outlined"
                onClick={() => handleSectionClick(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                sx={{ 
                  minWidth: { xs: 80, sm: 100 },
                  fontWeight: 600,
                }}
              >
                Previous
              </Button>

              <Box sx={{ flex: 1, textAlign: 'center', display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  Section {currentPage + 1} of {sections.length}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap>
                  {currentSection?.label || 'No section selected'}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {currentPage < sections.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={() => handleSectionClick(Math.min(sections.length - 1, currentPage + 1))}
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
                    startIcon={<SubmitIcon />}
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
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default QuestionnaireLayout;