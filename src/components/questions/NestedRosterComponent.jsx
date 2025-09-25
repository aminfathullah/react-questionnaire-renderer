import React, { useMemo, useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Stack, 
  Divider, 
  Paper 
} from '@mui/material';
import { Visibility as VisibilityIcon, ArrowBack as ArrowBackIcon, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import QuestionRenderer from '../QuestionRenderer';
import { useQuestionnaire } from '../../hooks/useQuestionnaire';
import { getValue } from '../../hooks/useQuestionnaire';

// JSON-driven Nested/Roster renderer (type 2)
// - Uses question.sourceQuestion to fetch rows array (e.g., from a computed variable)
// - Renders child components in question.components for the active row
// - Provides in-component navigation across rows
const NestedRosterComponent = ({ question, responses = {}, variables = {}, validation = [] }) => {
  const { errors, setVariable } = useQuestionnaire();

  // Resolve roster rows from the configured sourceQuestion
  const rows = useMemo(() => {
    if (!question?.sourceQuestion) return [];
    const data = getValue(question.sourceQuestion, responses, variables) || [];
    // Expect array of { value, label, ... }
    return Array.isArray(data) ? data : [];
  }, [question, responses, variables]);

  const [mode, setMode] = useState('list'); // 'list' | 'detail'
  const [activeIndex, setActiveIndex] = useState(0);

  const openDetail = (index) => {
    setActiveIndex(index);
    setMode('detail');
  };

  const closeDetail = () => setMode('list');

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(rows.length - 1, i + 1));

  // Note: Avoid early returns before hooks; use optional chaining during render

  // Compute current row and index regardless of mode to keep hooks order stable
  const row = rows[activeIndex];
  const rowIndex = row?.value ?? activeIndex + 1; // fall back to 1-based position if no explicit value

  // Expose current row object as variable for expressions using "art_nested@$ROW$"
  useEffect(() => {
    if (mode === 'detail' && row) {
      const dataKey = question?.dataKey || 'art_nested';
      setVariable(dataKey, row, rowIndex);
    }
  }, [mode, row, rowIndex, question, setVariable]);

  // Render list view: each row with a View button
  if (mode === 'list') {
    return (
      <Box sx={{ width: '100%' }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          {question.label || question.title || 'Roster'}
        </Typography>

        {/* When no rows, render nothing extra (no hardcoded text) */}

        {rows.length > 0 && (
          <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
            {rows.map((row, idx) => (
              <ListItem key={row.value ?? idx} divider secondaryAction={
                <Button variant="outlined" size="small" onClick={() => openDetail(idx)} aria-label="view-row">
                  <VisibilityIcon fontSize="small" />
                </Button>
              }>
                <ListItemText primary={row.label ?? `Row ${row.value ?? idx + 1}`} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    );
  }

  // Detail mode
  

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="subtitle1">
          {question.label} — {row?.label}
        </Typography>
        <Button size="small" onClick={closeDetail} aria-label="back-to-list">
          <ArrowBackIcon fontSize="small" />
        </Button>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      {/* Render all child components for this row */}
      {question.components?.[0]?.map((component, index) => (
        <Box key={component.dataKey || index} sx={{ mb: 2 }}>
          <QuestionRenderer
            question={component}
            responses={responses}
            variables={variables}
            errors={errors}
            validation={validation}
            rowIndex={rowIndex}
          />
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Button 
          variant="contained" 
          disabled={activeIndex === 0} 
          onClick={goPrev}
          aria-label="previous-row"
        >
          <ArrowBackIosNew fontSize="small" />
        </Button>
        <Button 
          variant="contained" 
          disabled={activeIndex >= rows.length - 1} 
          onClick={goNext}
          aria-label="next-row"
        >
          <ArrowForwardIos fontSize="small" />
        </Button>
      </Stack>
    </Paper>
  );
};

export default NestedRosterComponent;