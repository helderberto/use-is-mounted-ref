# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
