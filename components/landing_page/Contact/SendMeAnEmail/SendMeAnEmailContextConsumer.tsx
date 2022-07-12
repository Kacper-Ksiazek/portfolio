// Tools
import { useEffect } from "react";
import useBetterState from "@/hooks/useBetterState";
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmailContextConsumer: FunctionComponent = (props) => {
    const { status } = useSendMeAnEmailContext();
    const extraCircumstancesOfRenderingForm = useBetterState<null | "displayOutroAnimation" | "hideIt">(null);

    const sendRequest = () => {
        status.setValue("pending");
        extraCircumstancesOfRenderingForm.setValue("displayOutroAnimation");
        setTimeout(() => {
            extraCircumstancesOfRenderingForm.setValue("hideIt");
        }, 800);
    };

    useEffect(() => {
        if (status.value === "fillingForm") extraCircumstancesOfRenderingForm.setValue(null);
    }, [status.value, extraCircumstancesOfRenderingForm]);

    return (
        <SendMeAnEmailWrapper>
            {(() => {
                if (extraCircumstancesOfRenderingForm.value !== "hideIt") {
                    return (
                        <Form
                            displayOutroAnimation={extraCircumstancesOfRenderingForm.value === "displayOutroAnimation"} //
                            sendRequest={sendRequest}
                        />
                    );
                }
            })()}

            {(() => {
                if (status.value !== "fillingForm") {
                    return <ProcessRequest />;
                }
            })()}
        </SendMeAnEmailWrapper>
    );
};

export default SendMeAnEmailContextConsumer;
