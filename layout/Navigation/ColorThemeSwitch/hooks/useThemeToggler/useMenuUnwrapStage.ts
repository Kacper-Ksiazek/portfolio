// Tools
import { useState, useEffect } from "react";
// Types
import type { MenuUnwrapStage, SetColorThemeMenuIsOpened } from "./@types";

interface UseMenuUnwrapStageResult {
    menuUnwrapStage: MenuUnwrapStage;
    closeMenu: () => void;
    openMenu: () => void;
}

export function useMenuUnwrapStage(setColorThemeMenuIsOpened: SetColorThemeMenuIsOpened): UseMenuUnwrapStageResult {
    const [menuUnwrapStage, setMenuUnwrapStage] = useState<MenuUnwrapStage>("HIDDEN");

    useEffect(() => {
        setColorThemeMenuIsOpened(!(menuUnwrapStage === "HIDDEN"));
    }, [menuUnwrapStage, setColorThemeMenuIsOpened]);

    function closeMenu() {
        setMenuUnwrapStage("CLOSE");
        setTimeout(() => setMenuUnwrapStage("HIDDEN"), 1500);
    }

    function openMenu() {
        if (menuUnwrapStage !== "HIDDEN") return;
        setMenuUnwrapStage("OPEN");
    }

    return { closeMenu, openMenu, menuUnwrapStage };
}
