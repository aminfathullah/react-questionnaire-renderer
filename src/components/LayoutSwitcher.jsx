import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  Divider,
} from '@mui/material';
import { ViewSidebar, ViewAgenda } from '@mui/icons-material';

/**
 * Layout Switcher Component
 * Allows users to switch between default (sidebar) and simple layouts
 */
function LayoutSwitcher({ currentLayout, onLayoutChange }) {
  return (
    <Paper
      elevation={2}
      sx={{
        position: 'fixed',
        top: 80,
        right: 20,
        zIndex: 1500,
        p: 2,
        minWidth: 200,
      }}
    >
      <Typography variant="subtitle2" gutterBottom fontWeight={600}>
        Layout Mode
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <ToggleButtonGroup
        value={currentLayout}
        exclusive
        onChange={(e, newLayout) => {
          if (newLayout !== null) {
            onLayoutChange(newLayout);
          }
        }}
        orientation="vertical"
        fullWidth
        size="small"
      >
        <ToggleButton value="default" sx={{ justifyContent: 'flex-start', gap: 1 }}>
          <ViewSidebar fontSize="small" />
          <Typography variant="body2">Sidebar</Typography>
        </ToggleButton>
        <ToggleButton value="simple" sx={{ justifyContent: 'flex-start', gap: 1 }}>
          <ViewAgenda fontSize="small" />
          <Typography variant="body2">Simple</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      
      <Alert severity="info" sx={{ mt: 2, fontSize: '0.75rem' }}>
        Switch layouts to compare the UI/UX
      </Alert>
    </Paper>
  );
}

export default LayoutSwitcher;
