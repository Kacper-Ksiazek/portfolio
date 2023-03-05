// Tools
import { useState } from "react";
import { useThemeContext } from "./useThemeContext";
import { isDarkThemePreferred } from "@/material/MuiThemeProvider/utils";
// Types
import type { ThemeMode } from "@/@types/MUI";

interface UseThemeTogglerResult {
    displayModal: boolean;
    menuUnwrapStage: MenuUnwrapStage;

    openMenu: () => void;
    closeMenu: () => void;
    toggleColorTheme: (val: ThemeMode) => void;
}
type MenuUnwrapStage = "HIDDEN" | "OPEN" | "CLOSE";

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
    const [menuUnwrapStage, setMenuUnwrapStage] = useState<MenuUnwrapStage>("HIDDEN");

    function setTheme(theme: ThemeMode) {
        context.setTheme(theme);
        closeMobileMenu();
    }

    function toggleColorTheme(choosenTheme: ThemeMode) {
        const displayModal: boolean = determineWhetherDisplayModal({ choosen: choosenTheme, current: context.theme });

        if (displayModal) {
            setDisplayModal(true);
            setTimeout(() => {
                setMenuUnwrapStage("HIDDEN");
                setTheme(choosenTheme);
            }, 500);
            setTimeout(() => setDisplayModal(false), 2000);
        } else {
            setTheme(choosenTheme);
        }
    }

    function closeMenu() {
        setMenuUnwrapStage("CLOSE");
        setTimeout(() => setMenuUnwrapStage("HIDDEN"), 1500);
    }

    function openMenu() {
        if (menuUnwrapStage !== "HIDDEN") return;
        setMenuUnwrapStage("OPEN");
    }

    return {
        displayModal, //
        menuUnwrapStage,
        toggleColorTheme,
        openMenu,
        closeMenu,
    };
}
