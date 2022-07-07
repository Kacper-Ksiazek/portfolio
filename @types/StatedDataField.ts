import type { Dispatch, SetStateAction } from "react";

export interface StatedDataField<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
}
