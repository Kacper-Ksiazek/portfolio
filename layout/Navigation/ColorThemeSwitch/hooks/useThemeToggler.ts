// Tools
import { useState } from "react";
import { useThemeContext } from "./useThemeContext";
// Types
import type { ThemeMode } from "@/@types/MUI";

interface UseThemeTogglerResult {
    displayModal: boolean;
    toggleColorTheme: (val: ThemeMode) => void;
}

export function useThemeToggler(closeMobileMenu: () => void): UseThemeTogglerResult {
    const context = useThemeContext();
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    function toggleColorTheme(val: ThemeMode) {
        setDisplayModal(true);

        setTimeout(() => {
            context.setTheme(val);
            closeMobileMenu();
        }, 500);

        setTimeout(() => {
            setDisplayModal(false);
        }, 2000);
    }

    return { displayModal, toggleColorTheme };
}
