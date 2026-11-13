# Developer Guide & Workflows

## Prerequisites

- **Node.js**: `20.x` or higher (Active LTS recommended)
- **Package Manager**: `npm` (v10+)
- **Git**: Installed with clean CRLF/LF handling (`core.autocrlf = true` on Windows, or `.editorconfig`)

---

## Quickstart

You can execute development commands either from the repository root or from within the `naturalselection-site/` package directory.

### From Repository Root:
```bash
# Start local development server with Turbopack (http://localhost:3000)
npm run dev

# Run ESLint validation
npm run lint

# Auto-fix linting issues where possible
npm run lint:fix

# Compile production build
npm run build

# Start production server
npm start
```

### From `naturalselection-site/`:
```bash
cd naturalselection-site

npm run dev
npm run lint
npm run build
npm run start
```

---

## Code Quality & Standards

### ESLint Configuration
- Linting uses ESLint 9 with native flat configuration (`eslint.config.mjs`).
- Extends `eslint-config-next/core-web-vitals`.
- Enforces strict React 19 hook guidelines:
  - Avoid synchronous `setState` calls directly within `useEffect` bodies (use `useSyncExternalStore` or callback-driven subscriptions).
  - Declare all functions and variables before accessing them in component scopes.

### Tailwind CSS v4 Styling
- Tailwind CSS v4 is processed via `@tailwindcss/postcss`.
- Avoid hardcoded color hex values in markup where semantic tokens exist:
  - Backgrounds: `theme-page`, `theme-card`, `theme-hero`
  - Text: `theme-heading`, `theme-body`, `theme-muted`
  - Accents: `gradient-accent`, `gradient-primary`, `gradient-hero`
- All components must provide high-contrast legibility across both Dark Mode (default) and Light Mode.

### Responsive Design Breakpoints
- Follow standard mobile-first Tailwind breakpoints:
  - `sm`: 640px (tablets / large phones)
  - `md`: 768px (landscape tablets / small laptops)
  - `lg`: 1024px (desktops)
  - `xl`: 1280px (widescreen displays)
- Touch-friendly tap targets: Minimum 44x44px for buttons and interactive controls.

---

## Testing & Verification Loop

Prior to committing or submitting a pull request, run the following verification loop:

```bash
# 1. Lint check (must exit with code 0 and 0 warnings)
npm run lint

# 2. Production build check (must complete static generation cleanly)
npm run build
```
