// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";

// Styled components
export default styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0%",
    paddingTop: "40px",
    width: "100vw",
    height: "80px",
    zIndex: 2,
    transition: "all .3s",
    paddingLeft: "64px",
    paddingRight: "64px",
    boxSizing: "border-box",
    background: theme.palette.background.default,

    "div#main-navigation-content": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        height: "100%",
        margin: "0 auto",
        transition: "all .3s, color .15s",
    },
    "&.contrast-colors": {
        background: "transparent",

        "#portfolio-logo-header": {
            color: "#fff",
        },

        ".MuiButtonBase-root": {
            border: "1px solid #fff",
            "span.text": {
                color: "#fff",
            },
        },
        "&.after-scroll-styles": {
            "#portfolio-logo-header": {
                color: "#000",
            },
            ".MuiButtonBase-root": {
                border: "1px solid #000",
                "span.text": {
                    color: "#000",
                },
            },
        },
        "#mobile-menu-opener": {
            color: "#fff",
        },
    },

    "&.display-outro-animation": {
        animation: `${fadeSimpleOUT} .2s .1s linear both !important`,
        "#portfolio-logo-image": {
            animation: `${fadeSimpleOUT} .3s linear both`,
        },
        "#portfolio-logo-header": {
            animation: `${fadeSimpleOUT} .3s linear both`,
        },
        ".single-main-navigation-route": {
            animation: `${fadeSimpleOUT} .3s linear both`,
        },
    },
    "&.display-intro-animation": {
        animation: `${fadeSimple} .2s linear both !important`,
        "#portfolio-logo-image": {
            animation: `${fadeSimple} .2s .1s linear backwards`,
        },
        "#portfolio-logo-header": {
            animation: `${fadeSimple} .2s .15s linear backwards`,
        },
        ".single-main-navigation-route": {
            animation: `${fadeSimple} .2s .2s linear both`,
        },
    },
    "&.on-scroll-styles": {
        color: "#000",
        paddingTop: "0px",
        boxSizing: "border-box",
        background: theme.palette.background.default,
        paddingLeft: "32px",
        paddingRight: "32px",
        "#main-navigation-content": {
            maxWidth: "1400px",
        },
        "#mobile-menu-opener": {
            color: "#000",
        },
    },
    ["@media (max-width:500px)"]: {
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingTop: "24px",
        "&.after-scroll-styles": {
            paddingLeft: "24px",
            paddingRight: "24px",
        },
    },
}));
