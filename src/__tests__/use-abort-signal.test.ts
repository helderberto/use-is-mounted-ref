import { renderHook } from '@testing-library/react';
import { StrictMode } from 'react';

import { useAbortSignal } from '../use-abort-signal';

describe('useAbortSignal', () => {
  it('should return an AbortSignal instance', () => {
    const { result } = renderHook(() => useAbortSignal());
    expect(result.current).toBeInstanceOf(AbortSignal);
  });

  it('should not be aborted when mounted', () => {
    const { result } = renderHook(() => useAbortSignal());
    expect(result.current.aborted).toBe(false);
  });

  it('should abort when component unmounts', () => {
    const { result, unmount } = renderHook(() => useAbortSignal());
    const signal = result.current;

    expect(signal.aborted).toBe(false);

    unmount();

    expect(signal.aborted).toBe(true);
  });

  it('should call abort listener on unmount', () => {
    const { result, unmount } = renderHook(() => useAbortSignal());
    const abortHandler = vi.fn();

    result.current.addEventListener('abort', abortHandler);

    unmount();

    expect(abortHandler).toHaveBeenCalled();
  });

  it('should provide a non-aborted signal in StrictMode', () => {
    const { result } = renderHook(() => useAbortSignal(), {
      wrapper: StrictMode,
    });

    expect(result.current.aborted).toBe(false);
  });

  it('should return a stable signal across renders', () => {
    const { result, rerender } = renderHook(() => useAbortSignal());
    const firstSignal = result.current;

    rerender();

    expect(result.current).toBe(firstSignal);
  });
});
