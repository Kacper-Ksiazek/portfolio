// Tools
import theme from "@/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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
    const [renderContent, setRenderContent] = useState<boolean>(false);

    const [displayAnimations, setDisplayAnimations] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        if (router.asPath.split("skipIntroductionAnimationEvenThoughItsCool=")[1]) {
            setRenderContent(true);
            setDisplayAnimations(false);
        } else {
            setDisplayAnimations(true);
            if (document.body) {
                document.body.style.position = "fixed";
                document.body.style.height = "100vh";
                document.body.style.overflowY = "hidden";
            }
            setTimeout(() => {
                setRenderContent(true);
            }, 2800);

            setTimeout(() => {
                document.body.style.position = "static";
                document.body.style.height = "auto";
                document.body.style.overflowY = "visible";
            }, 6000);
        }
    }, [router.query, router.asPath]);

    return (
        <IntroductionScreenBaseWrapper
            className={[
                displayAnimations ? "display-intro-animations" : "skip-intro-animation", //
                props.scrollButtonIsHovered ? "scroll-button-is-hovered" : "",
            ].join(" ")}
        >
            <PreviewBackgroundPicture />
            <BackgroundPicture scrollButtonIsHovered={props.scrollButtonIsHovered} />

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
                                backgroundColor={theme.palette.secondary.main} //
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
