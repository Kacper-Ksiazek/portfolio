// Tools
import { styled } from "@mui/material";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
//
import RWD from "./RWD";
import { getIntroAnimationsStyles } from "./introAnimations";
// Styled components
import Section from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

interface IntroductionScreenBaseWrapperProps {
    displayIntroAnimations: boolean;
}

export default styled(Section, {
    shouldForwardProp: (prop: string) => {
        return !(["displayIntroAnimations"] as (keyof IntroductionScreenBaseWrapperProps | string)[]).includes(prop);
    },
})<IntroductionScreenBaseWrapperProps>(({ theme, ...props }) => ({
    position: "relative",
    margin: "0 auto",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    height: "100vh",
    marginBottom: "60px",

    ...mergeSXObjects(
        getIntroAnimationsStyles(theme, props.displayIntroAnimations), //
        RWD
    ),
}));
