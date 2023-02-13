// Tools
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSendEmailContext } from "./hooks/useSendEmailContext";
import { useSendRequestQuery } from "./hooks/queries/useSendRequestQuery";
import { useMapContext } from "@/components/pages/landing_page/Contact/hooks/useMapContext";
// Types
import type { FunctionComponent } from "react";
import type { Status } from "./contexts/@types";
import type { SendEmailSubsection } from "@/components/pages/landing_page/Contact/@types";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
import { SendEmailContextProvider } from "./contexts";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmail: FunctionComponent = () => {
    const [specialWayOfRendering, setSpecialWayOfRendering] = useState<null | "displayOutroAnimation" | "hideIt">(null);
    const [alreadySentEmail, setAlreadySentEmail] = useLocalStorage<string | null>("email-has-been-already-send", null, { keepOriginalValue: true });

    const { changeMapStatus } = useMapContext();
    const { updateRequest, request } = useSendEmailContext();

    const sendRequest = useSendRequestQuery(setAlreadySentEmail);

    useEffect(() => {
        if (specialWayOfRendering === null && request.status === "fillingForm") return;

        if ((["fillingForm", "form_after_error", "form_after_success"] as Status[]).includes(request.status)) {
            setSpecialWayOfRendering(null);
            // ---
            // Let the outro animation end and then simply stop rendering <ProcessRequest/> component
            if ((["form_after_error", "form_after_success"] as Status[]).includes(request.status)) {
                setTimeout(() => {
                    updateRequest({ status: "fillingForm" });
                }, 300);
            }
        }
        //
        else if (specialWayOfRendering === null) {
            setSpecialWayOfRendering("displayOutroAnimation");
            setTimeout(() => {
                setSpecialWayOfRendering("hideIt");
            }, 800);
        }
    }, [specialWayOfRendering, request.status, updateRequest]);

    useEffect(() => {
        const status = request.status;

        if (status === "error" || status === "staged_error") {
            changeMapStatus("error");
        } //
        else if (status === "success" || status === "staged_success" || alreadySentEmail) {
            changeMapStatus("success");
        } //
        else changeMapStatus(null);
    }, [request.status, changeMapStatus, alreadySentEmail]);

    return (
        <SendMeAnEmailWrapper id="send-me-en-email-wrapper">
            {(() => {
                if (specialWayOfRendering !== "hideIt" && !alreadySentEmail) {
                    return (
                        <Form
                            displayOutroAnimation={specialWayOfRendering === "displayOutroAnimation"} //
                            sendRequest={sendRequest}
                        />
                    );
                }
                return <></>;
            })()}

            {(() => {
                if (request.status !== "fillingForm" || alreadySentEmail) {
                    return (
                        <ProcessRequest
                            sendRequest={sendRequest} //
                            emailHasBeenAlreadySent={Boolean(alreadySentEmail)}
                        />
                    );
                }
            })()}
        </SendMeAnEmailWrapper>
    );
};

interface SendMeAnEmailContextsWrapperProps {
    sendEmailSubsection: SendEmailSubsection;
    setSendEmailSubsection: (val: SendEmailSubsection) => void;
}

const SendMeAnEmailContextsWrapper: FunctionComponent<SendMeAnEmailContextsWrapperProps> = (props) => {
    return (
        <SendEmailContextProvider
            sendEmailSubsection={props.sendEmailSubsection} //
            _setSendEmailSubsection={props.setSendEmailSubsection}
        >
            {/*  */}
            <SendMeAnEmail />
            {/*  */}
        </SendEmailContextProvider>
    );
};

export default SendMeAnEmailContextsWrapper;
