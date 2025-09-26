import localforage from 'localforage';

const DEFAULT_BASE_URL = '/lookup';
const memoryCache = new Map();
let forageInstance = null;

const hasWindow = typeof window !== 'undefined';

function getStore() {
  if (!hasWindow) {
    return null;
  }
  if (forageInstance) {
    return forageInstance;
  }
  try {
    forageInstance = localforage.createInstance({
      name: 'react-questionnaire-renderer',
      storeName: 'lookup-cache'
    });
  } catch (error) {
    console.warn('[lookup-cache] Failed to create localforage instance:', error);
    forageInstance = null;
  }
  return forageInstance;
}

export function buildLookupCacheKey(source = {}) {
  if (!source || typeof source !== 'object') {
    return 'unknown::latest';
  }
  const identifier = source.cacheKey || source.id || source.tableName || source.value || 'lookup';
  const version = source.version || 'latest';
  return `${identifier}::${version}`;
}

export async function readLookupCache(cacheKey) {
  if (!cacheKey) return null;
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey);
  }
  const store = getStore();
  if (!store) return null;
  try {
    const stored = await store.getItem(cacheKey);
    if (stored) {
      memoryCache.set(cacheKey, stored);
      return stored;
    }
  } catch (error) {
    console.warn('[lookup-cache] Failed to read cache:', cacheKey, error);
  }
  return null;
}

export async function writeLookupCache(cacheKey, entry) {
  if (!cacheKey) return;
  try {
    memoryCache.set(cacheKey, entry);
    const store = getStore();
    if (store) {
      await store.setItem(cacheKey, entry);
    }
  } catch (error) {
    console.warn('[lookup-cache] Failed to persist cache:', cacheKey, error);
  }
}

function normaliseFetchedData(result) {
  if (!result) return [];
  if (Array.isArray(result)) return result;
  if (result.data && Array.isArray(result.data)) return result.data;
  if (result.items && Array.isArray(result.items)) return result.items;
  return [];
}

function sanitisePathSegment(segment) {
  if (!segment) return '';
  return String(segment).replace(/^\/+/, '').replace(/\.json$/i, '');
}

function ensureTrailingSlash(value) {
  if (!value) return '';
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export function resolveLookupUrl(source = {}, config = {}) {
  if (!source || typeof source !== 'object') return null;
  if (typeof config.resolveLookupUrl === 'function') {
    const resolved = config.resolveLookupUrl(source, config);
    if (resolved) return resolved;
  }
  if (source.url) {
    return source.url;
  }
  const baseUrl = config.lookupBaseUrl ?? DEFAULT_BASE_URL;
  const base = ensureTrailingSlash(baseUrl || DEFAULT_BASE_URL);
  const identifier = source.fileName || source.id || source.tableName || source.cacheKey;
  if (!identifier) return null;
  const cleanIdentifier = sanitisePathSegment(identifier);
  const fileName = source.fileName?.endsWith('.json') ? source.fileName : `${cleanIdentifier}.json`;
  if (/^https?:/i.test(fileName)) {
    return fileName;
  }
  if (/^https?:/i.test(base)) {
    return `${base}/${fileName}`;
  }
  const prefix = base.startsWith('/') ? base : `/${base}`;
  return `${prefix}/${fileName}`.replace(/([^:]\/)(\/+)/g, '$1');
}

async function defaultFetch(url) {
  if (typeof fetch !== 'function') {
    throw new Error('Global fetch is not available. Provide lookupClient or polyfill fetch.');
  }
  const response = await fetch(url);
  if (!response.ok) {
    const message = `[lookup] Request failed: ${response.status} ${response.statusText}`;
    throw new Error(message);
  }
  return response.json();
}

export async function fetchLookupSource(source = {}, config = {}) {
  const url = resolveLookupUrl(source, config);
  if (!url) {
    throw new Error('Unable to resolve lookup URL from source definition');
  }
  if (config.lookupClient && typeof config.lookupClient.get === 'function') {
    const result = await config.lookupClient.get(url, source.requestConfig || {});
    return normaliseFetchedData(result && result.data !== undefined ? result.data : result);
  }
  const fetched = await defaultFetch(url);
  return normaliseFetchedData(fetched);
}

export function extractFirstValue(raw) {
  if (Array.isArray(raw)) {
    if (raw.length === 0) return undefined;
    const first = raw[0];
    if (first && typeof first === 'object') {
      if ('value' in first) return first.value;
      return first;
    }
    return first;
  }
  if (raw && typeof raw === 'object') {
    if ('value' in raw) return raw.value;
  }
  return raw;
}

export function compareLoose(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  return String(a) === String(b);
}
