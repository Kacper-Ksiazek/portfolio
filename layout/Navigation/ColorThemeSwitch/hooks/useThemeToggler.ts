// Tools
import { useState } from "react";
import { useThemeContext } from "./useThemeContext";
import { darkThemeIsPreffered } from "@/material/MuiThemeProvider/utils";
// Types
import type { ThemeMode } from "@/@types/MUI";

interface UseThemeTogglerResult {
    displayModal: boolean;
    toggleColorTheme: (val: ThemeMode) => void;
}

function determineWhetherDisplayModal({ choosen, current }: { current: ThemeMode; choosen: ThemeMode }): boolean {
    const themeModeHasChanged = current !== choosen;
    const systemPreferenceMatchChoosenTheme = choosen === "system_preferred" ? (darkThemeIsPreffered() ? current === "dark" : current === "light") : false;

    return themeModeHasChanged && !systemPreferenceMatchChoosenTheme;
}

export function useThemeToggler(closeMobileMenu: () => void): UseThemeTogglerResult {
    const context = useThemeContext();
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    function toggleColorTheme(choosenTheme: ThemeMode) {
        const displayModal: boolean = determineWhetherDisplayModal({ choosen: choosenTheme, current: context.theme });

        if (displayModal) setDisplayModal(true);

        setTimeout(() => {
            context.setTheme(choosenTheme);
            closeMobileMenu();
        }, 500);

        if (displayModal) setTimeout(() => setDisplayModal(false), 2000);
    }

    return { displayModal, toggleColorTheme };
}
