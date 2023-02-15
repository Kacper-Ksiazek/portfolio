// Tools
import theme from "@/material";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
// Styled components
const DarkThemeButtonBase = styled("button")(({ theme }) => ({
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "10px",
    height: "32px",
    width: "54px",
    marginLeft: "24px",
    background: "transparent",
    position: "relative",
    display: "flex",
    cursor: "pointer",
    justifyContent: "flex-start",
    padding: "0px",
    boxSizing: "border-box",
}));

const ChoiceIndicator = styled("span")(({ theme }) => ({
    borderRadius: "10px",
    height: "100%",
    width: "34px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${theme.palette.background.default}`,
    background: "#000",
    boxSizing: "border-box",
    svg: {
        color: theme.palette.background.default,
        fontSize: "1.4rem",
    },
}));

interface DarkThemeButtonProps {
    //
}

const DarkThemeButton: FunctionComponent<DarkThemeButtonProps> = (props) => {
    return (
        <DarkThemeButtonBase id="theme-switch">
            <ChoiceIndicator id="choice-indicator">
                {/* <DarkMode /> */}
                <LightMode />
            </ChoiceIndicator>
        </DarkThemeButtonBase>
    );
};

export default DarkThemeButton;
