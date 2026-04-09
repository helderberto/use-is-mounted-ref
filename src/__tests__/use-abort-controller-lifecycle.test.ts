import { renderHook } from '@testing-library/react';
import { StrictMode } from 'react';

import { useAbortControllerLifecycle } from '../use-abort-controller-lifecycle';

describe('useAbortControllerLifecycle', () => {
  it('should return an AbortController instance', () => {
    const { result } = renderHook(() => useAbortControllerLifecycle());
    expect(result.current).toBeInstanceOf(AbortController);
  });

  it('should not be aborted when mounted', () => {
    const { result } = renderHook(() => useAbortControllerLifecycle());
    expect(result.current.signal.aborted).toBe(false);
  });

  it('should return a stable controller across rerenders', () => {
    const { result, rerender } = renderHook(() => useAbortControllerLifecycle());
    const first = result.current;

    rerender();

    expect(result.current).toBe(first);
  });

  it('should abort when component unmounts', () => {
    const { result, unmount } = renderHook(() => useAbortControllerLifecycle());
    const controller = result.current;

    unmount();

    expect(controller.signal.aborted).toBe(true);
  });

  it('should call abort listener on unmount', () => {
    const { result, unmount } = renderHook(() => useAbortControllerLifecycle());
    const abortHandler = vi.fn();

    result.current.signal.addEventListener('abort', abortHandler);

    unmount();

    expect(abortHandler).toHaveBeenCalled();
  });

  it('should provide a non-aborted controller in StrictMode', () => {
    const { result } = renderHook(() => useAbortControllerLifecycle(), {
      wrapper: StrictMode,
    });

    expect(result.current.signal.aborted).toBe(false);
  });
});
