// Tools
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
import { CircleOne, CircleTwo } from "./Circles";
import { LineTwo, LineOne, LineThree } from "./_styled_components/Lines";
import IntroductionScreenBaseContent from "./_styled_components/IntroductionScreenBaseContent";
import IntroductionScreenBaseWrapper from "./_styled_components/IntroductionScreenBaseWrapper";

const IntroductionScreenBase: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [renderContent, setRenderContent] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setRenderContent(true);
        }, 2800);
    }, []);

    return (
        <IntroductionScreenBaseWrapper>
            {(() => {
                if (renderContent) {
                    return (
                        <>
                            <CircleOne />
                            <CircleTwo />
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
