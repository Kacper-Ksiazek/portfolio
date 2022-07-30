// Tools
import { styled } from "@mui/system";
import { intro, loadingMessageGleam, outro } from "./keyframes";

const _RectangleBase = styled("span")(({ theme }) => ({
    position: "fixed",
    top: 0,
    right: 0,
    width: "100vw",
    height: "100vh",
}));

export const RectangleOne = styled(_RectangleBase)(({ theme }) => ({
    zIndex: 100,
    background: theme.palette.primary.main,
    animation: `${intro} .2s linear both`,
    "&.outro": {
        animation: `${outro} .2s .15s linear forwards`,
    },
}));
export const RectangleTwo = styled(_RectangleBase)(({ theme }) => ({
    zIndex: 101,
    background: theme.palette.background.paper,
    animation: `${intro} .2s .15s linear both`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    span: {
        position: "relative",
        zIndex: 1,
        fontWeight: 700,
        letterSpacing: "2px",
        fontSize: "32px",
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "Montserrat Alternates",
        userSelect: "none",
        animation: `${loadingMessageGleam} .5s infinite alternate`,
    },
    "&.outro": {
        animation: `${outro} .2s linear forwards`,
    },
}));
