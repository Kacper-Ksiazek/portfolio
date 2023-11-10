// Tools
import { COLORS } from "@/material";
import { useIntroAnimationControls } from "./hooks";
import { CSS_REFERENCES } from "landing_page/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import BackgroundPicture from "./BackgroundPicture";
import PreviewBackgroundPicture from "./PreviewBackgroundPicture";
// Styled Components
import { CircleOne, CircleTwo } from "./_styled_components/Circles";
import { BackgroundShape, SimpleBackgroundShape } from "./_styled_components/BackgroundShapes";
import IntroductionScreenBaseContent from "./_styled_components/IntroductionScreenBaseContent";
import IntroductionScreenBaseWrapper from "./_styled_components/IntroductionScreenBaseWrapper";

interface IntroductionScreenBaseProps {
    children: ReactNode;
    renderBigCircle: boolean;
    scrollButtonIsHovered: boolean;
    /** Place passed ReactNode **besides the content element** instead of inside */
    elementsOutsideContent?: ReactNode;
}

const IntroductionScreenBase: FunctionComponent<IntroductionScreenBaseProps> = (props) => {
    const { displayAnimations, renderContent } = useIntroAnimationControls();

    return (
        <IntroductionScreenBaseWrapper
            id={CSS_REFERENCES.INTRODUCTION_SCREEN}
            className={[
                displayAnimations ? "display-intro-animations" : "skip-intro-animation", //
                props.scrollButtonIsHovered ? "scroll-button-is-hovered" : "",
            ].join(" ")}
        >
            <BackgroundPicture scrollButtonIsHovered={props.scrollButtonIsHovered} />

            <PreviewBackgroundPicture />

            {(() => {
                if (renderContent) {
                    return (
                        <>
                            <CircleOne />
                            {props.renderBigCircle && <CircleTwo />}
                            {props.elementsOutsideContent}
                            <IntroductionScreenBaseContent>{props.children}</IntroductionScreenBaseContent>
                        </>
                    );
                } else {
                    return (
                        <>
                            <BackgroundShape
                                backgroundColor="#000000" //
                                initialHeight="100px"
                                zIndex={11}
                                delays={{
                                    intro: 0.6,
                                    outro: 1.8,
                                }}
                            />
                            <BackgroundShape
                                backgroundColor={COLORS.secondary} //
                                initialHeight="200px"
                                zIndex={9}
                                delays={{
                                    intro: 0.3,
                                    outro: 2.1,
                                }}
                            />
                            <SimpleBackgroundShape />
                        </>
                    );
                }
            })()}
        </IntroductionScreenBaseWrapper>
    );
};

export default IntroductionScreenBase;
