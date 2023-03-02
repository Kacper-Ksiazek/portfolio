/**
 * Detects whether dark theme is **system preferred** color theme
 */
export function darkThemeIsPreffered(): boolean {
    return window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
