# AGENTS.md

React hooks that cancel async work on unmount: `useIsMountedRef`, `useAbortController`, `useAbortSignal`.

## Layout

- Source: `src/*.ts`. Public API only through `src/index.ts`
- Tests: `src/__tests__/<name>.test.ts`
- Build: Vite lib mode to `dist/` (ES, CJS, UMD), declarations via `tsconfig.build.json`

## Code

- TDD: failing test first, even for bug fixes
- Vitest + `@testing-library/react` `renderHook`. Cover Strict Mode for every hook
- Coverage stays at 100%. Vitest thresholds enforce it
- Minimum code. No speculative options or abstractions
- No comments, except a short non-obvious "why"
- `strict` TypeScript. Tests are type-checked too

## Dependencies

- Exact pins only. `.npmrc` sets `save-exact` and `save-prefix=""`. Never hand-write `^` or `~`
- Run `npm audit fix` after bumps
- Blocked: TypeScript 7 (typescript-eslint needs <6.1). jsdom 30 and lint-staged 17 (need Node 22.22+)
- Node 22.12+ locally and in CI

## Verify

`npm test`, `npm run test:coverage`, `npm run lint`, `npm run typecheck`, `npm run build`

Packaging changes: also run `npx publint` and `npx @arethetypeswrong/cli --pack .`

## Git

- Atomic Conventional Commits. commitlint enforces them
- `docs`, `refactor`, `perf`, `style`, `build` cut a patch release. `chore`, `ci`, `test` don't
- semantic-release owns `version` and `CHANGELOG.md`. Never edit them by hand
- npm publishes through trusted publishing (GitHub OIDC). No `NPM_TOKEN` secret
- Run `git pull --rebase origin main` before pushing
- Breaking packaging changes (`exports` map, `.mjs`) wait for a major

## Docs

- README stays lean: why, install, quick start, API. Depth goes in `docs/*.md`
- Long examples go in `<details>`
- Prose: lead with the point, paragraphs under 240 characters, no em dashes, no filler
