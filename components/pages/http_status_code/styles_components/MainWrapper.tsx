// Tools
import { alpha, styled } from "@mui/material";
import { SELECTORS } from "../css_references";
import { fadeSimple } from "@/components/keyframes/intro/fade";
// Styled components
import _SectionWrapper from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

export default styled(_SectionWrapper)(({ theme }) => ({
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
        animation: `${fadeSimple} 1s .6s linear both`,
    },
    [SELECTORS.HTTP_STATUS_CODE_TITLE]: {
        margin: "10px 0 8px 0",
        fontSize: "42px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: "42px",
        textAlign: "center",
        animation: `${fadeSimple} .3s .6s linear both`,
    },
    [SELECTORS.EXPLANATION]: {
        margin: 0,
        fontSize: "18px",
        animation: `${fadeSimple} .3s .7s linear both`,
        maxWidth: "640px",
        textAlign: "center",
        color: alpha(theme.palette.text.primary, 0.7),
    },
    [SELECTORS.AVAILABLE_RESOURCES_SUBHEADER]: {
        fontSize: "18px",
        margin: "48px 0 8px 0",
        animation: `${fadeSimple} .3s 1.4s linear both`,
    },
    [SELECTORS.BUTTONS_WRAPPER]: {
        animation: `${fadeSimple} .3s 1.4s linear both`,
    },
    "@media (max-width:1400px)": {
        "&::before": {
            backgroundSize: "cover",
        },
    },

    "@media (max-width:500px)": {
        [SELECTORS.HTTP_STATUS_CODE_TITLE]: {
            fontSize: "36px",
        },
        [SELECTORS.EXPLANATION]: {
            fontSize: "16px",
        },
        [SELECTORS.AVAILABLE_RESOURCES_SUBHEADER]: {
            fontSize: "16px",
        },
    },
}));
