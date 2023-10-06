// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "../css_references";
import { fadeFromTop, fadeSimple } from "@/components/keyframes/intro";
// Styled components
export default styled("section", {
    shouldForwardProp: (prop: string) => !["reversedSkew"].includes(prop),
})<{ reversedSkew?: boolean }>(({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    userSelect: "none",
    "&::before": {
        content: "''",
        position: "absolute",
        top: "80px",
        left: 0,
        width: "100%",
        height: "calc(100% - 80px)",
        background: `url(images/world_map/${theme.palette.mode}.png) no-repeat center center / contain`,
        zIndex: -1,
        // opacity: theme.palette.mode === "light" ? 0.3 : 0.075,
        animation: `${fadeSimple} 1s .6s linear both`,
    },
    [SELECTORS.HTTP_STATUS_CODE_TITLE]: {
        margin: "10px 0 0 0",
        fontSize: "42px",
        fontWeight: 900,
        textTransform: "uppercase",
        animation: `${fadeSimple} .3s .6s linear both`,
    },
    [SELECTORS.EXPLANATION]: {
        margin: 0,
        fontSize: "18px",
        animation: `${fadeSimple} .3s .7s linear both`,
        maxWidth: "640px",
        textAlign: "center",
        opacity: 0.7,
    },
    [SELECTORS.AVAILABLE_RESOURCES_SUBHEADER]: {
        fontSize: "18px",
        margin: "48px 0 8px 0",
        animation: `${fadeSimple} .3s 1.4s linear both`,
    },
    [SELECTORS.BUTTONS_WRAPPER]: {
        animation: `${fadeSimple} .3s 1.4s linear both`,
    },
    "@media (max-width:1000px)": {
        "&::before": {
            width: "80vw",
        },
    },
    "@media (max-width:700px)": {
        "&::before": {
            width: "calc(100vw - 40px)",
            transform: `translate(-50%,-50%)`,
        },
    },
    "@media (max-width:500px)": {
        "&::before": {
            width: "100vw",
            padding: "0 10px",
            boxSizing: "border-box",
        },
    },
}));
