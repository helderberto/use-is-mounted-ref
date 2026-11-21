import { useAbortControllerLifecycle } from './use-abort-controller-lifecycle';

/**
 * Returns an `AbortController` that aborts when the component unmounts.
 * Use it when you also call `abort()` yourself, such as from a Cancel button.
 *
 * @example
 * const controller = useAbortController();
 * fetch(url, { signal: controller.signal });
 * controller.abort();
 */
export function useAbortController(): AbortController {
  return useAbortControllerLifecycle();
}
