// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import BackgroundRectangle from "./BackgroundRectangle";
import SendMeAnEmailWrapperBase from "./SendMeAnEmailWrapperBase";

const SendMeAnEmailWrapper: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
        <SendMeAnEmailWrapperBase id="send-me-en-email-wrapper">
            <BackgroundRectangle className="background-rectangle bottom" />
            <BackgroundRectangle className="background-rectangle top" />
            <div className="content">{props.children}</div>
        </SendMeAnEmailWrapperBase>
    );
};

export default SendMeAnEmailWrapper;
