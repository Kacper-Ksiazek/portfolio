// Tools
import { useEffect } from "react";
import useBetterState from "@/hooks/useBetterState";
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
// Types
import type { Status } from "./context";
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmailContextConsumer: FunctionComponent = (props) => {
    const { status } = useSendMeAnEmailContext();
    const extraCircumstancesOfRenderingForm = useBetterState<null | "displayOutroAnimation" | "hideIt">(null);

    const sendRequest = async () => {
        status.setValue("pending");
        console.log("REQUEST");
    };

    useEffect(() => {
        if ((["fillingForm", "fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(status.value)) {
            extraCircumstancesOfRenderingForm.setValue(null);
            // ---
            // Let the outro animation end and then simply stop rendering <ProcessRequest/> component
            if ((["fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(status.value)) {
                setTimeout(() => {
                    status.setValue("fillingForm");
                }, 300);
            }
        }
        //
        else if (extraCircumstancesOfRenderingForm.value === null) {
            extraCircumstancesOfRenderingForm.setValue("displayOutroAnimation");
            setTimeout(() => {
                extraCircumstancesOfRenderingForm.setValue("hideIt");
            }, 800);
        }
    }, [status.value, status.setValue, extraCircumstancesOfRenderingForm, status]);

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
