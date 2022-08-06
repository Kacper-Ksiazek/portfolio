// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
import SectionWrapper from "../_SectionWrapper";

const drawBackgroundShape = keyframes({
    "0%": {
        width: "80px",
        height: 0,
    },
    "40%,60%": {
        width: "80px",
        height: "150%",
    },
    "100%": {
        width: "350px",
        height: "150%",
    },
});

const rotateLeft = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(22deg)",
    },
});
const rotateRight = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(-22deg)",
    },
});

export default styled(SectionWrapper)(({ theme }) => ({
    background: theme.palette.background.paper,
    boxSizing: "border-box",
    borderRadius: "20px",
    overflow: "hidden",
    "&.visible": {
        "&>*": {
            visibility: "visible",
        },
        ".background-shape": {
            "&.left": {
                animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateLeft} 1s 1.5s both linear`,
            },
            "&.right": {
                animation: `${drawBackgroundShape} 1s .2s linear both, ${rotateRight} 1s 1.5s both linear`,
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
