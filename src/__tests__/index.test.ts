import { useAbortController, useAbortSignal, useIsMountedRef, useLatestAbortSignal } from '..';

describe('public API', () => {
  it('should expose the hook signatures', () => {
    expectTypeOf(useIsMountedRef).returns.toEqualTypeOf<{ readonly current: boolean }>();
    expectTypeOf(useAbortController).returns.toEqualTypeOf<AbortController>();
    expectTypeOf(useAbortSignal).returns.toEqualTypeOf<AbortSignal>();
    expectTypeOf(useLatestAbortSignal).returns.toEqualTypeOf<() => AbortSignal>();
    expectTypeOf(useLatestAbortSignal).parameters.toEqualTypeOf<[]>();
  });
});
