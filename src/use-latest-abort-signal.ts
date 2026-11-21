import { useCallback, useEffect, useRef } from 'react';

/**
 * Returns a function that creates a fresh `AbortSignal` per call.
 * Each call aborts the previous signal, so only the latest request survives.
 * Unmount aborts the last one. Calls after unmount get an aborted signal.
 *
 * @example
 * const getSignal = useLatestAbortSignal();
 * const search = (q) => fetch(`/api/search?q=${q}`, { signal: getSignal() });
 */
export function useLatestAbortSignal(): () => AbortSignal {
  const controllerRef = useRef<AbortController | null>(null);
  // Tracks unmount, not mount, so calls from child effects before ours still get a live signal.
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    isUnmountedRef.current = false;

    return () => {
      isUnmountedRef.current = true;
      controllerRef.current?.abort();
    };
  }, []);

  return useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    if (isUnmountedRef.current) {
      controller.abort();
    }
    controllerRef.current = controller;
    return controller.signal;
  }, []);
}
