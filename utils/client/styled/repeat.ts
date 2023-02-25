// Types
import type { Styles } from "@/@types/MUI";

/**
 * **Repeat styles for n nth-of-type elements**
 *
 * The first parameter specifies the amount of *nth-of-type* elements, the second
 * is a callback with one parameter - the element's index and returning styles
 * which will be further applied
 */
export function repeat(n: number, cb: (index: number) => Styles): Styles {
    const result: Record<string, Styles> = {};

    [...new Array(n)].forEach((_, index) => {
        result[`&:nth-of-type(${index + 1})`] = cb(index);
    });

    return result;
}
