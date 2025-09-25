# Questionnaire Renderer (React + Vite)

This project provides a configurable questionnaire renderer for React applications. It turns a `templateJson` schema plus optional validation rules into an interactive survey experience, complete with autosave, custom question overrides, runtime hooks, and utility helpers for validation and serialization.

## Features

- **Drop-in React component**: `<QuestionnaireRenderer />` accepts questionnaire definitions and emits normalized responses.
- **Runtime hook**: `useQuestionnaire()` exposes programmatic controls (`submit`, `reset`, `getResponses`) and state metadata.
- **Configurable layouts**: Use the built-in `QuestionnaireLayout`, the lightweight `simple` layout, or provide your own component.
- **Autosave & persistence**: Optional debounce-based draft storage via any `persistentStore` or the browser's `localStorage`.
- **Validation utilities**: `validateResponse()` runs synchronous/asynchronous rules, while `serializeResponses()` / `deserializeResponses()` handle storage formats.
- **TypeScript ready**: published `.d.ts` definitions plus a runtime `types` export for quick discovery.

## Getting Started

### Installation (library consumers)

```bash
yarn add react-questionnaire-renderer
# or
npm install react-questionnaire-renderer
```

Ensure your project also installs the peer dependencies: `react`, `react-dom`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled`.

### Local development (this repo)

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# run unit tests (vitest)
npm run test

# create a production build
npm run build
```

Open http://localhost:5173 to view the demo questionnaire.

## Core Exports

All primary APIs are exposed from `src/index.js`:

| Export | Description |
| --- | --- |
| `default` / `QuestionnaireRenderer` | Main React component with forward ref (`submit`, `reset`, `getResponses`). |
| `useQuestionnaire()` | Hook for accessing questionnaire state, metadata, and runtime methods. |
| `QuestionnaireLayout` | Default Material UI layout used by the renderer. |
| `validateResponse()` | Utility for running validation rules outside the UI. |
| `collectQuestions()` | Helper that flattens the template structure into individual question definitions. |
| `normalizeResponses()` | Produces a stable, sorted snapshot of response values. |
| `serializeResponses()` / `deserializeResponses()` | Convert responses to/from a persisted payload. |
| `types` | Runtime alias referencing the published TypeScript definitions (see `src/types.d.ts`). |

## `<QuestionnaireRenderer />` Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `templateJson` | `object` | ✅ | Questionnaire/template definition. |
| `validationJson` | `object` \| `array` | | Validation rules; falls back to rules embedded in the template. |
| `initialData` | `object` | | Prefilled answers keyed by question `dataKey`. |
| `onChange` | `(responses) => void` | | Debounced change notifications with normalized responses. |
| `onSubmit` | `(responses) => Promise<void> \| void` | | Called when the renderer (or ref) submits successfully. |
| `onValidationError` | `(errors) => void` | | Receives a map of validation errors when submission fails. |
| `componentsMap` | `Record<string, Component>` | | Override question renderers by `dataKey`, numeric type, or type label. |
| `layout` | `'default' \| 'simple' \| Component` | | Choose a built-in or custom layout component. |
| `readOnly` / `disabled` | `boolean` | | Toggle editability for the entire questionnaire. |
| `locale` / `translations` | `string` / `object` | | Provide i18n context for question components. |
| `theme` | `object` \| `ReactNode` \| `Component` | | Wraps the renderer with a theme provider or custom theming element. |
| `persistentStore` | `{ get, set, remove }` | | Custom draft storage interface (sync or async). |
| `storageKey` | `string` | | Key used when autosaving drafts. |
| `enableAutosave` | `boolean` \| `{ debounceMs, clearOnSubmit }` | | Enables autosave; control debounce and clear-on-submit behavior. |
| `validators` / `asyncValidation` | `Record<string, fn>` / `boolean` | | Custom synchronous or async validators keyed by `dataKey`. |
| `fetchMedia` | `(mediaRef) => Promise<string \| Blob>` | | Hook for loading remote media, passed to question components. |
| `onError` | `(error) => void` | | Fatal runtime error handler (parsing, persistence, etc.). |
| `className` / `style` | `string` / `object` | | Styling hooks for the outer container. |

Every additional prop is forwarded to the active layout component.

### Runtime Ref Methods

```ts
type QuestionnaireRendererRef = {
	submit(): Promise<{ ok: boolean; responses?: object; errors?: Record<string, string[]> }>;
	reset(): Promise<void> | void;
	getResponses(): Record<string, unknown>;
};
```

### Hook Metadata

`useQuestionnaire()` returns the full context state plus:

- `submit`, `reset`, `getResponses` — same as the component ref
- `isDirty` — `true` if responses differ from the initial payload
- `validationState` — `'unknown' | 'valid' | 'invalid'`
- raw setters (`setResponse`, `setErrors`, etc.) for advanced integrations

## Validation Utilities

```ts
const { valid, errors } = await validateResponse(templateJson, validationJson, responses, {
	variables,
	validators,
	asyncValidation: true,
	locale: 'en'
});
```

- All template questions are flattened via `collectQuestions()`.
- Built-in rules (required, range, expression) run first, followed by custom validators.
- Async validators are supported when `asyncValidation` is `true`.

## Autosave & Persistence

Autosave is opt-in via the `enableAutosave` prop. Provide a custom `persistentStore` with `{ get, set, remove }` methods or rely on `localStorage` (browser-only). Drafts are serialized with `serializeResponses()` and restored on mount.

## TypeScript Support

- `src/types.d.ts` exports interfaces for component props, runtime handles, and utility helpers.
- The runtime `types` export references the most important type names for quick discovery.
- `package.json` exposes the typings through the `"types"` field (`./src/types.d.ts`).
