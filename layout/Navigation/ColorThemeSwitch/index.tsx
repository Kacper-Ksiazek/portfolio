// Tools
import dynamic from "next/dynamic";
import { OPTIONS } from "./options";
import { useThemeToggler, useThemeContext } from "./hooks";
// Types
import type { Option } from "./options";
import type { FunctionComponent } from "react";
import type { ThemeMode } from "@/material/MuiThemeProvider/@types";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Other components
import ThemeOption from "./ThemeOption";
const Modal = dynamic(() => import("./Modal"), { ssr: false });
// Styled components
import { Wrapper, Menu, ExitButton } from "./styled_components";

const ColorThemeSwitch: FunctionComponent<{ closeMobileMenu: () => void }> = (props) => {
    const context = useThemeContext();

    const { displayModal, toggleColorTheme } = useThemeToggler(props.closeMobileMenu);
    const activeTheme: Option = OPTIONS.find((el) => el.value === context.theme) as Option;

    const isActiveBySystemPreference = (val: ThemeMode): boolean => val === context.themeToBeUsed;

    return (
        <>
            <Wrapper
                id="theme-switch" //
                className={"unfolded"}
            >
                <ThemeOption
                    id="theme-switch"
                    icon={activeTheme.icon} //
                    label={activeTheme.label}
                    buttonClassName={`active-theme  ${"unfolded"}`}
                />
                <Menu>
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

                    <ExitButton color="error">
                        <Close />
                    </ExitButton>
                </Menu>
            </Wrapper>

            {displayModal && <Modal />}
        </>
    );
};

export default ColorThemeSwitch;
