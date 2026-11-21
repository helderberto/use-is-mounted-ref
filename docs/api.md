# API

Every hook returns a stable value across renders and is safe under React Strict Mode.

- [useAbortSignal](#useabortsignal)
- [useAbortController](#useabortcontroller)
- [useLatestAbortSignal](#uselatestabortsignal)
- [useIsMountedRef](#useismountedref)
- [Inside useEffect](#inside-useeffect)

## useAbortSignal

```ts
function useAbortSignal(): AbortSignal;
```

Returns a signal that aborts when the component unmounts. Use it when you only need the signal. This covers most cases.

```jsx
const signal = useAbortSignal();

const save = () => fetch('/api/save', { method: 'POST', signal });
```

## useAbortController

```ts
function useAbortController(): AbortController;
```

Returns a controller that aborts when the component unmounts. Use it when you also call `abort()` yourself, for example from a Cancel button.

Once aborted, the controller stays aborted until the component remounts.

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

</details>

## useLatestAbortSignal

```ts
function useLatestAbortSignal(): () => AbortSignal;
```

Returns `getSignal`, a function that creates a fresh signal per call. Use it when a newer call should cancel the previous one, such as search as you type.

- Each call aborts the signal before it
- Unmount aborts the last signal
- Calls after unmount return an aborted signal, so late work never starts
- Signals abort with a standard `AbortError`

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

Each keystroke aborts the previous request, so a slow response for "ab" never overwrites results for "abc".

</details>

## useIsMountedRef

```ts
function useIsMountedRef(): { readonly current: boolean };
```

Returns a ref that is `true` while the component is mounted. Use it for promises that cannot take a signal, such as some third-party SDKs.

`current` is `false` during the first render, until effects run. Read it after `await`, not during render.

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

## Inside useEffect

These hooks do not abort when effect dependencies change. For work keyed on props, create a controller per effect run:

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(`/api/users/${id}`, { signal: controller.signal });
  return () => controller.abort();
}, [id]);
```
