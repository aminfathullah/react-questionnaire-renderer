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

#### When published to npm

```bash
yarn add react-questionnaire-renderer
# or
npm install react-questionnaire-renderer
```

Ensure your project also installs the peer dependencies: `react`, `react-dom`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled`.

#### When hosted on GitHub only

If the package is not on npm yet, you can install it straight from the GitHub repository. Replace `aminfathullah/react-questionnaire-renderer` with your GitHub namespace, and optionally pin to a branch, tag, or commit for reproducible builds.

```bash
# Latest main branch
npm install "github:aminfathullah/react-questionnaire-renderer"

# Specific tag or release
npm install "github:aminfathullah/react-questionnaire-renderer#v0.1.0"

# Specific commit
npm install "github:aminfathullah/react-questionnaire-renderer#<commit-sha>"
```

Alternatively, reference the GitHub tarball directly in `package.json`:

```json
{
	"dependencies": {
		"react-questionnaire-renderer": "git+https://github.com/aminfathullah/react-questionnaire-renderer.git"
	}
}
```

> **Tip:** After publishing a new release, create a Git tag (e.g., `v0.1.0`) so downstream projects can pin to an immutable snapshot.

For local development against an unpublished build you can use `npm link`:

```bash
# inside this repository
npm link

# inside the consuming app
npm link react-questionnaire-renderer
```

When you’re ready to ship, remove the `link` and install from GitHub (or npm) to match production wiring.

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

## Usage

Below is a minimal integration example that loads a questionnaire template and wires up submission, autosave, and runtime helpers. The example assumes the package has been installed via npm, yarn, or a GitHub dependency reference.

```jsx
import React, { useMemo, useRef } from 'react';
import QuestionnaireRenderer from 'react-questionnaire-renderer';
import templateJson from './form/template.json';
import validationJson from './form/validation.json';

export default function SurveyScreen() {
	const rendererRef = useRef(null);

	const initialData = useMemo(
		() => ({ householdHead: 'Jane Doe' }),
		[]
	);

	const handleSubmit = async (responses) => {
		// Persist to your API or storage layer
		await fetch('/api/submissions', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(responses)
		});
	};

	return (
		<QuestionnaireRenderer
			ref={rendererRef}
			templateJson={templateJson}
			validationJson={validationJson}
			initialData={initialData}
			enableAutosave={{ debounceMs: 1500, clearOnSubmit: true }}
			onChange={(responses) => console.log('draft', responses)}
			onSubmit={handleSubmit}
			onValidationError={(errors) => console.warn('validation errors', errors)}
			layout="default"
		/>
	);
}
```

Need to trigger submission from outside the component? Use the forwarded ref:

```jsx
rendererRef.current?.submit();
```

For custom question components or layout overrides, pass a `componentsMap` or a custom `layout` component—see the props table above for details.

### Lookup-backed Selects (type 27)

Type `27` questions (`Select`/lookup) support loading option lists from external lookup datasets. The question `sourceSelect` entry describes which lookup to use, which field provides the option `value`, which field is the `desc` (label), and optional `parentCondition` entries to filter rows based on other answers.

Example `sourceSelect` fragment from a question definition:

```json
{
	"id": "42e5a19c-f0b4-4194-ae0c-703cfb6a0042",
	"version": "1",
	"tableName": "mfd24_kab_kota",
	"value": "kdprovkab",
	"desc": "namakab",
	"parentCondition": [{ "key": "kdprov", "value": "r111" }]
}
```

How it works:
- On mount, the renderer asks the context to `ensureLookupDataset(source)` for each `sourceSelect` entry used by rendered questions.
- The dataset loader first checks the in-browser cache (`localforage`) using a stable cache key. If not present it fetches the JSON from `lookupBaseUrl` (default `/lookup/<id>.json`) or by calling your provided `lookupClient.get(url)`.
- Loaded datasets are cached in memory and persisted to `localforage` for offline-friendly usage.
- If a `parentCondition` is present the renderer will filter lookup rows so only relevant options are shown.

Configuring lookup transport
- `lookupBaseUrl` (string) — base path used when resolving lookup files. If your lookup JSON files live at `/lookup/*.json` (as in this repo) you don't need to change it.
- `resolveLookupUrl` (fn) — optional function `(source, config) => string|null` to fully control URL resolution per source.
- `lookupClient` (object) — optional custom client with a `get(url, config)` method. Useful to pass an axios-like client for auth headers or custom timeouts.

Example wiring with axios in your app:

```jsx
import axios from 'axios';
import QuestionnaireRenderer from 'react-questionnaire-renderer';

const apiClient = axios.create({ baseURL: 'https://api.example.com' });

<QuestionnaireRenderer
	templateJson={templateJson}
	lookupClient={{ get: (url) => apiClient.get(url) }}
	lookupBaseUrl="/lookup"
	// or custom resolver:
	// resolveLookupUrl={(src) => `https://cdn.example.com/lookups/${src.id}.json`}
/>
```

Local testing with the included `lookup/` folder
- This repository includes a `lookup/` folder with sample JSON files (e.g., `42e5a19c-f0b4-4194-ae0c-703cfb6a0042.json`). When running the dev server (`npm run dev`) these files are served at `/lookup/<filename>.json` so lookup-backed selects will work out-of-the-box in the demo.

Notes, caveats and behavior
- The Select component will show a "Loading options..." placeholder while datasets are being fetched. Selections made before datasets finish loading are preserved.
- If a saved selection no longer exists in the filtered dataset (for example the parent condition changed) the selection is cleared to avoid orphaned values. If you prefer to keep stale values, we can add a config flag to opt in.
- Lookups are cached by a stable cache key derived from the source metadata; update the `version` field on your source to trigger a refresh.
- If you need per-request headers (auth tokens, etc.) use `lookupClient.get(url)` to integrate your existing network layer.

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
