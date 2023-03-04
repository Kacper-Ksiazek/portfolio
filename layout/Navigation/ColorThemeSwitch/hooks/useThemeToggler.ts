// Tools
import { useState } from "react";
import { useThemeContext } from "./useThemeContext";
import { isDarkThemePreferred } from "@/material/MuiThemeProvider/utils";
// Types
import type { ThemeMode } from "@/@types/MUI";

interface UseThemeTogglerResult {
    displayModal: boolean;
    toggleColorTheme: (val: ThemeMode) => void;
}

function determineWhetherDisplayModal({ choosen, current }: { current: ThemeMode; choosen: ThemeMode }): boolean {
    const darkThemeIsPreferred = isDarkThemePreferred();

    switch (choosen) {
        case "system_preferred":
            return darkThemeIsPreferred ? current !== "dark" : current !== "light";
        case "dark":
            return !(darkThemeIsPreferred && current === "system_preferred");
        case "light":
            return !(!darkThemeIsPreferred && current === "system_preferred");
        default:
            new Error(`Unexpected type of theme **${choosen as never}** has been provided to the function **determineWhetherDisplayModal** `);
            return false;
    }
}

export function useThemeToggler(closeMobileMenu: () => void): UseThemeTogglerResult {
    const context = useThemeContext();
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    function setTheme(theme: ThemeMode) {
        context.setTheme(theme);
        closeMobileMenu();
    }

    function toggleColorTheme(choosenTheme: ThemeMode) {
        const displayModal: boolean = determineWhetherDisplayModal({ choosen: choosenTheme, current: context.theme });

        if (displayModal) {
            setDisplayModal(true);
            setTimeout(() => setTheme(choosenTheme), 500);
            setTimeout(() => setDisplayModal(false), 2000);
        } else {
            setTheme(choosenTheme);
        }
    }

    return { displayModal, toggleColorTheme };
}
