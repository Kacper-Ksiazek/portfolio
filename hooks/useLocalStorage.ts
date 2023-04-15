// Tools
import { useState, useEffect, useRef } from "react";
// Types
import type { Dispatch, SetStateAction } from "react";

type UseLocalStorageResult<T> = [
    T, //
    Dispatch<SetStateAction<T>>,
    boolean
];

type Validator = (valueFromLocalStorage: unknown) => boolean;

interface UseLocalStorageOptions {
    /** Assure that value received from local storage is not obsolete */
    validate?: Validator;
    /** Use default value over updated one */
    stickWithOriginalValue?: boolean;
}

/** Handles validate received from UseLocalStorageOptions */
function hasValidatorBeenProvided(value: unknown): value is Validator {
    return <boolean>(value && typeof value === "function");
}

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T, options?: UseLocalStorageOptions): UseLocalStorageResult<T> => {
    const [value, setValue] = useState<T>(initialValue);
    const [localStorageHasBeenLoaded, setLocalStorageHasBeenReached] = useState<boolean>(false);

    const originalValue = useRef<T | null>(null);

    useEffect(() => {
        if (localStorageHasBeenLoaded) return;
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (localStorage) {
            const valueFromLocalStorage = localStorage.getItem(localStorageKey);
            if (valueFromLocalStorage !== null && valueFromLocalStorage !== undefined) {
                const parsed: T = JSON.parse(valueFromLocalStorage);
                const validatorHasBeenProvided = hasValidatorBeenProvided(options?.validate);

                if (validatorHasBeenProvided && (options as any).validate(parsed)) {
                    setValue(parsed);
                    originalValue.current = parsed;
                } else {
                    // if (validatorHasBeenProvided) localStorage.removeItem(localStorageKey);
                    originalValue.current = initialValue;
                }
            }

            setLocalStorageHasBeenReached(true);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [initialValue, localStorageHasBeenLoaded, localStorageKey, options]);

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
        options && options.stickWithOriginalValue ? (originalValue.current as T) : value, //
        setValue,
        localStorageHasBeenLoaded,
    ];
};
