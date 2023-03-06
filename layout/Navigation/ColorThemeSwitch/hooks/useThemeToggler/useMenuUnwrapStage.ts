// Tools
import { useState, useEffect } from "react";
// Types
import type { MenuUnwrapStage, SetColorThemeMenuIsOpened } from "./@types";

interface UseMenuUnwrapStageResult {
    menuUnwrapStage: MenuUnwrapStage;
    closeMenu: (options?: { immediately: boolean }) => void;
    openMenu: () => void;
}

export function useMenuUnwrapStage(setColorThemeMenuIsOpened: SetColorThemeMenuIsOpened): UseMenuUnwrapStageResult {
    const [menuUnwrapStage, setMenuUnwrapStage] = useState<MenuUnwrapStage>("HIDDEN");

    useEffect(() => {
        setColorThemeMenuIsOpened(!(menuUnwrapStage === "HIDDEN"));
    }, [menuUnwrapStage, setColorThemeMenuIsOpened]);

    const closeMenu: UseMenuUnwrapStageResult["closeMenu"] = function (options) {
        if (options && options.immediately) return setMenuUnwrapStage("HIDDEN");

        setMenuUnwrapStage("CLOSE");
        setTimeout(() => setMenuUnwrapStage("HIDDEN"), 1500);
    };

    function openMenu() {
        if (menuUnwrapStage !== "HIDDEN") return;
        setMenuUnwrapStage("OPEN");
    }

    return { closeMenu, openMenu, menuUnwrapStage };
}
