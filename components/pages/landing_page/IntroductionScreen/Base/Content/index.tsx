// Types
import type { FunctionComponent, ReactNode } from "react";
import type { ContentToRender } from "../hooks/useIntroAnimationControls";
import type { ActualContentProps as I_ActualContentProps } from "./ActualContent";
import type { IntroBigRectanglesAnimationProps as I_IntroBigRectanglesAnimationProps } from "./IntroBigRectanglesAnimation";
// Other components
import ActualContent from "./ActualContent";
import IntroBigRectanglesAnimation from "./IntroBigRectanglesAnimation";

interface IntroductionScreenBaseContentProps {
    children: ReactNode;
    contentToRender: ContentToRender;

    ActualContentProps: Omit<I_ActualContentProps, "children">;
    IntroBigRectanglesAnimationProps: I_IntroBigRectanglesAnimationProps;
}

const IntroductionScreenBaseContent: FunctionComponent<IntroductionScreenBaseContentProps> = (props) => {
    switch (props.contentToRender) {
        case "INTRODUCTION_SCREEN_CONTENT":
            return <ActualContent {...props.ActualContentProps}>{props.children}</ActualContent>;

        case "INTRO_ANIMATIONS":
            return <IntroBigRectanglesAnimation {...props.IntroBigRectanglesAnimationProps} />;

        default:
            return <></>;
    }
};

export default IntroductionScreenBaseContent;
