---
name: tdd
description: Guide test-driven development using red-green-refactor. Use when building a new hook, fixing a bug test-first, or following TDD workflow in this React hooks library.
compatibility: Designed for Claude Code. Requires Node.js and npm.
---

This is a React hooks library — all behavior is testable via `renderHook`.

## Cycle

### Red
Write a failing test in `src/__tests__/<hook-name>.test.ts`:
- Cover: hook is defined, mounted state, unmounted state, any side effects
- Use `renderHook` from `@testing-library/react`
- Run `npm test` and confirm it fails for the right reason

### Green
Implement the minimum hook code in `src/<hook-name>.ts` to pass:
- Run `npm test` and confirm all tests pass

### Refactor
Clean up without breaking tests:
- Run `npm run lint` and `npm run test:tsc` to verify

## Reference patterns

- Mount/unmount: `src/__tests__/use-is-mounted-ref.test.ts`
- Side effects/cleanup: `src/__tests__/use-abort-controller.test.ts`
