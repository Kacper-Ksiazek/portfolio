// Types
import type { Styles } from "@/@types/MUI";

export function repeatForEachSelector(selectors: string[], cb: (index: number) => Styles) {
    const result: Styles = {};

    selectors.forEach((selector: string, index: number) => {
        (result as any)[selector] = cb(index);
    });
    return result;
}
