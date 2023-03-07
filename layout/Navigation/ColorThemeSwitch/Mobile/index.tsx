// Tools
import { styled } from "@mui/material";
import { OPTIONS } from "../options";
// Types
import type { FunctionComponent } from "react";
import type { MobileColorThemeSwitchProps } from "../@types";
// Other components
import SingleThemeField from "./SingleThemeField";
// Styled components
const ThemesFieldsWrapper = styled("div")(({ theme }) => ({
    display: "grid",
    position: "relative",
    gridTemplateColumns: "1fr 1fr 1fr",
    maxWidth: "340px",
    width: "calc(100% - 20px)",
    gap: "16px",
    marginTop: "144px",
    marginBottom: "128px",
    "@media (max-height:800px)": {
        marginTop: "126px",
    },

    "@media (max-height:740px)": {
        marginTop: "96px",
    },

    "@media (max-height:660px)": {
        marginTop: "72px",
        marginBottom: "96px",
    },
}));

const MobileColorThemeSwitch: FunctionComponent<MobileColorThemeSwitchProps> = (props) => {
    return (
        <ThemesFieldsWrapper id="theme-switch">
            {OPTIONS.map((item) => {
                return (
                    <SingleThemeField
                        key={item.value}
                        isActive={props.activeTheme.value === item.value} //
                        icon={item.icon}
                        label={item.label}
                        onClick={() => props.toggleColorTheme(item.value)}
                        activeBySystemPreference={item.value === props.themeActiveBySystemPreference}
                    />
                );
            })}
        </ThemesFieldsWrapper>
    );
};

export default MobileColorThemeSwitch;
