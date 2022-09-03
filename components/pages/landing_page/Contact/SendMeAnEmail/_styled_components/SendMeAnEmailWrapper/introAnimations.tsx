// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

const intro = keyframes({
    "0%": {
        bottom: 0,
        left: 0,
        height: 0,
        width: "80px",
    },
    "33%,66%": {
        height: "100%",
        width: "80px",
    },
    "100%": {
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
    },
});

const outro = keyframes({
    "0%": {
        bottom: "auto",
        left: "auto",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%",
    },
    "33%,66%": {
        height: "100%",
        width: "80px",
    },
    "100%": {
        bottom: "auto",
        left: "auto",
        top: 0,
        right: 0,
        height: 0,
        width: "80px",
    },
});

const changeBackgroundColor = keyframes({
    from: {
        background: "transparent",
    },
    to: {
        background: theme.palette.background.default,
    },
});

export default {
    animation: `${changeBackgroundColor} .001s .85s both`,
    "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
        left: 0,
        background: "#F2E8EF",
        animation: `${intro} .5s .3s linear both, ${outro} .5s 1.1s linear forwards`,
    },
    //
    h4: {
        animation: `${fadeSimple} .3s linear both`,
    },
    ".navigation-between-stages": {
        ".MuiStep-root": {
            ".single-nagivation-step": {
                "&.one": {
                    animation: `${fadeSimple} .3s .1s linear both`,
                },
                "&.two": {
                    animation: `${fadeSimple} .3s .2s linear both`,
                },
                "&.three": {
                    animation: `${fadeSimple} .3s .3s linear both`,
                },
            },
        },
    },
    footer: {
        button: {
            "&.continue": {
                animation: `${fadeSimple} .3s .7s linear both`,
            },
            "&.fake-invalid-request": {
                animation: `${fadeSimple} .3s 1.1s linear both`,
            },
            "&.fake-valid-request": {
                animation: `${fadeSimple} .3s 1s linear both`,
            },
        },
    },
} as SxProps;
