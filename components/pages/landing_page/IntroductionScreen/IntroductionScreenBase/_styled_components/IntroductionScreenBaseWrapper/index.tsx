// Tools
import RWD from "./RWD";
import { styled, alpha } from "@mui/system";
import { introAnimationWidthBodyWithBigRadius } from "./keyframes";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
import Section from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

export default styled(Section)(({ theme }) => ({
    position: "relative",
    margin: "0 auto",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    height: "100vh",
    "&.display-intro-animations": {
        animation: `${introAnimationWidthBodyWithBigRadius} .2s 5.5s both linear`,
        "&::before": {
            animation: `${fadeSimple} .5s 1.6s both linear`,
        },
        "&::after": {
            animation: `${fadeSimple} .01s 1.6s both linear`,
        },
    },
    "&.skip-intro-animation": {
        borderRadius: "20px 100px 20px 100px",
        top: "-100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
        "&::before": {
            animation: `${fadeSimple} .5s 1s both linear`,
        },
    },
    //
    "&::before, &::after": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    "&::before": {
        backgroundImage: "url('./images/landing-page/introduction-screen.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "blur(4px)",
        zIndex: 6,
    },
    "&::after": {
        background: alpha(theme.palette.background.paper, 0.95),
        zIndex: 7,
    },
    ...(RWD as any),
}));
