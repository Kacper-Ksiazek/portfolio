// Tools
import { useState } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useThemeContext } from "../useThemeContext";
import { useMenuUnwrapStage } from "./useMenuUnwrapStage";
import { determineWhetherDisplayModal, getLabel } from "./utils";
// Types
import type { UseThemeTogglerProps, UseThemeTogglerResult, ThemeMode } from "./@types";

export function useThemeToggler(params: UseThemeTogglerProps): UseThemeTogglerResult {
    const context = useThemeContext();
    const { displaySnackbar } = useSnackbar();
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    const { closeMenu, menuUnwrapStage, openMenu } = useMenuUnwrapStage(params.setColorThemeMenuIsOpened);

    function setTheme(choosenTheme: ThemeMode) {
        const themeHasChangedSignificantly = determineWhetherDisplayModal({ choosen: choosenTheme, current: context.theme });
        if (themeHasChangedSignificantly) params.closeMobileMenu({ skipAnimation: true });

        context.setTheme(choosenTheme);
    }

    function toggleColorTheme(choosenTheme: ThemeMode) {
        const displayModal: boolean = determineWhetherDisplayModal({ choosen: choosenTheme, current: context.theme });

        if (displayModal) {
            setDisplayModal(true);

            setTimeout(() => {
                closeMenu({ immediately: true });
                setTheme(choosenTheme);
            }, 500);

            setTimeout(() => {
                setDisplayModal(false);
                displaySnackbar({
                    msg: `${getLabel(choosenTheme)} theme has been applied`,
                    severity: "success",
                });
            }, 1800);
        } else {
            setTheme(choosenTheme);
        }
    }

    return {
        displayModal, //
        menuUnwrapStage,
        toggleColorTheme,
        openMenu,
        closeMenu,
    };
}
