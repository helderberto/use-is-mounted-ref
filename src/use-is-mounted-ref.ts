import { useRef, useEffect } from 'react';

interface Reference {
  current: boolean;
}

function useIsMountedRef(): Reference {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return isMountedRef;
}

export default useIsMountedRef;
