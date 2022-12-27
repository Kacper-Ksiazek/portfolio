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
        if (localStorage) {
            const valueFromLocalStorage = localStorage.getItem(localStorageKey);
            if (valueFromLocalStorage !== null) setValue(JSON.parse(valueFromLocalStorage));
        }
    }, [localStorageKey]);

    useEffect(() => {
        if (localStorage) {
            localStorage.setItem(localStorageKey, JSON.stringify(value));
        }
    }, [localStorageKey, value]);

    return [value, setValue];
};
