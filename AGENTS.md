# AGENTS.md

## Commands
- Use `pnpm`; the committed lockfile is `pnpm-lock.yaml` and there is no npm/yarn lockfile.
- `pnpm dev` starts the Vite dev server.
- `pnpm build` runs `tsc -b` first, then `vite build`; use this for full verification.
- `pnpm lint` runs ESLint over the repo.
- There is no test runner or test script configured; do not invent `pnpm test` unless one is added.
- For typecheck-only verification, run `pnpm exec tsc -b`.

## App Structure
- This is a single-package React 19 + TypeScript + Vite 8 app, not a monorepo.
- Browser entrypoint is `src/main.tsx`; root component is `src/App.tsx`; Vite mounts through `index.html`.
- Use `@/*` imports for `src/*`; the alias is configured in both `tsconfig.json` and `components.json`.

## Styling And UI
- Tailwind is v4 via `@tailwindcss/vite`; there is no `tailwind.config.*` file. Theme tokens and Tailwind imports live in `src/index.css`.
- shadcn is configured by `components.json` with `style: "base-luma"`, CSS variables enabled, Lucide icons, and UI components under `src/components/ui`.
- Existing shadcn-style primitives use Base UI (`@base-ui/react`) plus `class-variance-authority`; keep variant helpers colocated with the component when following this pattern.
- Use the local `cn` helper from `@/lib/utils` for conditional Tailwind classes.

## Tooling Quirks
- TypeScript enables `erasableSyntaxOnly`, `noUnusedLocals`, and `noUnusedParameters`; avoid TS constructs that require runtime emit such as enums/namespaces.
- Biome config exists for formatting/organizing imports: tabs, double quotes for JS/TS, and CSS formatting/linting disabled. Package scripts do not currently run Biome.
- ESLint uses flat config and ignores only `dist`.
