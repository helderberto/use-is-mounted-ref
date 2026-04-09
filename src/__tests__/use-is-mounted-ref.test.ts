import { renderHook } from '@testing-library/react';

import { useIsMountedRef } from '../use-is-mounted-ref';

describe('useIsMountedRef', () => {
  it('should return current reference object with true value if component is mounted', () => {
    const { result } = renderHook(() => useIsMountedRef());
    expect(result.current).toEqual({ current: true });
  });

  it('should return a stable ref across rerenders', () => {
    const { result, rerender } = renderHook(() => useIsMountedRef());
    const firstRef = result.current;

    rerender();

    expect(result.current).toBe(firstRef);
  });

  it('should return current reference object with false value if component is unmounted', () => {
    const { result, unmount } = renderHook(() => useIsMountedRef());
    unmount();
    expect(result.current).toEqual({ current: false });
  });
});
