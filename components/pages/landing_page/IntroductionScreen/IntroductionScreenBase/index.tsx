// Tools
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
import { CircleOne, CircleTwo } from "./Circles";
import { LineTwo, LineOne, LineThree } from "./_styled_components/Lines";
import IntroductionScreenBaseContent from "./_styled_components/IntroductionScreenBaseContent";
import IntroductionScreenBaseWrapper from "./_styled_components/IntroductionScreenBaseWrapper";

interface IntroductionScreenBaseProps {
    children: ReactNode;
    renderBigCircle: boolean;
    /** Place passed ReactNode **besides the content element** instead of inside */
    elementsOutsideContent?: ReactNode;
}

const IntroductionScreenBase: FunctionComponent<IntroductionScreenBaseProps> = (props) => {
    const [renderContent, setRenderContent] = useState<boolean>(false);

    const [displayAnimations, setDisplayAnimations] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        if (router.query.hasOwnProperty("skipIntroductionAnimationEvenThoughItsCool")) {
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
    }, [router.query]);

    return (
        <IntroductionScreenBaseWrapper className={displayAnimations ? "display-intro-animations" : "skip-intro-animation"}>
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
                            <LineOne />
                            <LineTwo />
                            <LineThree />
                        </>
                    );
                }
            })()}
        </IntroductionScreenBaseWrapper>
    );
};

export default IntroductionScreenBase;
