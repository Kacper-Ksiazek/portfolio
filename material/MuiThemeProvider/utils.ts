/**
 * Detects whether dark theme is **system preferred** color theme
 */
export function isDarkThemePreferred(): boolean {
    return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
