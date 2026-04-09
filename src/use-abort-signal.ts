import { useRef, useEffect } from 'react';

export function useAbortSignal(): AbortSignal {
  const controllerRef = useRef<AbortController | null>(null);

  const needsNewController = controllerRef.current === null || controllerRef.current.signal.aborted;

  if (needsNewController) {
    controllerRef.current = new AbortController();
  }

  useEffect(() => {
    return () => {
      controllerRef.current!.abort();
    };
  }, []);

  return controllerRef.current!.signal;
}
