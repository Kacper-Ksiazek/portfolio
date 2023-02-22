// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const fadeSimple = keyframes({
    from: {
        visibility: "hidden",
    },
    to: {
        visibility: "visible",
    },
});
const borderAppearingAnimation = keyframes({
    from: {
        border: `1px solid transparent`,
    },
    to: {
        border: `1px solid #c7c7c7`,
    },
});

const EVEN_introAnimationStageOne = keyframes({
    "0%": {
        width: "10px",
        height: 0,
        right: 0,
        top: 0,
        bottom: "auto",
        left: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "10px",
    },
    "100%": {
        width: "100%",
        height: "100%",
        right: 0,
        top: 0,
        bottom: "auto",
        left: "auto",
    },
});
const ODD_introAnimationStageOne = keyframes({
    "0%": {
        width: "10px",
        height: 0,
        left: 0,
        top: 0,
        bottom: "auto",
        right: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "10px",
    },
    "100%": {
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        bottom: "auto",
        right: "auto",
    },
});
const EVEN_introAnimationStageTwo = keyframes({
    "0%": {
        width: "100%",
        height: "100%",
        top: "auto",
        left: 0,
        bottom: 0,
        right: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "10px",
    },
    "100%": {
        width: "10px",
        height: 0,
        top: "auto",
        left: 0,
        bottom: 0,
        right: "auto",
    },
});
const ODD_introAnimationStageTwo = keyframes({
    "0%": {
        width: "100%",
        height: "100%",
        top: "auto",
        right: 0,
        bottom: 0,
        left: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "10px",
    },
    "100%": {
        width: "10px",
        height: 0,
        top: "auto",
        right: 0,
        bottom: 0,
        left: "auto",
    },
});

export default {
    overflow: "hidden",
    "&::after": {
        content: '""',
        position: "absolute",
        background: COLORS.primary,
    },
    "&:nth-of-type(1)": {
        animation: `${borderAppearingAnimation} .001s 1.1s both`,
        "&>svg, .right-pointing-arrow, .single-way-to-reach-me-text, .children-wrapper": {
            animation: `${fadeSimple} .001s 1.1s both`,
        },
        "&::after": {
            animation: `${ODD_introAnimationStageOne} .8s .2s linear both, ${ODD_introAnimationStageTwo} .8s 1.3s forwards linear`,
        },
    },
    "&:nth-of-type(2)": {
        animation: `${borderAppearingAnimation} .001s 1.2s both`,
        "&>svg, .right-pointing-arrow, .single-way-to-reach-me-text, .children-wrapper": {
            animation: `${fadeSimple} .001s 1.2s both`,
        },
        "&::after": {
            animation: `${EVEN_introAnimationStageOne} .8s .3s linear both, ${EVEN_introAnimationStageTwo} .8s 1.4s forwards linear`,
        },
    },
    "&:nth-of-type(3)": {
        animation: `${borderAppearingAnimation} .001s 1.3s both`,
        "&>svg, .right-pointing-arrow, .single-way-to-reach-me-text, .children-wrapper": {
            animation: `${fadeSimple} .001s 1.3s both`,
        },
        "&::after": {
            animation: `${ODD_introAnimationStageOne} .8s.4s linear both, ${ODD_introAnimationStageTwo} .8s 1.5s forwards linear`,
        },
    },
    "&:nth-of-type(4)": {
        animation: `${borderAppearingAnimation} .001s 1.4s both`,
        "&>svg, .right-pointing-arrow, .single-way-to-reach-me-text, .children-wrapper": {
            animation: `${fadeSimple} .001s 1.4s both`,
        },
        "&::after": {
            animation: `${EVEN_introAnimationStageOne} .8s .5s linear both, ${EVEN_introAnimationStageTwo} .8s 1.6s forwards linear`,
        },
    },
    "&:nth-of-type(5)": {
        animation: `${borderAppearingAnimation} .001s 1.5s both`,
        "&>svg, .right-pointing-arrow, .single-way-to-reach-me-text, .children-wrapper": {
            animation: `${fadeSimple} .001s 1.5s both`,
        },
        "&::after": {
            animation: `${ODD_introAnimationStageOne} .8s .6s linear both, ${ODD_introAnimationStageTwo} .8s 1.7s forwards linear`,
        },
    },
} as SxProps;
