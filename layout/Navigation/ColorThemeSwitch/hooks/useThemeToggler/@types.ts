// Types
import type { ThemeMode } from "@/@types/MUI";
import type { ColorThemeSwitchProps, MenuUnwrapStage } from "../../@types";

export type { ThemeMode };

export type UseThemeTogglerProps = Omit<ColorThemeSwitchProps, "viewport">;

export interface UseThemeTogglerResult {
    displayModal: boolean;
    menuUnwrapStage: MenuUnwrapStage;

    openMenu: () => void;
    closeMenu: () => void;
    toggleColorTheme: (val: ThemeMode) => void;
}
