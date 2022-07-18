// Tools
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
import { LineTwo, LineOne, LineThree } from "./_styled_components/Lines";
import IntroductionScreenBaseContent from "./_styled_components/IntroductionScreenBaseContent";
import IntroductionScreenBaseWrapper from "./_styled_components/IntroductionScreenBaseWrapper";

const IntroductionScreenBase: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
        <IntroductionScreenBaseWrapper>
            <LineOne />
            <LineTwo />
            <LineThree />
            {/* <IntroductionScreenBaseContent>{props.children}</IntroductionScreenBaseContent> */}
        </IntroductionScreenBaseWrapper>
    );
};

export default IntroductionScreenBase;
