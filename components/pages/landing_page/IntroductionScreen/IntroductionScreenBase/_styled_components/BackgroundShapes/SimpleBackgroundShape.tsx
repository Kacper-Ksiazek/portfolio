// Tools
import { styled, keyframes } from "@mui/material";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components
import BackgroundShapeBase from "./_BackgroundShapeBase";

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

export default styled(BackgroundShapeBase)(({ theme }) => ({
    background: theme.palette.background.paper,
    zIndex: 8,
    animation: `${introAnimationThree} .8s linear both, ${fadeSimpleOUT} .01s 1.7s both`,
}));
