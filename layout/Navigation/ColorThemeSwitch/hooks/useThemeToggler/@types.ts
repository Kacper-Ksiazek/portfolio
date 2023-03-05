// Types
import type { ThemeMode } from "@/@types/MUI";
import type { ColorThemeSwitchProps } from "../../@types";

export type { ThemeMode };

export type MenuUnwrapStage = "HIDDEN" | "OPEN" | "CLOSE";

export type UseThemeTogglerProps = ColorThemeSwitchProps;

export type SetColorThemeMenuIsOpened = ColorThemeSwitchProps["setColorThemeMenuIsOpened"];

export interface UseThemeTogglerResult {
    displayModal: boolean;
    menuUnwrapStage: MenuUnwrapStage;

    openMenu: () => void;
    closeMenu: () => void;
    toggleColorTheme: (val: ThemeMode) => void;
}
