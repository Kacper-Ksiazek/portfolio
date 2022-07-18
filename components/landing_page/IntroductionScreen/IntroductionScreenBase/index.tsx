// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
import Section from "@/components/_styled_components/content_placement/SectionWrapper/_SectionWrapper";
const IntroductionScreenBaseWrapper = styled(Section)(({ theme }) => ({
    borderRadius: "20px 100px 20px 100px",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-100px",
    height: "calc(100vh - 40px)",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    },
    "&::after": {
        background: theme.palette.background.paper,
        opacity: 0.9,
    },
}));

const IntroductionScreenBaseContent = styled("div")(({ theme }) => ({
    position: "relative",
    zIndex: 5,
    color: "#fff",
    width: "100%",
    maxWidth: "750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
}));

const IntroductionScreenBase: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
        <IntroductionScreenBaseWrapper>
            <IntroductionScreenBaseContent>INTRODUCTION</IntroductionScreenBaseContent>
        </IntroductionScreenBaseWrapper>
    );
};

export default IntroductionScreenBase;
