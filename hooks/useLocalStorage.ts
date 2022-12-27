// Tools
import { useState, useCallback } from "react";

type UseLocalStorageResult<T> = [
    T, //
    (val: T) => void
];

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T): UseLocalStorageResult<T> => {
    const [value, _setValue] = useState(() => {
        if (!localStorage || localStorage.getItem(localStorageKey) === null) return initialValue;
        return JSON.parse(localStorage.getItem(localStorageKey) as string);
    });

    const setValue = useCallback(
        (value: T) => {
            _setValue(value);
            localStorage.setItem(localStorageKey, JSON.stringify(value));
        },
        [localStorageKey]
    );

    return [value, setValue];
};
