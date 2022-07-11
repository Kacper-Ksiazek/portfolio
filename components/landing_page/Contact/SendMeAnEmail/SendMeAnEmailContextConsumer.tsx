// Tools
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmailContextConsumer: FunctionComponent = (props) => {
    const { status } = useSendMeAnEmailContext();

    return (
        <SendMeAnEmailWrapper>
            <Form />
        </SendMeAnEmailWrapper>
    );
};

export default SendMeAnEmailContextConsumer;
