// Tools
import { styled, alpha, keyframes } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components

const progressBarIntro = keyframes({
    from: {
        transform: "translateX(-50%) scaleX(0)",
    },
    to: {
        transform: "translateX(-50%) scaleX(1)",
    },
});

export default styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "16px",
    left: "50%",
    zIndex: 100,
    width: "300px",
    borderRadius: "4px",
    background: alpha(theme.palette.secondary.main, 0.5),
    height: "32px",
    maxHeight: "8px",
    transition: "max-height .2s .3s linear, width .2s linear, background .001s .5s",
    animation: `${progressBarIntro} .3s linear both`,
    ".indicator": {
        visibility: "visible",
        animation: `${fadeSimple} .2s .3s both linear`,
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "-32px",
        background: alpha("#fff", 0.074),
        width: "100%",
        height: "calc(100% + 12px)",
        transition: "opacity .4s .45s",
        transformOrigin: "left",
        borderRadius: "4px",
        opacity: 0,
    },
    "&.completed": {
        maxHeight: "32px",
        background: theme.palette.secondary.main,
        ".control-button": {
            visibility: "visible",
            animation: `${fadeSimple} .2s .5s both linear`,
            transition: "color .1s .1s linear",
        },
        ".indicator": {
            maxHeight: "32px",
            transition: "max-height .2s .4s linear, width .3s linear",
        },

        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "10px",
            height: "100%",
            width: "6px",
            background: theme.palette.background.lightAnimationBar,
            transition: "transform .2s .5s, left .2s .1s, width .3s",
            transformOrigin: "top",
            transform: "scaleY(0)",
            borderRadius: "4px",
        },

        "&:not(&.is-processing)": {
            cursor: "pointer",
            "&::before": {
                opacity: 1,
                animation: `${keyframes({
                    from: {
                        transform: "scaleX(1.02) translateY(-50%)",
                    },
                    to: {
                        transform: "scaleX(1.24) translateY(-50%)",
                    },
                })} 1s infinite alternate`,
            },
            "&:hover": {
                width: "320px",
                ".control-button": {
                    color: theme.palette.primary.main,
                    transition: "color .1s .4s linear",
                },
                "&::before": {
                    opacity: 0,
                    transition: "opacity .2s",
                },
                "&::after": {
                    left: 0,
                    width: "100%",
                    transition: "transform .6s, left .2s .3s, width .3s .4s",
                    transform: "scaleY(1)",
                },
                ".indicator": {
                    maxHeight: "0",
                    transition: "max-height .2s linear, width .3s linear",
                },
            },
        },
    },
    "&.exit": {
        transform: "translateX(-50%) scaleX(1)",
        animation: `${fadeSimpleOUT} .3s .1s both linear`,
        "&::before, &::after": {
            display: "none",
        },
    },
}));
