import { useAbortControllerLifecycle } from './use-abort-controller-lifecycle';

export function useAbortController(): AbortController {
  return useAbortControllerLifecycle();
}
