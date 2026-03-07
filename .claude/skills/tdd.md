Guide test-driven development using red-green-refactor.

This is a React hooks library — all behavior is testable via `renderHook`.

Cycle:
1. **Red** — write a failing test in `src/__tests__/<hook-name>.test.ts`
   - Cover: hook is defined, mounted state, unmounted state, any side effects
   - Use `renderHook` from `@testing-library/react`
   - Run `npm test` and confirm it fails for the right reason
2. **Green** — implement the minimum hook code in `src/<hook-name>.ts` to pass
   - Run `npm test` and confirm all tests pass
3. **Refactor** — clean up without breaking tests
   - Run `npm run lint` and `npm run test:tsc` to verify

Reference patterns:
- Mount/unmount: see `src/__tests__/use-is-mounted-ref.test.ts`
- Side effects/cleanup: see `src/__tests__/use-abort-controller.test.ts`
