// Tools
import theme from "@/material";
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    cursor: "default",
    position: "relative",
    padding: "10px",
    alignSelf: "flex-start",
    height: "520px",
    overflow: "hidden",
    "div.content": {
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        padding: "20px 10px",
        boxSizing: "border-box",
        ".MuiFormControl-root": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "16px",
            },
        },
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
        // Intro animation
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
    },
}));

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
