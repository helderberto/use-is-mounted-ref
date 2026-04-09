# [2.1.0](https://github.com/helderberto/use-is-mounted-ref/compare/v2.0.0...v2.1.0) (2026-04-09)


### Bug Fixes

* add tslib dep required by rollup typescript plugin ([b2545ef](https://github.com/helderberto/use-is-mounted-ref/commit/b2545efbd967e17e39553b556edea6efbdcc8ae1))
* **ci:** fetch full git history for semantic-release tag detection ([5e9b443](https://github.com/helderberto/use-is-mounted-ref/commit/5e9b443ef0207a7f43ae64b73a38d99b279e066d))
* **ci:** use Node 22 for semantic-release compatibility ([94d7945](https://github.com/helderberto/use-is-mounted-ref/commit/94d794522fe9b6a9555a3c7b11a65a791ca7b0dd))
* lazy-init AbortController for Strict Mode compat ([8d53a6a](https://github.com/helderberto/use-is-mounted-ref/commit/8d53a6a596fd9e4d300ea8f5eef4cc5124b22b41))
* replace commitizen with czg, add npm test hook ([3579f0c](https://github.com/helderberto/use-is-mounted-ref/commit/3579f0c8357a240d31c0f609ef3d26e07ae480c4))
* restore version to 2.0.0 and clean CHANGELOG after semantic-release misconfiguration ([e3af7c8](https://github.com/helderberto/use-is-mounted-ref/commit/e3af7c8ebfb406572639ba9b487a181175611c3d))
* update deps to resolve audit vulnerabilities ([49aca1d](https://github.com/helderberto/use-is-mounted-ref/commit/49aca1d7b87a6d27d951e54da120d47f7a9f51c4))


### Features

* add useAbortSignal hook ([8f2a570](https://github.com/helderberto/use-is-mounted-ref/commit/8f2a5703a836a21fd5879ccb277b9f994f432d1f))

# 1.0.0 (2026-04-09)


* feat!: add useAbortController and convert to named exports ([#1211](https://github.com/helderberto/use-is-mounted-ref/issues/1211)) ([e792955](https://github.com/helderberto/use-is-mounted-ref/commit/e792955241a2aeba8a6a78042a2b547d827f23a9))


### Bug Fixes

* add tslib dep required by rollup typescript plugin ([b2545ef](https://github.com/helderberto/use-is-mounted-ref/commit/b2545efbd967e17e39553b556edea6efbdcc8ae1))
* **ci:** fetch full git history for semantic-release tag detection ([5e9b443](https://github.com/helderberto/use-is-mounted-ref/commit/5e9b443ef0207a7f43ae64b73a38d99b279e066d))
* **ci:** use Node 22 for semantic-release compatibility ([94d7945](https://github.com/helderberto/use-is-mounted-ref/commit/94d794522fe9b6a9555a3c7b11a65a791ca7b0dd))
* lazy-init AbortController for Strict Mode compat ([8d53a6a](https://github.com/helderberto/use-is-mounted-ref/commit/8d53a6a596fd9e4d300ea8f5eef4cc5124b22b41))
* replace commitizen with czg, add npm test hook ([3579f0c](https://github.com/helderberto/use-is-mounted-ref/commit/3579f0c8357a240d31c0f609ef3d26e07ae480c4))
* restore version to 2.0.0 and clean CHANGELOG after semantic-release misconfiguration ([e3af7c8](https://github.com/helderberto/use-is-mounted-ref/commit/e3af7c8ebfb406572639ba9b487a181175611c3d))
* update deps to resolve audit vulnerabilities ([49aca1d](https://github.com/helderberto/use-is-mounted-ref/commit/49aca1d7b87a6d27d951e54da120d47f7a9f51c4))


### Features

* add useAbortSignal hook ([8f2a570](https://github.com/helderberto/use-is-mounted-ref/commit/8f2a5703a836a21fd5879ccb277b9f994f432d1f))
* update project structure and configurations to use typescript ([2aa8a3a](https://github.com/helderberto/use-is-mounted-ref/commit/2aa8a3afb98cdfb36f63eaac82c623185958be5a))
* use readonly in return value type ([#15](https://github.com/helderberto/use-is-mounted-ref/issues/15)) ([ce87172](https://github.com/helderberto/use-is-mounted-ref/commit/ce8717286cf23982be297c0dfe27f79bc36dbaa7))


### BREAKING CHANGES

* Default export replaced with named exports

- Add useAbortController hook for auto-abort on unmount
- Convert useIsMountedRef to named export
- Add full test coverage for new hook
- Update README with examples and migration guide
- Add CHANGELOG.md
- Bump version to 2.0.0
- Published to npm

# 1.0.0 (2026-04-09)


* feat!: add useAbortController and convert to named exports ([#1211](https://github.com/helderberto/use-is-mounted-ref/issues/1211)) ([e792955](https://github.com/helderberto/use-is-mounted-ref/commit/e792955241a2aeba8a6a78042a2b547d827f23a9))


### Bug Fixes

* add tslib dep required by rollup typescript plugin ([b2545ef](https://github.com/helderberto/use-is-mounted-ref/commit/b2545efbd967e17e39553b556edea6efbdcc8ae1))
* **ci:** use Node 22 for semantic-release compatibility ([94d7945](https://github.com/helderberto/use-is-mounted-ref/commit/94d794522fe9b6a9555a3c7b11a65a791ca7b0dd))
* lazy-init AbortController for Strict Mode compat ([8d53a6a](https://github.com/helderberto/use-is-mounted-ref/commit/8d53a6a596fd9e4d300ea8f5eef4cc5124b22b41))
* replace commitizen with czg, add npm test hook ([3579f0c](https://github.com/helderberto/use-is-mounted-ref/commit/3579f0c8357a240d31c0f609ef3d26e07ae480c4))
* restore version to 2.0.0 and clean CHANGELOG after semantic-release misconfiguration ([e3af7c8](https://github.com/helderberto/use-is-mounted-ref/commit/e3af7c8ebfb406572639ba9b487a181175611c3d))
* update deps to resolve audit vulnerabilities ([49aca1d](https://github.com/helderberto/use-is-mounted-ref/commit/49aca1d7b87a6d27d951e54da120d47f7a9f51c4))


### Features

* add useAbortSignal hook ([8f2a570](https://github.com/helderberto/use-is-mounted-ref/commit/8f2a5703a836a21fd5879ccb277b9f994f432d1f))
* update project structure and configurations to use typescript ([2aa8a3a](https://github.com/helderberto/use-is-mounted-ref/commit/2aa8a3afb98cdfb36f63eaac82c623185958be5a))
* use readonly in return value type ([#15](https://github.com/helderberto/use-is-mounted-ref/issues/15)) ([ce87172](https://github.com/helderberto/use-is-mounted-ref/commit/ce8717286cf23982be297c0dfe27f79bc36dbaa7))


### BREAKING CHANGES

* Default export replaced with named exports

- Add useAbortController hook for auto-abort on unmount
- Convert useIsMountedRef to named export
- Add full test coverage for new hook
- Update README with examples and migration guide
- Add CHANGELOG.md
- Bump version to 2.0.0
- Published to npm

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
