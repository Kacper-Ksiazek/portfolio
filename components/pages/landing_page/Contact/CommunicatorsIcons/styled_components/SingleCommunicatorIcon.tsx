// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import { singleIconBackgroundAnimation, singleIconIntroAnimation, singleIconOutroAnimation } from "./_keyframes";
// Styled components
export default styled("a")(({ theme }) => ({
    width: "80px",
    height: "80px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    ".intro-animation-bar": {
        position: "absolute",
        top: "0",
        left: 0,
        width: "100%",
        height: "100%",
        background: "#F2E8EF",
        zIndex: 10,
    },
    svg: {
        position: "relative",
        zIndex: 2,
        fontSize: "4rem",
        color: "#fff",
    },
    "&:not(&:nth-of-type(1))": {
        marginLeft: "20px",
    },
    "&::after,&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "50%",
        background: theme.palette.secondary.main,
        transition: "transform .3s",
    },
    "&::after": {
        top: "0",
        transform: "translate(0%,calc(-100% - 10px))",
    },
    "&::before": {
        bottom: "0",
        transform: "translate(0%,calc(+100% + 10px))",
    },
    "&:hover": {
        "&::after,&::before": {
            transform: "translate(0%,0%) ",
        },
    },

    // Intro animations

    "&:nth-of-type(1)": {
        ".intro-animation-bar": {
            animation: `${singleIconIntroAnimation} .2s .6s linear both, ${singleIconOutroAnimation} .2s .9s linear forwards`,
        },
        svg: {
            animation: `${fadeSimple} .3s 1s both`,
        },
        animation: `${singleIconBackgroundAnimation} .001s .85s both`,
    },
    "&:nth-of-type(2)": {
        ".intro-animation-bar": {
            animation: `${singleIconIntroAnimation} .2s .8s linear both, ${singleIconOutroAnimation} .2s 1.2s linear forwards`,
        },
        svg: {
            animation: `${fadeSimple} .3s 1.2s both`,
        },
        animation: `${singleIconBackgroundAnimation} .001s 1.05s both`,
    },
    "&:nth-of-type(3)": {
        ".intro-animation-bar": {
            animation: `${singleIconIntroAnimation} .2s 1s linear both, ${singleIconOutroAnimation} .2s 1.3s linear forwards`,
        },
        svg: {
            animation: `${fadeSimple} .3s 1.4s both`,
        },
        animation: `${singleIconBackgroundAnimation} .001s 1.25s both`,
    },
    "&:nth-of-type(4)": {
        ".intro-animation-bar": {
            animation: `${singleIconIntroAnimation} .2s 1.2s linear both, ${singleIconOutroAnimation} .2s 1.5s linear forwards`,
        },
        svg: {
            animation: `${fadeSimple} .3s 1.6s both`,
        },
        animation: `${singleIconBackgroundAnimation} .001s 1.45s both`,
    },
}));
