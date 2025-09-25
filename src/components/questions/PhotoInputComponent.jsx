import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  PhotoCamera,
  CloudUpload,
  Delete,
  CameraAlt
} from '@mui/icons-material';
import { useQuestionnaire, validateQuestion } from '../../hooks/useQuestionnaire';
import ErrorMessage from '../common/ErrorMessage';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const PhotoInputComponent = ({
  question,
  value = null,
  onChange,
  error,
  disabled = false,
  responses = {},
  variables = {},
  validation = []
}) => {
  const { setTouched, touched, setError } = useQuestionnaire();
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraSupported, setCameraSupported] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Check camera support on mobile devices
  useEffect(() => {
    const checkCameraSupport = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setCameraSupported(isMobile && 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices);
    };

    checkCameraSupport();
  }, []);

  // Update preview when value changes
  useEffect(() => {
    if (value && typeof value === 'object' && value.dataUrl) {
      setPreviewUrl(value.dataUrl);
      setFileName(value.name || 'Captured Image');
      setFileSize(value.size || 0);
    } else if (value && typeof value === 'string') {
      setPreviewUrl(value);
      setFileName('Uploaded Image');
    } else {
      setPreviewUrl(null);
      setFileName('');
      setFileSize(0);
    }
  }, [value]);

  // Parse label HTML to extract main label and help text
  const parseLabel = (htmlLabel) => {
    if (!htmlLabel) return { mainLabel: '', helpText: '' };

    // Remove HTML tags for the main label
    let mainLabel = htmlLabel.replace(/<[^>]*>/g, '').trim();

    // Extract help text (content after <br> with specific styling)
    let helpText = '';
    const helpTextMatch = htmlLabel.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    if (helpTextMatch) {
      helpText = helpTextMatch[1];
      // Remove the help text part from main label
      mainLabel = htmlLabel.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
    }

    return { mainLabel, helpText };
  };

  const questionLabel = question.label || question.title || question.name || '';
  const { mainLabel, helpText } = parseLabel(questionLabel);

  // Validate file
  const validateFile = useCallback((file) => {
    if (!SUPPORTED_FORMATS.includes(file.type)) {
      return 'Format file tidak didukung. Gunakan JPG, PNG, atau WebP.';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'Ukuran file terlalu besar. Maksimal 10MB.';
    }
    return null;
  }, []);

  // Handle file selection from input
  const handleFileSelect = useCallback(async (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(question.dataKey, validationError);
      return;
    }

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = {
          dataUrl: e.target.result,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified
        };
        onChange(result);
        setPreviewUrl(e.target.result);
        setFileName(file.name);
        setFileSize(file.size);
        setError(question.dataKey, null);
        setIsLoading(false);
      };
      reader.onerror = (error) => {
        console.error('FileReader error:', error);
        setError(question.dataKey, 'Error membaca file.');
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing file:', error);
      setError(question.dataKey, 'Error memproses file.');
      setIsLoading(false);
    }
  }, [onChange, question.dataKey, setError, validateFile]);

  // Handle camera capture
  const handleCameraCapture = useCallback(async () => {
    if (!cameraSupported) return;

    try {
      const _stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      // For now, we'll use a simple file input with capture attribute
      // In a real implementation, you might want to use a more sophisticated
      // camera interface
      cameraInputRef.current?.click();
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Fallback to file input
      fileInputRef.current?.click();
    }
  }, [cameraSupported]);

  // Handle drag events
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  // Handle drop
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const files = [...e.dataTransfer.files];
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }, [disabled, handleFileSelect]);

  // Handle file input change
  const handleFileInputChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  // Handle camera input change
  const handleCameraInputChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  // Handle remove image
  const handleRemoveImage = useCallback(() => {
    onChange(null);
    setPreviewUrl(null);
    setFileName('');
    setFileSize(0);
    setError(question.dataKey, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = '';
    }
  }, [onChange, question.dataKey, setError]);

  // Handle blur for validation
  const handleBlur = () => {
    setTouched(question.dataKey);
    const hasValue = !!(value && (value.dataUrl || value));
    const errors = validateQuestion(question, hasValue ? 'has_value' : '', responses, variables, validation, touched);

    if (errors.length > 0) {
      setError(question.dataKey, errors[0]);
    } else {
      setError(question.dataKey, null);
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Box
        sx={{
          border: '2px dashed',
          borderColor: dragActive ? 'primary.main' : error ? 'error.main' : 'grey.300',
          borderRadius: 2,
          p: 3,
          textAlign: 'center',
          backgroundColor: dragActive ? 'action.hover' : 'background.paper',
          transition: 'all 0.2s ease-in-out',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          position: 'relative'
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
        onBlur={handleBlur}
      >
        {isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {previewUrl ? (
          <Card sx={{ maxWidth: 400, mx: 'auto' }}>
            <CardMedia
              component="img"
              height="200"
              image={previewUrl}
              alt={fileName}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {fileName}
                </Typography>
                <Chip
                  label={formatFileSize(fileSize)}
                  size="small"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <IconButton
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  size="small"
                >
                  <PhotoCamera />
                </IconButton>
                {cameraSupported && (
                  <IconButton
                    color="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCameraCapture();
                    }}
                    size="small"
                  >
                    <CameraAlt />
                  </IconButton>
                )}
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage();
                  }}
                  size="small"
                >
                  <Delete />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Box>
            <CloudUpload sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              {mainLabel}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Seret dan jatuhkan foto di sini, atau klik untuk memilih file
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              Format yang didukung: JPG, PNG, WebP (maksimal 10MB)
            </Typography>
          </Box>
        )}
      </Box>

      {/* Action buttons */}
      <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
        <Button
          variant="outlined"
          startIcon={<PhotoCamera />}
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          size="small"
        >
          Pilih File
        </Button>
        {cameraSupported && (
          <Button
            variant="outlined"
            startIcon={<CameraAlt />}
            onClick={handleCameraCapture}
            disabled={disabled}
            size="small"
          >
            Kamera
          </Button>
        )}
      </Box>

      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraInputChange}
        style={{ display: 'none' }}
      />

      {/* Error message */}
      <ErrorMessage
        error={error}
        isRequired={question.required}
        hasValue={!!(value && (value.dataUrl || value))}
        isTouched={touched[question.dataKey]}
      />

      {/* Help text */}
      {helpText && (
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: 'block',
            color: '#007bff',
            fontStyle: 'italic'
          }}
        >
          {helpText}
        </Typography>
      )}

      {/* Instructions */}
      {question.instructions && !error && !helpText && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 0.5, display: 'block' }}
        >
          {question.instructions}
        </Typography>
      )}
    </Box>
  );
};

export default PhotoInputComponent;