import { useRef, useEffect } from 'react';

export function useAbortController(): AbortController {
  const controllerRef = useRef<AbortController>(new AbortController());

  useEffect(() => {
    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return controllerRef.current;
}
