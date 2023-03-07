// Types
import type { Option } from "./options";
import type { Dispatch, SetStateAction } from "react";
import type { ThemeMode } from "@/material/MuiThemeProvider/@types";

export interface ColorThemeSwitchProps {
    viewport: "small" | "large";

    closeMobileMenu: () => void;
    setColorThemeMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

export interface DesktopColorThemeSwitchProps {
    activeTheme: Option;
    themeActiveBySystemPreference: Option["value"] | null;
    toggleColorTheme: ToggleColorTheme;

    menu: {
        unwrapStage: MenuUnwrapStage;
        close: () => void;
        open: () => void;
    };
}

export type ToggleColorTheme = (val: ThemeMode) => void;
export type MenuUnwrapStage = "HIDDEN" | "OPEN" | "CLOSE";
export type SetColorThemeMenuIsOpened = ColorThemeSwitchProps["setColorThemeMenuIsOpened"];
