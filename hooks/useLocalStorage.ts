// Tools
import { useState, useEffect } from "react";
// Types
import type { Dispatch, SetStateAction } from "react";

type UseLocalStorageResult<T> = [
    T, //
    Dispatch<SetStateAction<T>>
];

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T): UseLocalStorageResult<T> => {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (localStorage) {
            const valueFromLocalStorage = localStorage.getItem(localStorageKey);
            if (valueFromLocalStorage !== null && valueFromLocalStorage !== undefined) {
                setValue(JSON.parse(valueFromLocalStorage));
            }
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [localStorageKey]);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (localStorage) {
            if (JSON.stringify(value) === JSON.stringify(initialValue)) {
                timeout = setTimeout(() => {
                    localStorage.setItem(localStorageKey, JSON.stringify(value));
                }, 3000);
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(value));
            }
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [localStorageKey, value, initialValue]);

    return [value, setValue];
};
