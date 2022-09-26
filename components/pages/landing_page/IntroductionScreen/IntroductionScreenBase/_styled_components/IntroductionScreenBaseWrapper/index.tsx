// Tools
import introAnimatins from "./introAnimations";
import { styled, alpha, keyframes } from "@mui/system";
// Styled components
import Section from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

// after- maska
// before- zdjecie
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

    //
    "&::before, &::after": {
        position: "absolute",
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
        transition: "transform 1s",
    },
    "&::after": {
        background: alpha(theme.palette.background.paper, 0.75),
        transition: "background 1s",
        zIndex: 7,
    },
    "&.scroll-button-is-hovered": {
        "&::after": {
            background: alpha(theme.palette.background.paper, 0.65),
        },
        "&::before": {
            transform: "scale(1.1)",
            animation: `${keyframes({
                "0%": {
                    backgroundPosition: "top center",
                },
                "100%": {
                    backgroundPosition: "bottom center",
                },
            })} 60s linear infinite alternate`,
        },
    },
    //
    ...(introAnimatins as any),
}));
