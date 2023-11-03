import { MAXIMUM_LENGTH } from "./_constants";
import type { TextExpandAnimation } from "../@types";

export function shortenText(text: string): string {
    let result: string = text.slice(0, MAXIMUM_LENGTH);
    if (text.length > MAXIMUM_LENGTH) result += "...";

    return result;
}

export function getNewTextValue(animation: TextExpandAnimation, originalText: string): string {
    return animation === "expand" ? originalText : shortenText(originalText);
}
