# AGENTS

## Project Overview
- Vite + React 19 + TypeScript frontend application.
- Entry point is `src/main.tsx`, which mounts `App` inside `React.StrictMode`.
- Current app structure is minimal and centered around a single `App.tsx` component with CSS-driven layout.
- Static assets live in `src/assets` and `public/`.

## Essential Commands
Run from repository root.

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

- `npm run build` performs a TypeScript project build with `tsc -b` before the Vite production build.
- No automated test framework is configured yet.

## Code Organization
- `src/main.tsx` bootstraps the React application.
- `src/App.tsx` contains the main UI component.
- `src/index.css` and `src/App.css` provide global and component-level styling.
- `public/` contains static assets served directly by Vite.
- `vite.config.ts` exists but currently follows the default lightweight setup.

## Style and Conventions
- TypeScript uses ES modules (`"type": "module"` in `package.json`).
- Formatting is configured through Biome (`biome.json`):
  - Tabs for indentation.
  - Double quotes in JavaScript/TypeScript.
  - Import organization enabled.
- ESLint uses flat config via `eslint.config.js`.
- React hooks linting and Vite React Refresh rules are enabled.
- Existing React code uses function components and inline event handlers.

## Tooling Notes
- Biome is configured for formatting and linting, but there is no npm script for it yet.
- ESLint ignores the `dist/` directory.
- TypeScript project references are used through `tsconfig.app.json` and `tsconfig.node.json`.

## Architecture Notes
- Current architecture is intentionally simple: a single render tree rooted at `App`.
- State management currently relies on local React state (`useState`).
- Assets are imported directly into components through Vite’s asset pipeline.

## Gotchas
- Keep formatting aligned with Biome settings; existing files use tabs even though some starter template files may visually appear space-aligned depending on tooling.
- Since no test framework is installed, validation currently depends on successful lint and production builds.
- The repository still resembles the default Vite starter template, so avoid documenting conventions that are not yet implemented in code.
