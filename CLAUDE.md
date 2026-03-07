# Project

React hooks library for mount state tracking and AbortController cleanup.

- Source: `src/use-is-mounted-ref.ts`, `src/use-abort-controller.ts`, `src/index.ts`
- Tests: `src/__tests__/*.test.ts`
- Build output: `dist/` (CJS + ESM via Rollup)

## Skills

### /testing
- Runner: Vitest (`npm test`)
- All tests use `renderHook` from `@testing-library/react`
- TypeScript check: `npm run test:tsc`
- Test files live in `src/__tests__/` alongside source

### /lint
- ESLint with airbnb config + prettier: `npm run lint`
- Max warnings: 0 (enforced via `--max-warnings=0`)
- Auto-fix: `npm run lint:fix`

### /coverage
- Command: `npm run test:coverage` (uses `@vitest/coverage-v8`)
- Target: 100% — library is small and fully testable
- Check coverage for unstaged changes before committing

### /tdd
- Hook behavior is fully deterministic; prefer test-first for all new hooks
- Pattern: write failing test using `renderHook`, implement hook, verify mount/unmount lifecycle
- Each hook should cover: defined, mounted state, unmounted state, and any side effects
