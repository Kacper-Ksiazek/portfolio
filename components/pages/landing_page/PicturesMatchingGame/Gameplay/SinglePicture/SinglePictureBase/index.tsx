// Tools
import { styled, keyframes } from "@mui/system";
import { SinglePictureBaseRWD } from "./RWD";
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
    width: "100px",
    height: "100px",
    background: "#fff",
    borderRadius: "5px",
    position: "relative",
    color: theme.palette.primary.main,
    border: "3px solid #fff",
    boxSizing: "border-box",
    margin: "3px",
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
    "&::after,&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        height: "100%",
        width: "52%",
        background: "#fff",
    },
    "&::after": {
        transition: "transform .2s",
        left: "0",
        zIndex: 2,
    },
    "&::before": {
        right: "0",
        transition: "transform .2s",
        zIndex: 1,
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
        "&::after": {
            background: theme.palette.primary.main,
            transform: "translateX(calc(-100% - 10px))",
        },
        "&::before": {
            background: theme.palette.secondary.main,
            transform: "translateX(calc(100% + 10px))",
        },
    },
    ...(SinglePictureBaseRWD as any),
}));
