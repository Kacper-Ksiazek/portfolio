// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
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
        animation: `${fadeSimpleOUT} .3s .2s linear both !important`,
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
        animation: `${fadeSimple} .3s linear both !important`,
        "#portfolio-logo-image": {
            animation: `${fadeSimple} .3s .1s linear backwards`,
        },
        "#portfolio-logo-header": {
            animation: `${fadeSimple} .3s .1s linear backwards`,
        },
        ".single-main-navigation-route": {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .3s .2s linear backwards`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .3s .25s linear backwards`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeSimple} .3s .3s linear backwards`,
            },
        },
    },
    "&.landing-page-intro": {
        animation: `${fadeFromTop} .2s 2.6s both linear`,
        background: "transparent",
    },
    "&.landing-page-intro-faster": {
        animation: `${fadeFromTop} .2s .8s both linear`,
        background: "transparent",
    },
    "&.single-project-intro": {
        animation: `${fadeSimple} .2s 3.3s both linear`,
        background: "transparent",
    },

    "&.after-scroll-styles": {
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
