// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
import SectionWrapper from "../_SectionWrapper";

const drawBackgroundShape = keyframes({
    "0%": {
        width: "80px",
        height: 0,
    },
    "40%,60%": {
        width: "80px",
        height: "110%",
    },
    "100%": {
        width: "350px",
        height: "170%",
    },
});

const rotateLeftBiggerDegree = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(22deg)",
    },
});

const rotateLeftSmallerDegree = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(11deg)",
    },
});

const rotateRightBiggerDegree = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(-22deg)",
    },
});

const rotateRightSmallerDegree = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(-11deg)",
    },
});

export default styled(SectionWrapper)(({ theme }) => ({
    background: theme.palette.background.paper,
    boxSizing: "border-box",
    borderRadius: "20px",
    overflow: "hidden",
    "&>*": {
        visibility: "hidden",
    },
    "&.visible": {
        "&>*": {
            visibility: "visible",
        },
        ".background-shape": {
            "&.left": {
                animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateLeftBiggerDegree} 1s 1.5s both linear`,
                ["@media (max-width:900px)"]: {
                    animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateLeftSmallerDegree} 1s 1.5s both linear`,
                },
                ["@media (max-width:400px)"]: {
                    animation: `${drawBackgroundShape} 1s .2s linear both`,
                },
            },
            "&.right": {
                animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateRightBiggerDegree} 1s 1.5s both linear`,
                ["@media (max-width:900px)"]: {
                    animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateRightSmallerDegree} 1s 1.5s both linear`,
                },
                ["@media (max-width:400px)"]: {
                    animation: `${drawBackgroundShape} 1s .2s linear both`,
                },
            },
        },
        ".dark-content-wrapper-main-header": {
            animation: `${fadeSimple} .3s 1s linear both`,
        },
        ".dark-content-wrapper-additional-text": {
            animation: `${fadeSimple} .3s 1.2s linear both`,
        },
    },
    "&.not-visable": {
        "&>*": {
            visibility: "hidden",
        },
    },
}));
