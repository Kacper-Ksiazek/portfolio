// Tools
import joi from "joi";
// Types
import { Restriction } from "@/@types/Restriction";

/**
 * Params:
 * - `First parameter` is a restrictions object containing properties  **min** and **max**,
 * - `Second parameter` determines whether the field is required or not
 *
 * Transforms object matching `Restriction` interface into `joi` schema reflecting received **min** and **max**,
 *
 * Returns:
 * ```ts
 * joi.string().min(min).max(max).required()
 * ```
 */
// eslint-disable-next-line import/no-anonymous-default-export
export const createJoiObject = ({ max, min }: Restriction, required: boolean = true) => {
    const result = joi.string().min(min).max(max);
    return required ? result.required() : result;
};
