# Migration

## v1 to v2

The default export became a named export.

```diff
- import useIsMountedRef from 'use-is-mounted-ref';
+ import { useIsMountedRef } from 'use-is-mounted-ref';
```

v2 also adds two hooks. Nothing else changed.

```js
import { useAbortController, useAbortSignal } from 'use-is-mounted-ref';
```

`useAbortSignal` arrived in 2.1.0.
