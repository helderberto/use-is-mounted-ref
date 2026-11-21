import { useRef, useEffect } from 'react';

/**
 * Returns a ref that is `true` while the component is mounted.
 * Use it to guard promises that cannot take an `AbortSignal`.
 *
 * @example
 * const isMountedRef = useIsMountedRef();
 * const result = await sdk.getUser();
 * if (isMountedRef.current) setUser(result);
 */
export function useIsMountedRef(): { readonly current: boolean } {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}
