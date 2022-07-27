// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimpleOUT from "@/components/_keyframes/outro/fadeSimpleOUT";
// Styled components
const intro = keyframes({
    "0%": {
        transform: "translateY(calc(100% + 10px)) scaleX(0.05)",
    },
    "40%,60%": {
        transform: "translateY(0%) scaleX(0.05)",
    },
    "100%": {
        transform: "translateY(0%) scaleX(1)",
    },
});
const outro = keyframes({
    "0%": {
        transform: "translateX(0%) scaleY(1)",
    },
    "40%,60%": {
        transform: "translateX(0%) scaleY(0.1)",
    },
    "100%": {
        transform: "translateX(calc(100% + 10px)) scaleY(0.1)",
    },
});

export default styled("div")(({ theme }) => ({
    position: "absolute",
    background: theme.palette.background.default,
    zIndex: 2,
    width: "100%",
    transform: "translateY(calc(100% + 10px)) scaleX(0.05)",
    height: "100%",
    padding: "20px",
    boxSizing: "border-box",
    ".overflow-scroll-container-content": {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
    },
    "&.intro": {
        animation: `${intro} .5s both linear`,
    },
    "&.outro": {
        animation: `${outro} .5s .3s both linear`,
        "div.single-feature": {
            animation: `${fadeSimpleOUT} .2s both linear`,
            animationDelay: `0 !important`,
        },
    },
}));
