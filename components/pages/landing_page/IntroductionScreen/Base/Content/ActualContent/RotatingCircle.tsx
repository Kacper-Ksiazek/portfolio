// Tools
import { SELECTORS } from "./css_references";
import { styled, keyframes } from "@mui/material";
// Styled components
const fadeSimple = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.054,
    },
});

const rotate = keyframes({
    from: {
        transform: "translate(-50%,-50%) rotate(0deg)",
    },
    to: {
        transform: "translate(-50%,-50%) rotate(360deg)",
    },
});

export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    opacity: 0.05,
    zIndex: 15,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "50%",

    [`&${SELECTORS.SMALL_CIRCLE}`]: {
        width: "500px",
        height: "500px",
        animation: `${fadeSimple} 1s .5s linear both , ${rotate} 10s infinite linear`,
        backgroundImage: 'url("/images/landing-page/circle_smaller.png")',
    },

    [`&${SELECTORS.BIG_CIRCLE}`]: {
        width: "800px",
        height: "800px",
        animation: `${fadeSimple} 1s .8s linear both , ${rotate} 15s reverse infinite linear`,
        backgroundImage: 'url("/images/landing-page/circle_larger.png")',
    },
}));
