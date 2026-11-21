# Recipes

Each recipe starts work outside an effect and cleans it up on unmount. For work inside `useEffect`, see [Inside useEffect](api.md#inside-useeffect). For search as you type, see [useLatestAbortSignal](api.md#uselatestabortsignal).

<details>
<summary>Listeners added from a handler</summary>

Pass the signal to `addEventListener`. The browser removes the listener on abort, so you skip `removeEventListener`.

```jsx
import { useAbortSignal } from 'use-is-mounted-ref';

function Draggable({ onMove }) {
  const signal = useAbortSignal();

  const startDrag = () => {
    window.addEventListener('pointermove', onMove, { signal });
  };

  return <div onPointerDown={startDrag}>Drag me</div>;
}
```

</details>

<details>
<summary>Timers started from a handler</summary>

```jsx
import { useAbortSignal } from 'use-is-mounted-ref';

function Toast({ onClose }) {
  const signal = useAbortSignal();

  const scheduleClose = () => {
    const id = setTimeout(onClose, 3000);
    signal.addEventListener('abort', () => clearTimeout(id), { once: true });
  };

  return <button onClick={scheduleClose}>Dismiss later</button>;
}
```

</details>

<details>
<summary>Abort on unmount or after a timeout</summary>

`AbortSignal.any` combines signals. The request stops on whichever comes first.

```jsx
const signal = useAbortSignal();

const load = () => fetch('/api/slow', { signal: AbortSignal.any([signal, AbortSignal.timeout(5000)]) });
```

Check [browser support](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static) before relying on it.

</details>
