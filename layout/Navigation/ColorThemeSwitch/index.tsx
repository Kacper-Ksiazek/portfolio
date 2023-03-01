// Tools
import dynamic from "next/dynamic";
import { OPTIONS } from "./options";
import { useState, useContext } from "react";
import { MUIContext } from "@/material/MuiThemeProvider";
// Types
import type { Option } from "./options";
import type { FunctionComponent } from "react";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Other components
import ThemeOption from "./ThemeOption";
const Modal = dynamic(() => import("./Modal"), { ssr: false });
// Styled components
import { Wrapper, Menu, ExitButton } from "./styled_components";

const ColorThemeSwitch: FunctionComponent<{ closeMobileMenu: () => void }> = (props) => {
    const context = useContext(MUIContext);
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    const isDark: boolean = context.theme === "dark";

    function toggleColorTheme() {
        setDisplayModal(true);

        setTimeout(() => {
            context.setTheme(isDark ? "light" : "dark");
            props.closeMobileMenu();
        }, 500);

        setTimeout(() => {
            setDisplayModal(false);
        }, 2000);
    }

    const activeTheme: Option = OPTIONS.find((el) => el.value === context.theme) as Option;

    return (
        <>
            <Wrapper
                id="theme-switch" //
                className={[
                    context.theme, //
                    "unfolded",
                ].join(" ")}
                onClick={toggleColorTheme}
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
                                menuItemIndex={index}
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
