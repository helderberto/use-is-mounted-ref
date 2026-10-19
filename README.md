<div align="center">
  <h1>use-is-mounted-ref</h1>

  <p><strong>React hooks that cancel async work when a component unmounts.</strong></p>

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->

</div>

---

## Why

Work started from an event handler outlives the component. A request, listener or timer keeps running after unmount and can update stale state.

These hooks give you an `AbortSignal` tied to the component's lifetime. They are safe under React Strict Mode.

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

| Hook                   | Returns                         | Aborts / flips when |
| ---------------------- | ------------------------------- | ------------------- |
| `useAbortSignal()`     | `AbortSignal`                   | Component unmounts  |
| `useAbortController()` | `AbortController`               | Component unmounts  |
| `useIsMountedRef()`    | `{ readonly current: boolean }` | Component unmounts  |

All three return a stable value across renders.

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

These hooks abort only on unmount, not when effect dependencies change. For work keyed on props, create a controller per effect run:

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
