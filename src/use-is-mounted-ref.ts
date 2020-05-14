import { useRef, useEffect, MutableRefObject } from 'react';

function useIsMountedRef(): MutableRefObject<boolean> {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return isMountedRef;
}

export default useIsMountedRef;
