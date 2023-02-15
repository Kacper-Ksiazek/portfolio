// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";

const wrapperOutroAnimation = keyframes({
    "0%": {
        opacity: 1,
    },
    "99.99999%": {
        opacity: 0,
    },
    "100%": {
        opacity: 0,
        zIndex: -1,
    },
});

// Styled components
export default styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0%",
    paddingTop: "40px",
    width: "100vw",
    height: "80px",
    zIndex: 12,
    transition: "all .3s",
    paddingLeft: "64px",
    paddingRight: "64px",
    boxSizing: "border-box",
    background: "transparent",

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
        "#portfolio-logo-header": {
            color: "#fff",
        },
        "#mobile-menu-opener": {
            color: "#fff",
        },
        "#theme-switch": {
            border: `1px solid #fff`,
            "#choice-indicator": {
                background: "#fff",
                border: `1px solid #000`,
                svg: {
                    color: "#000",
                },
            },
        },

        ".MuiButtonBase-root": {
            border: "1px solid #fff",
            "span.text": {
                color: "#fff",
            },
        },
        "&.on-scroll-styles": {
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
    },

    "&.display-outro-animation": {
        animation: `${wrapperOutroAnimation} .2s .1s linear both !important`,
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
        "#theme-switch": {
            border: `1px solid ${theme.palette.text.primary}`,
            "#choice-indicator": {
                background: "#000",
                border: `1px solid ${theme.palette.background.default}`,
                svg: {
                    color: theme.palette.background.default,
                },
            },
        },
    },
    //
    "&.intro-landing-page-but-faster": {
        animation: `${fadeFromTop} .2s .8s both linear`,
    },
    "&.intro-landing-page": {
        animation: `${fadeFromTop} .2s 2.6s both linear`,
    },
    "&.intro-single-project": {
        animation: `${fadeSimple} .2s 3.3s both linear`,
    },
    "&.keep-contrast-font-color": {
        "#portfolio-logo-header": {
            color: "#fff !important",
        },
        "#mobile-menu-opener": {
            color: "#fff !important",
        },
    },
    //
    ["@media (max-width:500px)"]: {
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingTop: "24px",
        height: "64px",
        "&.on-scroll-styles": {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
    },
}));
