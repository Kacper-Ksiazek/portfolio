// Tools
import dynamic from "next/dynamic";
import { OPTIONS } from "./options";
import { useThemeToggler, useThemeContext } from "./hooks";
import { isDarkThemePreferred } from "@/material/MuiThemeProvider/utils";
// Types
import type { Option } from "./options";
import type { FunctionComponent } from "react";
import type { ColorThemeSwitchProps } from "./@types";
import type { ThemeMode } from "@/material/MuiThemeProvider/@types";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Other components
import ThemeOption from "./ThemeOption";
const Modal = dynamic(() => import("./Modal"), { ssr: false });
// Styled components
import { Wrapper, Menu, ExitButton } from "./styled_components";

const ColorThemeSwitch: FunctionComponent<ColorThemeSwitchProps> = (props) => {
    const context = useThemeContext();

    const { displayModal, toggleColorTheme, openMenu, menuUnwrapStage, closeMenu } = useThemeToggler(props);
    const activeTheme: Option = OPTIONS.find((el) => el.value === context.theme) as Option;

    function isActiveBySystemPreference(val: ThemeMode): boolean {
        const { themeToBeUsed } = context;
        const systemPreferredTheme = isDarkThemePreferred() ? "dark" : "light";

        if (val === themeToBeUsed) return true;
        else if (val === "system_preferred") {
            return (
                (themeToBeUsed === "dark" && systemPreferredTheme === "dark") || //
                (themeToBeUsed === "light" && systemPreferredTheme === "light")
            );
        }
        return false;
    }

    return (
        <>
            <Wrapper
                id="theme-switch" //
            >
                <ThemeOption
                    icon={activeTheme.icon} //
                    label={activeTheme.label}
                    buttonClassName={`active-theme  ${menuUnwrapStage !== "HIDDEN" ? "unfolded" : ""}`}
                    onClick={openMenu}
                />
                {(() => {
                    if (menuUnwrapStage !== "HIDDEN") {
                        return (
                            <Menu className={menuUnwrapStage === "CLOSE" ? "outro" : "intro"} key={menuUnwrapStage}>
                                {OPTIONS.filter((el) => el.value !== activeTheme.value).map((item, index) => {
                                    return (
                                        <ThemeOption
                                            label={item.label} //
                                            icon={item.icon}
                                            key={index}
                                            isActiveBySystemPreference={isActiveBySystemPreference(item.value)}
                                            menuItemIndex={index}
                                            onClick={() => toggleColorTheme(item.value)}
                                        />
                                    );
                                })}

                                <div className="exit-button">
                                    <ExitButton color="error" onClick={closeMenu}>
                                        <Close />
                                    </ExitButton>
                                </div>
                            </Menu>
                        );
                    }
                })()}
            </Wrapper>

            {displayModal && <Modal />}
        </>
    );
};

export default ColorThemeSwitch;
