// Tools
import { COLORS } from "@/material";
import { useIntroAnimationControls } from "./hooks";
import { CSS_REFERENCES as INTRODUCTION_SCREEN } from "./css_references";
import { CSS_REFERENCES as LANDING_PAGE_SECTIONS } from "landing_page/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import BackgroundPicture from "./BackgroundPicture";
// Styled Components
import {
    RotatingCircle, //
    BackgroundShape,
    SimpleBackgroundShape,
    IntroductionScreenBaseContent as Content,
    IntroductionScreenBaseWrapper as Wrapper,
} from "./_styled_components";

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
        <Wrapper
            id={LANDING_PAGE_SECTIONS.INTRODUCTION_SCREEN}
            className={[
                displayAnimations ? "display-intro-animations" : "skip-intro-animation", //
                props.scrollButtonIsHovered ? "scroll-button-is-hovered" : "",
            ].join(" ")}
        >
            <BackgroundPicture scrollButtonIsHovered={props.scrollButtonIsHovered} />

            {(() => {
                if (renderContent) {
                    return (
                        <>
                            <RotatingCircle id={INTRODUCTION_SCREEN.SMALL_CIRCLE} />
                            {props.renderBigCircle && <RotatingCircle id={INTRODUCTION_SCREEN.BIG_CIRCLE} />}
                            {props.elementsOutsideContent}
                            <Content>{props.children}</Content>
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
        </Wrapper>
    );
};

export default IntroductionScreenBase;
