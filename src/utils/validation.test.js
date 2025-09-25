import { describe, it, expect } from 'vitest';
import { validateResponse } from './validation';

const buildTemplate = () => ({
  components: [
    [
      {
        type: 1,
        label: 'Section 1',
        components: [
          [
            {
              type: 25,
              dataKey: 'q1',
              label: 'Question 1',
              required: true
            },
            {
              type: 25,
              dataKey: 'q2',
              label: 'Question 2'
            }
          ]
        ]
      }
    ]
  ]
});

describe('validateResponse', () => {
  it('flags missing required answers', async () => {
    const template = buildTemplate();
    const result = await validateResponse(template, null, {});

    expect(result.valid).toBe(false);
    expect(result.errors.q1).toBeDefined();
    expect(result.errors.q1[0]).toMatch(/required/i);
  });

  it('passes when required answers are present and custom validators succeed', async () => {
    const template = buildTemplate();
    const responses = { q1: 'hello', q2: 'world' };

    const result = await validateResponse(template, null, responses, {
      validators: {
        q2: (value) => (value === 'world' ? null : 'must be world')
      }
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('supports async validators', async () => {
    const template = buildTemplate();
    const responses = { q1: 'hello', q2: 'bad' };

    const result = await validateResponse(template, null, responses, {
      validators: {
        q2: async (value) => {
          await new Promise((resolve) => setTimeout(resolve, 10));
          return value === 'async-ok' ? null : 'async error';
        }
      },
      asyncValidation: true
    });

    expect(result.valid).toBe(false);
    expect(result.errors.q2).toEqual(['async error']);
  });
});
