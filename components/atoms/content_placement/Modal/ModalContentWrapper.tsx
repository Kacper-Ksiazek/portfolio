// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./css_references";
import { fadeSimple } from "@/components/keyframes/intro";

export default styled("div")(({ theme }) => ({
    position: "relative",
    background: theme.palette.mode === "light" ? theme.palette.background.darkSectionBackground : theme.palette.background.lightSectionBackground,
    color: "#fff",
    width: "calc(100vw - 32px)",
    maxWidth: "480px",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    padding: "24px 32px",
    boxSizing: "border-box",
    borderRadius: "3px",
    outline: "none !important",
    cursor: "default",
    fontSize: "18px",
    animation: `${fadeSimple} .2s .1s both`,
    [SELECTORS.HEADER]: {
        fontSize: "24px",
        margin: "0 0 24px 0",
    },
    p: {
        margin: "0",
    },
    [SELECTORS.BUTTON]: {
        height: "36px",
        padding: "0 24px",
    },
}));
