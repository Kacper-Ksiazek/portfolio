// Tools
import { styled, keyframes } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    background: theme.palette.secondary.main,
    "&.bottom": {
        width: "300px",
        height: "50px",
        bottom: "0",
        left: 0,
        animation: `${bottomIntroAnimation} .6s 3s both linear`,
    },
    "&.top": {
        width: "200px",
        height: "130px",
        top: "0",
        right: 0,
        animation: `${topIntroAnimation} .6s 3.3s both linear`,
    },
}));

const bottomIntroAnimation = keyframes({
    from: {
        transform: "translate(20px,-20px)",
        visibility: "hidden",
    },
    to: {
        visibility: "visible",
        transform: "translate(0px,0px)",
    },
});

const topIntroAnimation = keyframes({
    from: {
        transform: "translate(-20px,20px)",
        visibility: "hidden",
    },
    to: {
        visibility: "visible",
        transform: "translate(0px,0px)",
    },
});
