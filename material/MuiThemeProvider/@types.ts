import type { ThemeMode } from "@/@types/MUI";
import type { SetStateAction, Dispatch } from "react";

export type { ThemeMode };
export type ThemeToBeUsed = Exclude<ThemeMode, "system_preferred">;

export interface I_MUIContext {
    theme: ThemeMode;
    themeToBeUsed: ThemeToBeUsed;
    setTheme: Dispatch<SetStateAction<ThemeMode>>;
}
