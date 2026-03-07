---
name: testing
description: Run the full test suite and report results. Use when asked to run tests, verify behavior, or check for regressions in the hooks library.
compatibility: Designed for Claude Code. Requires Node.js and npm.
---

1. Run `npm test` (Vitest in run mode)
2. Run `npm run test:tsc` to verify TypeScript types
3. Report any failures with file and line references
4. If all pass, confirm with a summary of test count

Test files are in `src/__tests__/*.test.ts` and use `renderHook` from `@testing-library/react`.
