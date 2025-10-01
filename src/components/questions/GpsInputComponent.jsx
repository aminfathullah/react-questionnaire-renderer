import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Alert,
  Paper,
  CircularProgress,
  TextField
} from '@mui/material';
import {
  MyLocation
} from '@mui/icons-material';
import ErrorMessage from '../common/ErrorMessage';

const GpsInputComponent = ({ 
  question, 
  value, 
  onChange, 
  error,
  disabled = false
}) => {
  const mapRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const initialPositionRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [dragLimitWarning, setDragLimitWarning] = useState('');
  const disabledRef = useRef(disabled);
  const latestCoordinatesRef = useRef(null);
  const accuracyRef = useRef(50);

  // Keep onChange ref updated
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    disabledRef.current = disabled;
    const marker = markerRef.current;
    if (marker) {
      if (disabled) {
        marker.dragging?.disable();
      } else {
        marker.dragging?.enable();
      }
    }
  }, [disabled]);

  // Calculate distance between two points in meters
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // Earth's radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Parse existing coordinates from value
  useEffect(() => {
    if (value && typeof value === 'string') {
      try {
        const coords = JSON.parse(value);
        if (coords.latitude && coords.longitude) {
          setCoordinates(coords);
          if (!initialPositionRef.current) {
            initialPositionRef.current = coords;
          }
        }
      } catch {
        // If value is not JSON, try to parse as comma-separated
        const parts = value.split(',');
        if (parts.length === 2) {
          const lat = parseFloat(parts[0].trim());
          const lng = parseFloat(parts[1].trim());
          if (!isNaN(lat) && !isNaN(lng)) {
            const coords = { latitude: lat, longitude: lng };
            setCoordinates(coords);
            if (!initialPositionRef.current) {
              initialPositionRef.current = coords;
            }
          }
        }
      }
    }
  }, [value]);

  useEffect(() => {
    latestCoordinatesRef.current = coordinates;
  }, [coordinates]);

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = () => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if (!document.getElementById('leaflet-js')) {
        const script = document.createElement('script');
        script.id = 'leaflet-js';
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => setLeafletLoaded(true);
        document.head.appendChild(script);
      } else if (window.L) {
        setLeafletLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  // Initialize map when Leaflet is loaded
  useEffect(() => {
    if (!leafletLoaded || !window.L || mapInstanceRef.current || !mapRef.current) return;

    const initialCoords = initialPositionRef.current || latestCoordinatesRef.current || {
      latitude: -7.257419,
      longitude: 112.752088
    };
    const defaultCenter = [initialCoords.latitude, initialCoords.longitude];

    if (!initialPositionRef.current) {
      initialPositionRef.current = { ...initialCoords };
    }

    const mapInstance = window.L.map(mapRef.current).setView(defaultCenter, 15);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Fixed: preserve leaflet-div-icon
    const redIcon = window.L.divIcon({
      html: '<div style="background-color:#ff0000;width:20px;height:20px;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
      className: 'leaflet-div-icon custom-marker'
    });

    const markerInstance = window.L.marker(defaultCenter, {
      draggable: !disabledRef.current,
      icon: redIcon
    }).addTo(mapInstance);

    markerRef.current = markerInstance;
    mapInstanceRef.current = mapInstance;

    markerInstance.on('drag', (event) => {
      if (disabledRef.current) {
        event.target.setLatLng(initialPositionRef.current || event.target.getLatLng());
        return;
      }
      const latLng = event.target.getLatLng();
      const initialPos = initialPositionRef.current;
      
      if (initialPos) {
        const distance = calculateDistance(
          initialPos.latitude, 
          initialPos.longitude,
          latLng.lat, 
          latLng.lng
        );
        
        const movementLimit = accuracyRef.current || 50;
        if (distance > movementLimit) {
          // Calculate the point that's exactly 50 meters from initial position
          const bearing = Math.atan2(
            latLng.lng - initialPos.longitude,
            latLng.lat - initialPos.latitude
          );
          
          const R = 6371000; // Earth radius in meters
          const d = movementLimit; // Movement limit based on GPS accuracy
          const lat1 = initialPos.latitude * Math.PI / 180;
          const lon1 = initialPos.longitude * Math.PI / 180;
          
          const lat2 = Math.asin(
            Math.sin(lat1) * Math.cos(d / R) +
            Math.cos(lat1) * Math.sin(d / R) * Math.cos(bearing)
          );
          const lon2 = lon1 + Math.atan2(
            Math.sin(bearing) * Math.sin(d / R) * Math.cos(lat1),
            Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2)
          );
          
          const limitedLatLng = [lat2 * 180 / Math.PI, lon2 * 180 / Math.PI];
          event.target.setLatLng(limitedLatLng);
          setDragLimitWarning(`Movement limited to ${Math.round(movementLimit)} meters from initial position (GPS accuracy)`);
          setTimeout(() => setDragLimitWarning(''), 3000);
        } else {
          setDragLimitWarning('');
        }
      }
    });

    markerInstance.on('dragend', (event) => {
      if (disabledRef.current) {
        event.target.setLatLng(initialPositionRef.current || event.target.getLatLng());
        return;
      }
      const latLng = event.target.getLatLng();
      const newCoords = { latitude: latLng.lat, longitude: latLng.lng };
      setCoordinates(newCoords);
      onChangeRef.current(JSON.stringify(newCoords));
    });
    
    return () => {
      markerRef.current = null;
      mapInstanceRef.current = null;
      if (mapInstance) {
        mapInstance.off();
        mapInstance.remove();
      }
    };
  }, [leafletLoaded]);

  // Update marker position when coordinates change externally
  useEffect(() => {
    const marker = markerRef.current;
    const map = mapInstanceRef.current;
    if (!marker || !coordinates) return;
    if (!marker._map || !marker._icon) return; // guard
    marker.setLatLng([coordinates.latitude, coordinates.longitude]);
    if (map) map.panTo([coordinates.latitude, coordinates.longitude]);
  }, [coordinates]);

  const getCurrentLocation = () => {
    if (disabled) {
      return;
    }
    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by this browser');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy || 50;
        const newCoords = { latitude: lat, longitude: lng };
        
        setCoordinates(newCoords);
        onChange(JSON.stringify(newCoords));

        // Update initial position reference and accuracy when getting current location
        initialPositionRef.current = newCoords;
        accuracyRef.current = accuracy;

        const mapInstance = mapInstanceRef.current;
        const markerInstance = markerRef.current;
        if (mapInstance && markerInstance && markerInstance._icon) {
          const newPosition = [lat, lng];
          mapInstance.setView(newPosition, 15);
          markerInstance.setLatLng(newPosition);
        }

        setIsLoading(false);
      },
      (error) => {
        let message = 'Unable to get location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out';
            break;
          default:
            message = 'An unknown error occurred';
        }
        setErrorMessage(message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const handleManualInput = (field, value) => {
    if (disabled) {
      return;
    }
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    const newCoords = coordinates ? { ...coordinates } : { latitude: 0, longitude: 0 };
    newCoords[field] = numValue;
    
    setCoordinates(newCoords);
    onChange(JSON.stringify(newCoords));

    // Update initial position reference when manually inputting coordinates
    if (!initialPositionRef.current) {
      initialPositionRef.current = newCoords;
    }

    const mapInstance = mapInstanceRef.current;
    const markerInstance = markerRef.current;
    if (mapInstance && markerInstance && markerInstance._icon) {
      const newPosition = [newCoords.latitude, newCoords.longitude];
      mapInstance.setView(newPosition, 15);
      markerInstance.setLatLng(newPosition);
    }
  };

  const isRequired = question.required;

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 500 }}>
        {question.label}
        {isRequired && <span style={{ color: 'red' }}> *</span>}
      </Typography>

      <Paper elevation={2} sx={{ mb: 2 }}>
        <Box
          ref={mapRef}
          sx={{
            width: '100%',
            height: 300,
            borderRadius: 1,
            overflow: 'hidden',
            display: leafletLoaded ? 'block' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5'
          }}
        >
          {!leafletLoaded && (
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress size={40} sx={{ mb: 2 }} />
              <Typography variant="body2" color="textSecondary">
                Loading map...
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>

      {dragLimitWarning && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {dragLimitWarning}
        </Alert>
      )}

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Manual coordinate input:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Latitude"
            type="number"
            value={coordinates?.latitude || ''}
            onChange={(e) => handleManualInput('latitude', e.target.value)}
            inputProps={{ step: 'any' }}
            size="small"
            sx={{ flex: 1 }}
            disabled
          />
          <TextField
            label="Longitude"
            type="number"
            value={coordinates?.longitude || ''}
            onChange={(e) => handleManualInput('longitude', e.target.value)}
            inputProps={{ step: 'any' }}
            size="small"
            sx={{ flex: 1 }}
            disabled
          />
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <MyLocation />}
          onClick={getCurrentLocation}
          disabled={isLoading || disabled}
          sx={{
            bgcolor: '#6b46c1',
            '&:hover': { bgcolor: '#553c9a' },
            textTransform: 'none'
          }}
        >
          {isLoading ? 'Getting Location...' : 'Get Location'}
        </Button>
      </Box>

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <ErrorMessage 
        error={error} 
        isRequired={isRequired} 
        hasValue={!!coordinates} 
      />
    </Box>
  );
};

export default GpsInputComponent;
