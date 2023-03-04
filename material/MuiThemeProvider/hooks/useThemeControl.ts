// Tools
import { useState, useEffect } from "react";
import { isDarkThemePreferred } from "../utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { I_MUIContext, ThemeToBeUsed, ThemeMode } from "../@types";

const APPLY_LOCAL_STORAGE_THEME_TIMEOUT: TimeInMS = 500;

export function useThemeControl(): I_MUIContext {
    const [themeToBeUsed, setThemeToBeUsed] = useState<ThemeToBeUsed>("light");
    const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<ThemeMode>("color-theme", "system_preferred");

    useEffect(() => {
        let timeout: null | ReturnType<typeof setTimeout> = null;

        if (localStorageTheme === "system_preferred") {
            timeout = setTimeout(() => setThemeToBeUsed(isDarkThemePreferred() ? "dark" : "light"), APPLY_LOCAL_STORAGE_THEME_TIMEOUT);
        } else {
            setThemeToBeUsed(localStorageTheme);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [localStorageTheme]);

    return {
        setTheme: setLocalStorageTheme,
        theme: localStorageTheme,
        themeToBeUsed,
    };
}
