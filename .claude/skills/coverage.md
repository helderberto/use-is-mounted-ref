Check test coverage and report gaps.

1. Run `npm run test:coverage` (Vitest with @vitest/coverage-v8)
2. Report coverage per file in `src/`
3. Flag any lines/branches below 100% — this library is small enough to target full coverage
4. Suggest tests to fill gaps, following the `renderHook` pattern used in `src/__tests__/`
