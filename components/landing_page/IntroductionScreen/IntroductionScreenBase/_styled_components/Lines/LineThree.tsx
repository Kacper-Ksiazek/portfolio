// Tools
import { styled, keyframes } from "@mui/system";
// Styled components
import LineBase from "./_LineBase";

const introAnimationThree = keyframes({
    "0%": {
        maxHeight: "300px",
        transform: "translate(calc(-100% - 20px - 50%), -50%)",
    },
    "40%,60%": {
        maxHeight: "300px",
        transform: "translate(-50%,-50%)",
    },
    "100%": {
        maxHeight: "100%",
        transform: "translate(-50%,-50%)",
    },
});

export default styled(LineBase)(({ theme }) => ({
    background: theme.palette.background.paper,
    zIndex: 5,
    animation: `${introAnimationThree} .8s linear both`,
}));
