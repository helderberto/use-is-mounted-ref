---
name: lint
description: Run linting and formatting checks. Use when asked to lint, fix lint errors, check code style, or run ESLint and Prettier on the codebase.
compatibility: Designed for Claude Code. Requires Node.js and npm.
---

1. Run `npm run lint` (ESLint with airbnb config, `--max-warnings=0`)
2. If errors exist, run `npm run lint:fix` to auto-fix, then re-run lint
3. Run `npm run format` to apply Prettier
4. Report any remaining issues that require manual fixes with file and line references
