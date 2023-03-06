// Tools
import { useState, useEffect } from "react";
import { isDarkThemePreferred } from "../utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { I_MUIContext, ThemeToBeUsed, ThemeMode } from "../@types";

export function useThemeControl(): I_MUIContext {
    const [themeToBeUsed, setThemeToBeUsed] = useState<ThemeToBeUsed>("light");
    const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<ThemeMode>("color-theme", "system_preferred");

    useEffect(() => {
        if (localStorageTheme === "system_preferred") {
            setThemeToBeUsed(isDarkThemePreferred() ? "dark" : "light");
        } else {
            setThemeToBeUsed(localStorageTheme);
        }
    }, [localStorageTheme]);

    return {
        setTheme: setLocalStorageTheme,
        theme: localStorageTheme,
        themeToBeUsed,
    };
}
