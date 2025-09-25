import { describe, it, expect } from 'vitest';
import {
  normalizeResponses,
  serializeResponses,
  deserializeResponses
} from './responses';

describe('response utilities', () => {
  it('normalizes responses by sorting keys and dropping undefined values', () => {
    const normalized = normalizeResponses({
      b: 2,
      a: 1,
      c: undefined,
      d: null
    });

    expect(Object.keys(normalized)).toEqual(['a', 'b', 'd']);
    expect(normalized).toEqual({ a: 1, b: 2, d: null });
  });

  it('serializes responses with metadata', () => {
    const serialized = serializeResponses({ foo: 'bar' });
    const parsed = JSON.parse(serialized);

    expect(parsed).toMatchObject({
      version: 1,
      data: { foo: 'bar' }
    });
    expect(typeof parsed.timestamp).toBe('string');
  });

  it('deserializes both wrapped payloads and plain objects', () => {
    const payload = { version: 1, data: { answer: 42 } };
    expect(deserializeResponses(JSON.stringify(payload))).toEqual({ answer: 42 });
    expect(deserializeResponses(payload)).toEqual({ answer: 42 });
    expect(deserializeResponses(null)).toEqual({});
  });
});
