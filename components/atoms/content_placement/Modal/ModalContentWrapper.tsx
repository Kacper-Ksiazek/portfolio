// Tools
import { fadeSimple } from "@/components/keyframes/intro";
import { styled } from "@mui/material";

export default styled("div")(({ theme }) => ({
    position: "relative",
    background: theme.palette.background.lightSectionBackground,
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
    h3: {
        margin: "0 0 8px 0",
    },
    p: {
        margin: "0 0 0px 0",
    },
    button: {
        height: "36px",
        padding: "0 24px",
    },
}));
