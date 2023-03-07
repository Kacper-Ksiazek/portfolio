// Tools
import { OPTIONS } from "../options";
// Types
import type { FunctionComponent } from "react";
import type { DesktopColorThemeSwitchProps } from "../@types";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Other components
import ThemeOption from "./ThemeOption";
// Styled components
import { Wrapper, Menu, ExitButton } from "./styled_components";

const DesktopColorThemeSwitch: FunctionComponent<DesktopColorThemeSwitchProps> = (props) => {
    const { activeTheme, menu } = props;
    return (
        <>
            <Wrapper
                id="theme-switch" //
            >
                <ThemeOption
                    icon={activeTheme.icon} //
                    label={activeTheme.label}
                    buttonClassName={`active-theme  ${menu.unwrapStage !== "HIDDEN" ? "unfolded" : ""}`}
                    onClick={props.menu.open}
                />
                {(() => {
                    if (menu.unwrapStage !== "HIDDEN") {
                        return (
                            <Menu className={menu.unwrapStage === "CLOSE" ? "outro" : "intro"} key={menu.unwrapStage}>
                                {OPTIONS.filter((el) => el.value !== activeTheme.value).map((item, index) => {
                                    return (
                                        <ThemeOption
                                            label={item.label} //
                                            icon={item.icon}
                                            key={index}
                                            isActiveBySystemPreference={item.value === props.themeActiveBySystemPreference}
                                            menuItemIndex={index}
                                            onClick={() => props.toggleColorTheme(item.value)}
                                        />
                                    );
                                })}

                                <div className="exit-button">
                                    <ExitButton color="error" onClick={props.menu.close}>
                                        <Close />
                                    </ExitButton>
                                </div>
                            </Menu>
                        );
                    }
                })()}
            </Wrapper>
        </>
    );
};

export default DesktopColorThemeSwitch;
