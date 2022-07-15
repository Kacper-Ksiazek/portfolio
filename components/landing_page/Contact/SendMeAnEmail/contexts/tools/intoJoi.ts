// Tools
import joi from "joi";
// Types
import { Restriction } from "@/@types/Restriction";

/**
 * Transforms object matching `Restriction` interface into `joi` schema reflecting received **min** and **max**,
 *
 * Returns:
 * ```ts
 * joi.string().min(min).max(max).required()
 * ```
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ max, min }: Restriction) => joi.string().min(min).max(max).required();
