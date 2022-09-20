// Tools
import { styled, keyframes } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components
const introAnimation = keyframes({
    "0%": {
        transform: "translateY(calc(-100% - 20px)) scaleX(0.05)",
    },
    "50%": {
        transform: "translateY(0) scaleX(0.05)",
    },
    "100%": {
        transform: "translateY(0) scaleX(1)",
    },
});
const outroAnimation = keyframes({
    "0%": {
        transform: "translateY(0) scaleX(1)",
    },
    "50%": {
        transform: "translateY(0) scaleX(0.05)",
    },
    "100%": {
        transform: "translateY(calc(-100% - 20px)) scaleX(0.05)",
    },
});

export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    right: "0",
    width: "calc(100% - 50px)",
    borderRadius: "3px",
    height: "100%",
    background: theme.palette.background.paper,
    display: "flex",
    padding: "0 10px",
    boxSizing: "border-box",
    input: {
        width: "calc(100% - 72px)",
    },
    alignItems: "center",
    "&.intro": {
        animation: `${introAnimation} .5s backwards`,
        input: {
            animation: `${fadeFromLeft} .3s .7s backwards`,
        },
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .3s .8s backwards`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .3s .9s backwards`,
            },
        },
    },
    "&.outro": {
        animation: `${outroAnimation} .5s .4s backwards`,
        input: {
            animation: `${fadeSimpleOUT} .3s .3s backwards`,
        },
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimpleOUT} .3s .1s backwards`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimpleOUT} .3s backwards`,
            },
        },
    },
    ["@media (max-width:800px)"]: {
        width: "100%",
    },
}));
