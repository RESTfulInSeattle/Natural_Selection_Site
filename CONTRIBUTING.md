# Contributing & AI-First SDLC Guidelines

Thank you for contributing to the Natural Selection web platform! This repository is engineered for seamless collaboration between human architects and autonomous AI coding agents.

---

## 🤖 The AI-First SDLC Loop

When contributing (whether as a human developer or an AI agent), follow the standard loop:

```
Research & Inspect ➔ Formulate Plan ➔ Execute Clean Edits ➔ Automated Verification
```

1. **Research & Inspect**:
   - Check `AGENTS.md` and `docs/ARCHITECTURE.md` before making structural or domain decisions.
   - Inspect existing components and styles to ensure visual and architectural consistency.
2. **Formulate Plan**:
   - For non-trivial modifications, document the intended approach and identify touched files.
3. **Execute Clean Edits**:
   - Follow standard React 19 and Next.js 16 conventions.
   - Use semantic Tailwind tokens (`theme-page`, `theme-card`, `gradient-accent`, etc.) instead of hardcoded hex values.
4. **Automated Verification**:
   - Run `npm run lint` and verify exit code 0 with zero warnings.
   - Run `npm run build` and verify that all static pages compile cleanly.

---

## Development Commands

All development commands can be run from the repository root:

```bash
# Start development server
npm run dev

# Run ESLint quality checks
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Compile production build
npm run build
```

---

## Git Commit & Branching Conventions

- **Branch Naming**:
  - `feat/feature-name` — New user-facing features or components
  - `fix/bug-description` — Bug fixes or lint/build corrections
  - `docs/topic` — Documentation updates and architectural records
  - `refactor/scope` — Structural reorganizations without feature changes
- **Commit Messages**: Follow standard Conventional Commits:
  - `feat: add universal audio player with cue markers`
  - `fix: resolve React 19 hook lint error in ThemeProvider`
  - `docs: update content guide with image conventions`
  - `chore: clean up legacy public folder`

---

## Quality Gate Checklist

Before pushing changes or opening a Pull Request:
- [ ] `npm run lint` passes with 0 errors and 0 warnings.
- [ ] `npm run build` completes successfully.
- [ ] All new images are placed in `public/images/[pages|blog]/[slug]/`.
- [ ] Any newly created components are fully responsive across mobile, tablet, and desktop viewports.
- [ ] Both Dark Mode and Light Mode render with high-contrast legibility.
