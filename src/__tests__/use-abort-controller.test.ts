import { renderHook } from '@testing-library/react';

import { useAbortController } from '../use-abort-controller';

describe('useAbortController', () => {
  it('should be defined', () => {
    expect(useAbortController).toBeDefined();
  });

  it('should return an AbortController instance', () => {
    const { result } = renderHook(() => useAbortController());
    expect(result.current).toBeInstanceOf(AbortController);
    expect(result.current.signal).toBeInstanceOf(AbortSignal);
  });

  it('should not be aborted when mounted', () => {
    const { result } = renderHook(() => useAbortController());
    expect(result.current.signal.aborted).toBe(false);
  });

  it('should abort when component unmounts', () => {
    const { result, unmount } = renderHook(() => useAbortController());
    const controller = result.current;

    expect(controller.signal.aborted).toBe(false);

    unmount();

    expect(controller.signal.aborted).toBe(true);
  });

  it('should call abort listener on unmount', () => {
    const { result, unmount } = renderHook(() => useAbortController());
    const abortHandler = vi.fn();

    result.current.signal.addEventListener('abort', abortHandler);

    unmount();

    expect(abortHandler).toHaveBeenCalled();
  });
});
