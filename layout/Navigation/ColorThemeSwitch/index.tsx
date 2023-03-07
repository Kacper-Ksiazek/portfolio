// Tools
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { OPTIONS } from "./options";
import { useThemeToggler, useThemeContext } from "./hooks";
import { isDarkThemePreferred } from "@/material/MuiThemeProvider/utils";
// Types
import type { Option } from "./options";
import type { ColorThemeSwitchProps } from "./@types";
import type { FunctionComponent } from "react";
// Other components
import Modal from "./Modal";
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

const ColorThemeSwitch: FunctionComponent<ColorThemeSwitchProps> = (props) => {
    const context = useThemeContext();

    const { displayModal, toggleColorTheme, openMenu, menuUnwrapStage, closeMenu } = useThemeToggler({
        closeMobileMenu: props.closeMobileMenu,
        setColorThemeMenuIsOpened: props.setColorThemeMenuIsOpened,
    });

    const activeTheme: Option = OPTIONS.find((el) => el.value === context.theme) as Option;
    const themeActiveBySystemPreference = useMemo<Option["value"] | null>(() => {
        const { themeToBeUsed, theme } = context;
        const systemPreferredTheme = isDarkThemePreferred() ? "dark" : "light";

        if (theme === "system_preferred" && themeToBeUsed === systemPreferredTheme) return systemPreferredTheme;
        else if (theme === systemPreferredTheme) return "system_preferred";
        return null;
    }, [context]);

    return (
        <>
            <Desktop
                activeTheme={activeTheme} //
                menu={{
                    close: closeMenu,
                    open: openMenu,
                    unwrapStage: menuUnwrapStage,
                }}
                themeActiveBySystemPreference={themeActiveBySystemPreference}
                toggleColorTheme={toggleColorTheme}
            />

            {displayModal && <Modal />}
        </>
    );
};

export default ColorThemeSwitch;
