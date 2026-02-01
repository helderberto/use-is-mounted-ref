import { renderHook } from '@testing-library/react';

import { useIsMountedRef } from '../use-is-mounted-ref';

describe('useIsMountedRef', () => {
  it('shallow validate if useIsMountedRef is defined', () => {
    expect(useIsMountedRef).toBeDefined();
  });

  it('should return current reference object with true value if component is mounted', () => {
    const { result } = renderHook(() => useIsMountedRef());
    expect(result.current).toEqual({ current: true });
  });

  it('should return current reference object with false value if component is unmounted', () => {
    const { result, unmount } = renderHook(() => useIsMountedRef());
    unmount();
    expect(result.current).toEqual({ current: false });
  });
});
