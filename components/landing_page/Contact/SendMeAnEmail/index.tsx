// Types
import type { FunctionComponent } from "react";
// Other components
import SendMeAnEmailContextProvider from "./SendMeAnEmailContextProvider";
import SendMeAnEmailContextConsumer from "./SendMeAnEmailContextConsumer";

const SendMeAnEmail: FunctionComponent = (props) => {
    return (
        <SendMeAnEmailContextProvider>
            <SendMeAnEmailContextConsumer />
        </SendMeAnEmailContextProvider>
    );
};

export default SendMeAnEmail;
