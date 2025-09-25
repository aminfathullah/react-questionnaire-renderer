import React, { useMemo, useState } from 'react';
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
  
  const {
    currentPage,
    responses,
    variables,
    errors,
    validation,
    setCurrentPage,
    template
  } = useQuestionnaire();

  const [mobileOpen, setMobileOpen] = useState(false);

  const effectiveTemplate = templateOverride || template;
  const sections = useMemo(() => extractSections(effectiveTemplate), [effectiveTemplate]);

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
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontSize: '14px' }}>
          PDTSEN 2025 KOTA SURABAYA
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Toolbar>
      
      <List sx={{ px: 1 }}>
        {sections.map((section, index) => {
          const isActive = currentPage === index;
          const progress = getSectionProgress(index);
          
          return (
            <ListItem key={section.dataKey || index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={isActive}
                onClick={() => handleSectionClick(index)}
                sx={{
                  borderRadius: 1,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.dark' : 'action.hover',
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
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  {progress === 'complete' ? (
                    <CheckCircleIcon sx={{ mr: 1, fontSize: 16, color: isActive ? 'white' : 'success.main' }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ mr: 1, fontSize: 16 }} />
                  )}
                  <ListItemText 
                    primary={section.label || `Section ${index + 1}`}
                    primaryTypographyProps={{
                      fontSize: '13px',
                      fontWeight: isActive ? 600 : 400,
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
    <Box sx={{ display: 'flex' }} className={className} style={style}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {effectiveTemplate?.title || 'Questionnaire'}
          </Typography>
          <Chip 
            icon={<SubmitIcon />}
            label="Submit"
            color="secondary"
            clickable
            sx={{ color: 'white', fontWeight: 600 }}
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
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />
        
        <Container maxWidth="lg" sx={{ py: 3, pb: 12 }}>
          {header}
          {currentSection ? (
            <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
              {/* Render section questions */}
              {renderSectionQuestions(currentSection)}
            </Paper>
          ) : (
            <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                Select a section from the sidebar to begin
              </Typography>
            </Paper>
          )}

          {footer}

          {/* Sticky Navigation buttons */}
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
              borderTop: 1,
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 'lg',
                mx: 'auto',
              }}
            >
              <Button
                variant="outlined"
                onClick={() => handleSectionClick(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                sx={{ minWidth: 120 }}
              >
                Previous
              </Button>

              <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'center', mx: 2 }}>
                {currentSection?.label || 'No section selected'}
              </Typography>

              <Button
                variant="contained"
                onClick={() => handleSectionClick(Math.min(sections.length - 1, currentPage + 1))}
                disabled={currentPage >= sections.length - 1}
                sx={{ minWidth: 120 }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default QuestionnaireLayout;