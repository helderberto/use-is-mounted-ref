import { renderHook } from '@testing-library/react';
import { StrictMode } from 'react';

import { useLatestAbortSignal } from '../use-latest-abort-signal';

describe('useLatestAbortSignal', () => {
  it('should return a live AbortSignal per call', () => {
    const { result } = renderHook(() => useLatestAbortSignal());
    const signal = result.current();

    expect(signal).toBeInstanceOf(AbortSignal);
    expect(signal.aborted).toBe(false);
  });

  it('should return a stable function across renders', () => {
    const { result, rerender } = renderHook(() => useLatestAbortSignal());
    const firstGetSignal = result.current;

    rerender();

    expect(result.current).toBe(firstGetSignal);
  });

  it('should abort the previous signal on the next call', () => {
    const { result } = renderHook(() => useLatestAbortSignal());
    const first = result.current();
    const second = result.current();

    expect(first.aborted).toBe(true);
    expect(second.aborted).toBe(false);
  });

  it('should abort with an AbortError', () => {
    const { result } = renderHook(() => useLatestAbortSignal());
    const first = result.current();
    result.current();

    expect(first.reason).toHaveProperty('name', 'AbortError');
  });

  it('should abort the latest signal on unmount', () => {
    const { result, unmount } = renderHook(() => useLatestAbortSignal());
    const signal = result.current();

    unmount();

    expect(signal.aborted).toBe(true);
  });

  it('should not throw on unmount when never called', () => {
    const { unmount } = renderHook(() => useLatestAbortSignal());

    expect(() => unmount()).not.toThrow();
  });

  it('should return an aborted signal when called after unmount', () => {
    const { result, unmount } = renderHook(() => useLatestAbortSignal());
    const getSignal = result.current;

    unmount();

    expect(getSignal().aborted).toBe(true);
  });

  it('should return a live signal when called before mount effects run', () => {
    const { result } = renderHook(() => useLatestAbortSignal()());

    expect(result.current.aborted).toBe(false);
  });

  it('should return a live signal after StrictMode double-mount', () => {
    const { result } = renderHook(() => useLatestAbortSignal(), {
      wrapper: StrictMode,
    });

    expect(result.current().aborted).toBe(false);
  });

  it('should abort the previous signal in StrictMode', () => {
    const { result } = renderHook(() => useLatestAbortSignal(), {
      wrapper: StrictMode,
    });
    const first = result.current();
    const second = result.current();

    expect(first.aborted).toBe(true);
    expect(second.aborted).toBe(false);
  });

  it('should abort the latest signal on unmount in StrictMode', () => {
    const { result, unmount } = renderHook(() => useLatestAbortSignal(), {
      wrapper: StrictMode,
    });
    const signal = result.current();

    unmount();

    expect(signal.aborted).toBe(true);
  });
});
