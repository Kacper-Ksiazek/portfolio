// Tools
import { styled, alpha, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
import Section from "@/components/_styled_components/content_placement/SectionWrapper/_SectionWrapper";

const introAnimation = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-120px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px 100px 20px 100px",
        top: "-100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
    },
});

export default styled(Section)(({ theme }) => ({
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    animation: `${introAnimation} .2s 5.5s both linear`,
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
        animation: `${fadeSimple} .5s 1.6s both linear`,
    },
    "&::after": {
        animation: `${fadeSimple} .01s 1.6s both linear`,
        background: alpha(theme.palette.background.paper, 0.95),
        zIndex: 7,
    },
}));
