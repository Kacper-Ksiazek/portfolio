// Tools
import { useState, useEffect, useRef } from "react";
// Types
import type { Dispatch, SetStateAction } from "react";

type UseLocalStorageResult<T> = [
    T, //
    Dispatch<SetStateAction<T>>,
    boolean
];

export type LocalStorageValidator<T> = (valueFromLocalStorage: unknown) => valueFromLocalStorage is T;

interface UseLocalStorageOptions<T> {
    /** Assure that value received from local storage is not obsolete */
    validator?: LocalStorageValidator<T>;
    /** Use default value over updated one */
    stickWithOriginalValue?: boolean;
}

/** Handles validate received from UseLocalStorageOptions */
function hasLocalStorageValidatorBeenProvided(value: unknown): boolean {
    return <boolean>(value && typeof value === "function");
}

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T, options?: UseLocalStorageOptions<T>): UseLocalStorageResult<T> => {
    const [value, setValue] = useState<T>(initialValue);
    const [localStorageHasBeenLoaded, setLocalStorageHasBeenReached] = useState<boolean>(false);

    const originalValue = useRef<T | null>(null);

    // Load and optionally validate existing value from local storage
    useEffect(() => {
        if (localStorageHasBeenLoaded) return;

        // Prevent looking for local storage at the server side
        if (localStorage) {
            const valueFromLocalStorage = localStorage.getItem(localStorageKey);

            // If there is a value in local storage, parse it and set it as a value
            if (valueFromLocalStorage !== null && valueFromLocalStorage !== undefined) {
                const parsed: T = JSON.parse(valueFromLocalStorage);
                const validatorHasBeenProvided: boolean = hasLocalStorageValidatorBeenProvided(options?.validator);

                if (validatorHasBeenProvided) {
                    const validationResultIsPositive: boolean = (options as UseLocalStorageOptions<T>).validator?.(parsed) ?? false;

                    // If validation has succeeded, set parsed value as a value
                    if (validationResultIsPositive) {
                        setValue(parsed);
                        originalValue.current = parsed;
                    }
                    // If validation has failed, set initial value as a value
                    else {
                        originalValue.current = initialValue;
                    }
                }
                // Otherwise if there was no validator provided, set parsed value as a value
                else {
                    setValue(parsed);
                    originalValue.current = parsed;
                }
            }

            // Mark that local storage had been reached and value has been set
            setLocalStorageHasBeenReached(true);
        }
    }, [initialValue, localStorageHasBeenLoaded, localStorageKey, options]);

    // Update local storage with new value
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        // Prevent looking for local storage at the server side
        if (localStorage) {
            // If value is the same as initial value, set timeout to prevent unnecessary updates
            if (JSON.stringify(value) === JSON.stringify(initialValue)) {
                timeout = setTimeout(() => {
                    localStorage.setItem(localStorageKey, JSON.stringify(value));
                }, 3000);
            }
            // Otherwise set value immediately
            else {
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
