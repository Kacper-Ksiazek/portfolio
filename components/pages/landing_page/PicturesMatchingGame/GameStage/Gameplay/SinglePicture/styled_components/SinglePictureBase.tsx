// Tools
import { styled, keyframes } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";

const introAppearingAnimation = keyframes({
    "0%,100%": {
        opacity: 1,
    },
    "20%,75%": {
        opacity: 0,
    },
});
// Styled components
export default styled("div")(({ theme }) => ({
    width: "100%",
    background: "#fff",
    borderRadius: "5px",
    position: "relative",
    color: theme.palette.primary.main,
    border: "3px solid #fff",
    boxSizing: "border-box",
    img: {
        borderRadius: "5px 10px 5px 10px",
        transition: "transform .3s",
    },
    transition: "all .3s",
    overflow: "hidden",
    animation: `${fadeSimple} .3s .1s linear both`,
    //
    // Handle image displaying and fading
    //
    "&.intro-animation": {
        ".hiding-mask-wing": {
            animation: `${introAppearingAnimation} 1.6s 2s linear`,
        },
        "span.question-mark": {
            animation: `${fadeSimpleOUT} .3s 2s linear both`,
        },
    },
    "&::before": {
        content: '""',
        display: "block",
        paddingBottom: "100%",
    },
    "&:not(&.intro-animation)": {
        cursor: "pointer",
        "&:hover": {
            img: {
                transform: "scale(1.02)",
            },
            "span.question-mark": {
                color: "#fff",
            },
            ".hiding-mask-wing": {
                background: theme.palette.primary.main,
            },
        },
    },
}));
