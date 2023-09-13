import { useRef, useCallback } from "react";

type Func<T extends any[], R extends void> = (...args: T[]) => R;

export function useDebeounce<T extends any[], R extends void>(cb: Func<T, R>, delay: number) {
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback(
        (...args: T) => {
            if (timeout.current === null) {
                cb(args);
                timeout.current = setTimeout(() => {
                    cb(args);
                    if (timeout.current !== null) clearTimeout(timeout.current);
                }, delay);
            } else {
                clearTimeout(timeout.current);

                timeout.current = setTimeout(() => {
                    cb(args);
                    if (timeout.current !== null) clearTimeout(timeout.current);
                }, delay);
            }
        },
        [cb, delay]
    );
}
