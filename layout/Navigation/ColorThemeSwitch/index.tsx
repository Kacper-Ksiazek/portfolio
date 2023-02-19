// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/system";
import { useState, useContext } from "react";
import { MUIContext } from "@/material/MuiThemeProvider";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
// Types
import type { FunctionComponent } from "react";
// Other components
const Modal = dynamic(() => import("./Modal"), { ssr: false });
// Material UI Icons
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
// Styled components
const ColorThemeSwitchBase = styled("button")(({ theme }) => ({
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "10px",
    height: "32px",
    width: "54px",
    marginLeft: "24px",
    background: "transparent",
    position: "relative",
    display: "flex",
    cursor: "pointer",
    padding: "0px",
    boxSizing: "border-box",
    justifyContent: "flex-start",
    "&.dark": {
        justifyContent: "flex-end",
    },
    "@media (max-width:1000px)": {
        width: "110px",
        height: "48px",
        position: "absolute",
        bottom: "100px",
        left: "calc(50% - 55px)",
        margin: "0",
        "span#choice-indicator": {
            width: "72px",
            svg: {
                fontSize: "2rem",
            },
        },
    },
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

const ColorThemeSwitch: FunctionComponent<{ closeMobileMenu: () => void }> = (props) => {
    const context = useContext(MUIContext);
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    function toggleColorTheme() {
        setDisplayModal(true);

        setTimeout(() => {
            context.setTheme(context.theme === "dark" ? "light" : "dark");
            props.closeMobileMenu();
        }, 500);

        setTimeout(() => {
            setDisplayModal(false);
        }, 3000);
    }

    return (
        <>
            <ColorThemeSwitchBase
                id="theme-switch" //
                onClick={toggleColorTheme}
                className={context.theme}
            >
                <ChoiceIndicator id="choice-indicator">
                    {/*  */}
                    {context.theme === "dark" ? <DarkMode /> : <LightMode />}
                </ChoiceIndicator>
            </ColorThemeSwitchBase>

            {displayModal && <Modal />}
        </>
    );
};

export default ColorThemeSwitch;
