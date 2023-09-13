// Tools
import { useState } from "react";
//
import type { Dispatch, SetStateAction } from "react";

interface UseDelayedStateResult<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    isChanging: boolean;
}
/** Simple useState hook, with one major difference- the value is changed after given timeout */

export function useDelayedState<T>(defaultValue: T, DELAY: TimeInMS): UseDelayedStateResult<T> {
    const [value, _setValue] = useState<T>(defaultValue);
    const [isChanging, setIsChaning] = useState<boolean>(false);

    function setValue(val: T | ((prev: T) => T)) {
        if (isChanging) return;

        setIsChaning(true);
        setTimeout(() => {
            _setValue(val);
            setIsChaning(false);
        }, DELAY);
    }

    return { value, setValue, isChanging };
}
