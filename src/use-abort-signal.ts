import { useAbortControllerLifecycle } from './use-abort-controller-lifecycle';

/**
 * Returns an `AbortSignal` that aborts when the component unmounts.
 *
 * @example
 * const signal = useAbortSignal();
 * fetch(url, { signal });
 */
export function useAbortSignal(): AbortSignal {
  return useAbortControllerLifecycle().signal;
}
