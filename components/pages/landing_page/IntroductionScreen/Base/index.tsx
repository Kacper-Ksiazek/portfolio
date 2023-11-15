// Tools
import { useEffect, useState } from "react";
import { useIntroAnimationControls } from "./hooks";
import { CSS_REFERENCES as LANDING_PAGE_SECTIONS } from "landing_page/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Content from "./Content";
import BackgroundPicture from "./BackgroundPicture";
// Styled components
import Wrapper from "./Wrapper";

interface IntroductionScreenBaseProps {
    children: ReactNode;
    renderBigCircle: boolean;
    scrollButtonIsHovered: boolean;
    /** Place passed ReactNode **besides the content element** instead of inside */
    elementsOutsideContent?: ReactNode;
}

const IntroductionScreenBase: FunctionComponent<IntroductionScreenBaseProps> = (props) => {
    const { contentToRender } = useIntroAnimationControls();

    const [displayIntroAnimationsForWrapper, setDisplayIntroAnimationsForWrapper] = useState<boolean>(false);

    useEffect(() => {
        if (contentToRender === "INTRO_ANIMATIONS") {
            setDisplayIntroAnimationsForWrapper(true);
        }
    }, [contentToRender]);

    return (
        <Wrapper
            id={LANDING_PAGE_SECTIONS.INTRODUCTION_SCREEN}
            displayIntroAnimations={displayIntroAnimationsForWrapper}
            className={[props.scrollButtonIsHovered ? "scroll-button-is-hovered" : ""].join(" ")}
        >
            <BackgroundPicture scrollButtonIsHovered={props.scrollButtonIsHovered} />

            <Content
                contentToRender={contentToRender} //
                ActualContentProps={{
                    elementsOutsideContent: props.elementsOutsideContent,
                    renderBigCircle: props.renderBigCircle,
                }}
                IntroBigRectanglesAnimationProps={{}}
            >
                {props.children}
            </Content>
        </Wrapper>
    );
};

export default IntroductionScreenBase;
