/**
 * Based on received arguments displays either expeced
 * string or corresponding to its length amount of asterisk characters.
 * ```ts
 * hideURL({text: "some private information", hide: true})
 * ```
 * would result
 * ```ts
 * "************************"
 * ```
 */
export const hiddenURL = (params: { text: string; hide: boolean }): string => {
    return params.hide ? _hide(params.text) : params.text;
};

const _hide = (textToHide: string): string =>
    textToHide
        .split("")
        .map(() => "*")
        .join("");
