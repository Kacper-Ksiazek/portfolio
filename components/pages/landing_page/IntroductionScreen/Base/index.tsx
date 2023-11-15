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
    const { contentToRender } = useIntroAnimationControls();

    return (
        <Wrapper
            id={LANDING_PAGE_SECTIONS.INTRODUCTION_SCREEN}
            displayIntroAnimations={contentToRender === "INTRO_ANIMATIONS"}
            className={[props.scrollButtonIsHovered ? "scroll-button-is-hovered" : ""].join(" ")}
        >
            <BackgroundPicture scrollButtonIsHovered={props.scrollButtonIsHovered} />

            {(() => {
                if (contentToRender === "INTRODUCTION_SCREEN_CONTENT") {
                    return (
                        <>
                            <RotatingCircle id={INTRODUCTION_SCREEN.SMALL_CIRCLE} />
                            {props.renderBigCircle && <RotatingCircle id={INTRODUCTION_SCREEN.BIG_CIRCLE} />}
                            {props.elementsOutsideContent}
                            <Content>{props.children}</Content>
                        </>
                    );
                } else if (contentToRender === "INTRO_ANIMATIONS") {
                    return (
                        <>
                            <BackgroundShape color="BLACK" />
                            <BackgroundShape color="SECONDARY" />
                            <SimpleBackgroundShape />
                        </>
                    );
                }
            })()}
        </Wrapper>
    );
};

export default IntroductionScreenBase;
