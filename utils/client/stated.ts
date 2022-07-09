// Types
import type { Dispatch, SetStateAction } from "react";
import type { StatedDataField } from "@/@types/StatedDataField";

/**
 * Merges both `value` and `setValue` from `React.useState` in one object, that can be subsequently easily passed further down in DOM
 */
const stated = <T>(value: T, setValue: Dispatch<SetStateAction<T>>): StatedDataField<T> => {
    return { value, setValue };
};

export default stated;
