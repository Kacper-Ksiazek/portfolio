// Tools
import { ManagementContextProvider } from "./contexts/management";
import { FormStageOneContextProvider } from "./contexts/formStageOne";
import { FormStageTwoContextProvider } from "./contexts/formStageTwo";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmail: FunctionComponent = (props) => {
    const managementContext = useManagementContext();

    const sendRequest = async () => {
        managementContext.setRequestStatus("pending");
        console.log("REQUEST");
    };

    return (
        <SendMeAnEmailWrapper>
            {(() => {
                if (managementContext.specialWayOfRenderingForm !== "hideIt") {
                    return (
                        <Form
                            displayOutroAnimation={managementContext.specialWayOfRenderingForm === "displayOutroAnimation"} //
                            sendRequest={sendRequest}
                        />
                    );
                }
            })()}

            {managementContext.requestStatus !== "fillingForm" && <ProcessRequest />}
        </SendMeAnEmailWrapper>
    );
};

const SendMeAnEmailContextsWrapper: FunctionComponent = () => {
    return (
        <ManagementContextProvider>
            <FormStageOneContextProvider>
                <FormStageTwoContextProvider>
                    {/*  */}
                    <SendMeAnEmail />
                    {/*  */}
                </FormStageTwoContextProvider>
            </FormStageOneContextProvider>
        </ManagementContextProvider>
    );
};

export default SendMeAnEmailContextsWrapper;
