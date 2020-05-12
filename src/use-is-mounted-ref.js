import { useRef, useEffect } from 'react';

function useIsMountedRef() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => (isMounted.current = false);
  }, []);

  return isMounted;
}

export default useIsMountedRef;
