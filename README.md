<div align="center">
  <h1>use-is-mounted-ref</h1>

  <p><strong>React hooks that cancel async work on unmount, or when a newer call replaces it.</strong></p>

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->

</div>

---

## Why

Async work started from an event handler outlives the component. A request, listener or timer keeps running after unmount and updates stale state.

It also races itself. Type "ab" then "abc", and the slow "ab" response can land last and overwrite the right results.

These hooks hand you an `AbortSignal` that aborts at the right moment:

- On unmount, or when the next call starts
- Safe under React Strict Mode
- Typed, with hover docs in your editor
- Zero dependencies, under 400 B gzipped

## Motivation

I built this library to fix one problem: updating state after a component unmounts. Before React 18, that logged this warning:

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

The first hook, `useIsMountedRef`, fixed it by skipping the update once the component was gone:

```jsx
const isMountedRef = useIsMountedRef();

const load = async () => {
  const user = await sdk.getUser();
  if (isMountedRef.current) {
    setUser(user);
  }
};
```

The library then grew to cover related problems:

- The guard skips the update, but the request keeps running. `useAbortSignal` and `useAbortController` cancel the work itself.
- Fast calls race, and a stale response can land last. `useLatestAbortSignal` aborts the previous call.

## Install

```bash
npm install use-is-mounted-ref
```

Requires React 16.8 or later. CI tests React 18 and 19.

## Quick start

```jsx
import { useAbortSignal } from 'use-is-mounted-ref';

function SaveButton({ data }) {
  const signal = useAbortSignal();

  const save = () =>
    fetch('/api/save', { method: 'POST', body: JSON.stringify(data), signal }).catch((err) => {
      if (err.name !== 'AbortError') throw err;
    });

  return <button onClick={save}>Save</button>;
}
```

If the component unmounts mid-request, the request is aborted.

## API

| Hook                                                         | Returns                         | Aborts / flips when  | Use it for                         |
| ------------------------------------------------------------ | ------------------------------- | -------------------- | ---------------------------------- |
| [`useAbortSignal()`](docs/api.md#useabortsignal)             | `AbortSignal`                   | Component unmounts   | Most cases                         |
| [`useAbortController()`](docs/api.md#useabortcontroller)     | `AbortController`               | Component unmounts   | Calling `abort()` yourself         |
| [`useLatestAbortSignal()`](docs/api.md#uselatestabortsignal) | `() => AbortSignal`             | Next call or unmount | Search as you type, latest wins    |
| [`useIsMountedRef()`](docs/api.md#useismountedref)           | `{ readonly current: boolean }` | Component unmounts   | Promises that cannot take a signal |

These hooks do not abort when effect dependencies change. See [Inside useEffect](docs/api.md#inside-useeffect).

## Docs

- [API](docs/api.md): behavior and examples per hook
- [Recipes](docs/recipes.md): listeners, timers, and more
- [Migration](docs/migration.md): v1 to v2
- [Changelog](CHANGELOG.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Report bugs or suggest ideas in [issues](https://github.com/helderberto/use-is-mounted-ref/issues).

## License

[MIT License](LICENSE) © [helderberto](https://helderberto.com)

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/use-is-mounted-ref.svg?style=flat-square
[package]: https://www.npmjs.com/package/use-is-mounted-ref
[downloads-badge]: https://img.shields.io/npm/dm/use-is-mounted-ref.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/use-is-mounted-ref
[license-badge]: https://img.shields.io/npm/l/use-is-mounted-ref.svg?style=flat-square
[license]: https://github.com/helderberto/use-is-mounted-ref/blob/main/LICENSE
[build]: https://github.com/helderberto/use-is-mounted-ref/actions
[build-badge]: https://github.com/helderberto/use-is-mounted-ref/actions/workflows/ci.yml/badge.svg
<!-- prettier-ignore-end -->
