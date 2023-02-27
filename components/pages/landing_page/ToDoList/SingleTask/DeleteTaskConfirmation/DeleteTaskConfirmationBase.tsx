// Tools
import { styled, keyframes, alpha } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeFromLeft } from "@/components/keyframes/intro";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components
const introAnimation = keyframes({
    "0%": {
        transform: "translateX(calc(100% + 10px)) scaleY(0.05)",
    },
    "40%,60%": {
        transform: "translateX(0%) scaleY(0.05)",
    },
    "100%": {
        transform: "translateX(0%) scaleY(1)",
    },
});

const outroAnimation = keyframes({
    "0%": {
        transform: "translateX(0%) scaleY(1)",
    },
    "40%,60%": {
        transform: "translateX(0%) scaleY(0.05)",
    },
    "100%": {
        transform: "translateX(calc(100% + 10px)) scaleY(0.05)",
    },
});

export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    padding: "0 10px",
    background: theme.palette.primary.main,
    borderRadius: "3px",
    transition: "background .3s",
    transform: "translateX(calc(100% + 10px)) scaleY(0.05)",
    "span.label": {
        marginRight: "10px",
        color: "#fff",
        userSelect: "none",
    },
    "&.deleted": {
        background: theme.palette.success.main,
        button: {
            background: alpha(theme.palette.text.primary, 0.3),
        },
    },
    "&.outro": {
        animation: `${outroAnimation} .5s .2s both`,
        "span.label": {
            animation: `${fadeSimpleOUT} .3s both`,
        },
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimpleOUT} .3s both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimpleOUT} .3s both`,
            },
        },
    },
    "&.intro": {
        animation: `${introAnimation} .5s both`,
        "span.label": {
            animation: `${fadeFromLeft} .3s .6s both`,
        },
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .3s .7s both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .3s .8s both`,
            },
        },
    },
    ["@media (max-width:800px)"]: {
        width: "100%",
        justifyContent: "space-between",
    },
}));
