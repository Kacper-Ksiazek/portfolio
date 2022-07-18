// Tools
import { styled, keyframes } from "@mui/system";
// Styled components
import LineBase from "./_LineBase";

const introAnimationOne = keyframes({
    "0%": {
        maxHeight: "100px",
        transform: "translate(calc(-100% - 20px - 50%), -50%)",
    },
    "40%,60%": {
        maxHeight: "100px",
        transform: "translate(-50%,-50%)",
    },
    "100%": {
        maxHeight: "100%",
        transform: "translate(-50%,-50%)",
    },
});

const outroAnimationOne = keyframes({
    "0%": {
        width: "100%",
        transform: "translate(-50%,-50%)",
    },
    "40%,60%": {
        width: "100px",
        transform: "translate(-50%,-50%)",
    },
    "100%": {
        width: "100px",
        transform: "translate(-50%,calc(-50% + 100% + 20px))",
    },
});
export default styled(LineBase)(({ theme }) => ({
    background: "#000",
    zIndex: 7,
    borderRadius: "5px",
    animation: `${introAnimationOne} .8s .6s linear both, ${outroAnimationOne} .8s 1.6s linear forwards`,
}));
