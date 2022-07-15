// Tools
import axios from "axios";
import { useEffect } from "react";
import { ManagementContextProvider } from "./contexts/management";
import { FormStageOneContextProvider } from "./contexts/formStageOne";
import { FormStageTwoContextProvider } from "./contexts/formStageTwo";
import useFormStageOne from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useFormStageOne";
import useFormStageTwo from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useFormStageTwo";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmail: FunctionComponent = (props) => {
    const { setRequestStatus, ...managementContext } = useManagementContext();
    const { author, subject, message } = useFormStageOne();
    const { country, email, github, website } = useFormStageTwo();

    const sendRequest = async () => {
        setRequestStatus("pending");
        axios
            .post("./api/send_email", {
                author,
                subject,
                message,
                contact: {
                    email,
                    country: country ? country?.label : "",
                    ...(github.length ? { github } : null),
                    ...(website.length ? { website } : null),
                },
            })
            .then(() => {
                setRequestStatus("success");
                localStorage.setItem("email-has-been-already-send", new Date().toLocaleString());
            })
            .catch((res) => {
                managementContext.setFailedRequestHTTPStatus(res.response.status);
                setRequestStatus("error");
            });
    };

    useEffect(() => {
        if (localStorage && localStorage.getItem("email-has-been-already-send")) {
            setRequestStatus("already_succeeded");
        }
    }, [setRequestStatus]);

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

            {managementContext.requestStatus !== "fillingForm" && <ProcessRequest sendRequest={sendRequest} />}
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
