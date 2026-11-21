# useLatestAbortSignal returns a signal factory

`useLatestAbortSignal` returns `() => AbortSignal`. Each call aborts the previous signal, unmount aborts the last, and calls after unmount return an already-aborted signal. A factory keeps the surface minimal, avoids stale closures and dependency arrays, and works with any API that takes a signal. Considered a callback wrapper (`useAbortableCallback(fn)`); it can be layered on later.
