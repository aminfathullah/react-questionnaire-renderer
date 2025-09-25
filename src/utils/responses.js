export function normalizeResponses(responses = {}) {
  if (!responses || typeof responses !== 'object') {
    return {};
  }

  const normalized = {};
  Object.keys(responses)
    .filter((key) => key != null && key !== '')
    .sort()
    .forEach((key) => {
      const value = responses[key];
      if (value !== undefined) {
        normalized[key] = value;
      }
    });

  return normalized;
}

export function serializeResponses(responses = {}) {
  const payload = {
    version: 1,
    timestamp: new Date().toISOString(),
    data: normalizeResponses(responses)
  };

  return JSON.stringify(payload);
}

export function deserializeResponses(serialized) {
  if (!serialized) {
    return {};
  }

  if (typeof serialized === 'string') {
    try {
      const parsed = JSON.parse(serialized);
      if (parsed && typeof parsed === 'object') {
        if ('data' in parsed && 'version' in parsed) {
          return parsed.data || {};
        }
        return parsed;
      }
      return {};
    } catch (error) {
      console.error('Failed to deserialize responses:', error);
      return {};
    }
  }

  if (typeof serialized === 'object') {
    if ('data' in serialized && 'version' in serialized) {
      return serialized.data || {};
    }
    return serialized;
  }

  return {};
}
