// Types
import type { FunctionComponent, Dispatch, SetStateAction } from "react";

export interface ColorThemeSwitchProps {
    closeMobileMenu: () => void;
    setColorThemeMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}
