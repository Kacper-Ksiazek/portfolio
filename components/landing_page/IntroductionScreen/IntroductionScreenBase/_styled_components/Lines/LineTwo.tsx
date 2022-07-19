// Tools
import { styled, keyframes } from "@mui/system";
// Styled components
import LineBase from "./_LineBase";

const introAnimationTwo = keyframes({
    "0%": {
        maxHeight: "200px",
        transform: "translate(calc(-100% - 20px - 50%), -50%)",
    },
    "40%,60%": {
        maxHeight: "200px",
        transform: "translate(-50%,-50%)",
    },
    "100%": {
        maxHeight: "100%",
        transform: "translate(-50%,-50%)",
    },
});
const outroAnimationTwo = keyframes({
    "0%": {
        width: "100%",
        transform: "translate(-50%,-50%)",
    },
    "40%,60%": {
        width: "200px",
        transform: "translate(-50%,-50%)",
    },
    "100%": {
        width: "200px",
        transform: "translate(-50%,calc(-50% + 100% + 20px))",
    },
});

export default styled(LineBase)(({ theme }) => ({
    background: theme.palette.secondary.main,
    zIndex: 9,
    borderRadius: "5px",
    animation: `${introAnimationTwo} .8s .3s linear both , ${outroAnimationTwo} .8s 1.8s linear forwards`,
}));
