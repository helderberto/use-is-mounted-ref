import { useRef, useEffect } from 'react';

export function useAbortController(): AbortController {
  const controllerRef = useRef<AbortController | null>(null);

  const needsNewController = controllerRef.current === null || controllerRef.current.signal.aborted;

  if (needsNewController) {
    controllerRef.current = new AbortController();
  }

  useEffect(() => {
    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return controllerRef.current;
}
