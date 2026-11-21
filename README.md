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

| Hook                     | Returns                         | Aborts / flips when  |
| ------------------------ | ------------------------------- | -------------------- |
| `useAbortSignal()`       | `AbortSignal`                   | Component unmounts   |
| `useAbortController()`   | `AbortController`               | Component unmounts   |
| `useIsMountedRef()`      | `{ readonly current: boolean }` | Component unmounts   |
| `useLatestAbortSignal()` | `() => AbortSignal`             | Next call or unmount |

All four return a stable value across renders.

### useAbortSignal

Use it when you only need the signal. This covers most cases.

### useAbortController

Use it when you also need to call `abort()` yourself, for example from a Cancel button.

<details>
<summary>Example: cancel button</summary>

```jsx
import { useAbortController } from 'use-is-mounted-ref';

function Upload({ file }) {
  const controller = useAbortController();

  const upload = () => fetch('/api/upload', { method: 'POST', body: file, signal: controller.signal });

  return (
    <>
      <button onClick={upload}>Upload</button>
      <button onClick={() => controller.abort()}>Cancel</button>
    </>
  );
}
```

Once aborted, the controller stays aborted until the component remounts.

</details>

### useLatestAbortSignal

Use it when a newer call should cancel the previous one, such as search as you type. Each `getSignal()` aborts the signal before it.

<details>
<summary>Example: search as you type</summary>

```jsx
import { useState } from 'react';
import { useLatestAbortSignal } from 'use-is-mounted-ref';

function Search() {
  const getSignal = useLatestAbortSignal();
  const [results, setResults] = useState([]);

  const search = async (query) => {
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: getSignal() });
      setResults(await res.json());
    } catch (err) {
      if (err.name !== 'AbortError') throw err;
    }
  };

  return <input onChange={(e) => search(e.target.value)} />;
}
```

Only the latest request can call `setResults`. After unmount, `getSignal()` returns an aborted signal.

</details>

### useIsMountedRef

Use it for promises that cannot take a signal, such as some third-party SDKs.

<details>
<summary>Example: guard a non-abortable promise</summary>

```jsx
import { useState } from 'react';
import { useIsMountedRef } from 'use-is-mounted-ref';

function Profile({ sdk }) {
  const isMountedRef = useIsMountedRef();
  const [user, setUser] = useState(null);

  const load = async () => {
    const result = await sdk.getUser();
    if (isMountedRef.current) setUser(result);
  };

  return <button onClick={load}>{user ? user.name : 'Load'}</button>;
}
```

</details>

## Inside `useEffect`

These hooks do not abort when effect dependencies change. For work keyed on props, create a controller per effect run:

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(`/api/users/${id}`, { signal: controller.signal });
  return () => controller.abort();
}, [id]);
```

## Docs

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
