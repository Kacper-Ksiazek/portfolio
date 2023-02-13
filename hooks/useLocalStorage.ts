// Tools
import { useState, useEffect, useRef } from "react";
// Types
import type { Dispatch, SetStateAction } from "react";

type UseLocalStorageResult<T> = [
    T, //
    Dispatch<SetStateAction<T>>
];

interface UseLocalStorageOptions {
    keepOriginalValue?: boolean;
}

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T, options?: UseLocalStorageOptions): UseLocalStorageResult<T> => {
    const [value, setValue] = useState<T>(initialValue);
    const originalValue = useRef<T | null>(null);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (localStorage) {
            const valueFromLocalStorage = localStorage.getItem(localStorageKey);
            if (valueFromLocalStorage !== null && valueFromLocalStorage !== undefined) {
                const parsed: T = JSON.parse(valueFromLocalStorage);
                setValue(parsed);
                originalValue.current = parsed;
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

    return [
        options && options.keepOriginalValue ? (originalValue.current as T) : value, //
        setValue,
    ];
};
