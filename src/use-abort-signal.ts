import { useAbortControllerLifecycle } from './use-abort-controller-lifecycle';

export function useAbortSignal(): AbortSignal {
  return useAbortControllerLifecycle().signal;
}
