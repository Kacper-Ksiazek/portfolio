// Tools
import { styled, keyframes } from "@mui/material";
import { fadeSimple, fadeFromTop } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";

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
    paddingLeft: "86px",
    paddingRight: "86px",
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
            "button.active-theme": {
                border: `1px solid #fff`,
                ".icon-wrapper": {
                    background: "#fff",
                    border: `1px solid #000`,
                    svg: {
                        color: "#000",
                    },
                },
                ".theme-name": {
                    color: "#fff",
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
                color: theme.palette.text.primary,
            },
            ".MuiButtonBase-root": {
                border: `1px solid ${theme.palette.text.primary}`,
                "span.text": {
                    color: theme.palette.text.primary,
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
        color: theme.palette.text.primary,
        paddingTop: "0px",
        background: theme.palette.background.default,
        boxSizing: "border-box",
        "&:not(&.color-theme-menu-is-opened)": {
            paddingLeft: "32px",
            paddingRight: "32px",
        },
        "#main-navigation-content": {
            maxWidth: "1400px",
        },
        "#mobile-menu-opener": {
            color: theme.palette.text.primary,
        },
        "#theme-switch": {
            "button.active-theme": {
                border: `1px solid ${theme.palette.text.primary}`,
                ".icon-wrapper": {
                    background: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.background.default}`,
                    svg: {
                        color: theme.palette.background.default,
                    },
                },
                ".theme-name": {
                    color: theme.palette.text.primary,
                },
            },
        },
    },

    // Landing page

    "&.intro-landing-page-but-faster": {
        animation: `${fadeFromTop} .2s 3.6s both linear`,
    },
    "&.intro-landing-page": {
        animation: `${fadeFromTop} .2s 5.6s both linear`,
    },
    "&.intro-landing-page-but-faster, &.intro-landing-page": {
        "@media (max-width:1000px)": {
            animation: `${fadeFromTop} .2s 1.4s both linear`,
        },
    },

    // Single project

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
