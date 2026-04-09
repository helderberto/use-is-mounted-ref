import { useState, useEffect } from 'react';

/**
 * Manages an AbortController lifecycle: creates one on mount,
 * aborts on unmount, and recreates after Strict Mode double-mount.
 */
export function useAbortControllerLifecycle(): AbortController {
  const [controller, setController] = useState(() => new AbortController());

  useEffect(() => {
    if (controller.signal.aborted) {
      setController(new AbortController());
      return;
    }

    return () => {
      controller.abort();
    };
  }, [controller]);

  return controller;
}
