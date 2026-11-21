## [2.2.3](https://github.com/helderberto/use-is-mounted-ref/compare/v2.2.2...v2.2.3) (2026-11-21)

### Documentation

- restore Motivation section in README ([#1376](https://github.com/helderberto/use-is-mounted-ref/issues/1376)) ([7709838](https://github.com/helderberto/use-is-mounted-ref/commit/77098387ceb17465abded16122f38b94f5a64cdb))

## [2.2.2](https://github.com/helderberto/use-is-mounted-ref/compare/v2.2.1...v2.2.2) (2026-11-21)

### Build

- show docs and build commits in release notes ([214e35a](https://github.com/helderberto/use-is-mounted-ref/commit/214e35a5a394f67931a8af821ce2a7dc46431500))

## [2.2.1](https://github.com/helderberto/use-is-mounted-ref/compare/v2.2.0...v2.2.1) (2026-11-21)

# [2.2.0](https://github.com/helderberto/use-is-mounted-ref/compare/v2.1.4...v2.2.0) (2026-11-21)

### Features

- add useLatestAbortSignal ([efde668](https://github.com/helderberto/use-is-mounted-ref/commit/efde66880cda08088290562662287c59139e4d33))

## [2.1.4](https://github.com/helderberto/use-is-mounted-ref/compare/v2.1.3...v2.1.4) (2026-11-21)

## [2.1.3](https://github.com/helderberto/use-is-mounted-ref/compare/v2.1.2...v2.1.3) (2026-10-19)

## [2.1.2](https://github.com/helderberto/use-is-mounted-ref/compare/v2.1.1...v2.1.2) (2026-10-19)

## [2.1.1](https://github.com/helderberto/use-is-mounted-ref/compare/v2.1.0...v2.1.1) (2026-04-09)

# [2.1.0](https://github.com/helderberto/use-is-mounted-ref/compare/v2.0.0...v2.1.0) (2026-04-09)

### Bug Fixes

- add tslib dep required by rollup typescript plugin ([b2545ef](https://github.com/helderberto/use-is-mounted-ref/commit/b2545efbd967e17e39553b556edea6efbdcc8ae1))
- **ci:** fetch full git history for semantic-release tag detection ([5e9b443](https://github.com/helderberto/use-is-mounted-ref/commit/5e9b443ef0207a7f43ae64b73a38d99b279e066d))
- **ci:** use Node 22 for semantic-release compatibility ([94d7945](https://github.com/helderberto/use-is-mounted-ref/commit/94d794522fe9b6a9555a3c7b11a65a791ca7b0dd))
- lazy-init AbortController for Strict Mode compat ([8d53a6a](https://github.com/helderberto/use-is-mounted-ref/commit/8d53a6a596fd9e4d300ea8f5eef4cc5124b22b41))
- replace commitizen with czg, add npm test hook ([3579f0c](https://github.com/helderberto/use-is-mounted-ref/commit/3579f0c8357a240d31c0f609ef3d26e07ae480c4))
- restore version to 2.0.0 and clean CHANGELOG after semantic-release misconfiguration ([e3af7c8](https://github.com/helderberto/use-is-mounted-ref/commit/e3af7c8ebfb406572639ba9b487a181175611c3d))
- update deps to resolve audit vulnerabilities ([49aca1d](https://github.com/helderberto/use-is-mounted-ref/commit/49aca1d7b87a6d27d951e54da120d47f7a9f51c4))

### Features

- add useAbortSignal hook ([8f2a570](https://github.com/helderberto/use-is-mounted-ref/commit/8f2a5703a836a21fd5879ccb277b9f994f432d1f))

# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-02-01

### Added

- **useAbortController** - New hook that automatically aborts on component unmount
  - Returns an `AbortController` instance
  - Auto-cleanup when component unmounts
  - Perfect for fetch requests and async operations
  - Full test coverage

### Changed

- **BREAKING**: Converted from default export to named exports
  - Old: `import useIsMountedRef from 'use-is-mounted-ref'`
  - New: `import { useIsMountedRef } from 'use-is-mounted-ref'`
  - Improves tree-shaking and explicit imports
  - Both hooks now exported as named exports

### Migration Guide

```diff
- import useIsMountedRef from 'use-is-mounted-ref';
+ import { useIsMountedRef } from 'use-is-mounted-ref';
```

```diff
+ import { useAbortController } from 'use-is-mounted-ref';
```

## [1.5.0] - Previous releases

See git history for previous changes.
