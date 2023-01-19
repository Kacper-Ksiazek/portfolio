// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";

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
        "&::after,&::before": {
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
            "&::after, &::before": {
                background: theme.palette.primary.main,
            },
        },
    },
    "&.display-image": {
        // "&::after": {
        //     background: theme.palette.primary.main,
        //     transform: "translateX(calc(-100% - 10px))",
        // },
        // "&::before": {
        //     background: theme.palette.secondary.main,
        //     transform: "translateX(calc(100% + 10px))",
        // },
    },
}));
