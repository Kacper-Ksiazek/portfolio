// Tools
import { useState, useEffect } from "react";
import { useMapContext } from "../hooks/useMapContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSendEmailContext } from "./hooks/useSendEmailContext";
import { useSendRequestQuery } from "./hooks/queries/useSendRequestQuery";
// Types
import type { FunctionComponent } from "react";
import type { Status } from "./contexts/@types";
import type { SendEmailSubsection } from "../@types";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
import { SendEmailContextProvider } from "./contexts";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmail: FunctionComponent = (props) => {
    const [specialWayOfRendering, setSpecialWayOfRendering] = useState<null | "displayOutroAnimation" | "hideIt">(null);
    const [previouslySentEmail, setPreviouslySentEmail] = useLocalStorage<string | null>("email-has-been-already-send", null);

    const { changeMapStatus } = useMapContext();
    const { updateRequest, request } = useSendEmailContext();

    const sendRequest = useSendRequestQuery({ setPreviouslySentEmail });

    useEffect(() => {
        if (specialWayOfRendering === null && request.status === "fillingForm") return;

        if ((["fillingForm", "fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(request.status)) {
            setSpecialWayOfRendering(null);
            // ---
            // Let the outro animation end and then simply stop rendering <ProcessRequest/> component
            if ((["fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(request.status)) {
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

        if (status === "error" || status === "error_but_feigned") {
            changeMapStatus("error");
        } //
        else if (status === "success" || status === "success_but_feigned") {
            changeMapStatus("success");
        } //
        else changeMapStatus(null);
    }, [request.status, changeMapStatus]);

    return (
        <SendMeAnEmailWrapper id="send-me-en-email-wrapper">
            {(() => {
                if (specialWayOfRendering !== "hideIt" || previouslySentEmail) {
                    return (
                        <Form
                            displayOutroAnimation={specialWayOfRendering === "displayOutroAnimation"} //
                            sendRequest={sendRequest}
                        />
                    );
                }
                return <></>;
            })()}

            {(request.status !== "fillingForm" || previouslySentEmail) && (
                <ProcessRequest
                    sendRequest={sendRequest} //
                    emailHasBeenAlreadySent={Boolean(previouslySentEmail)}
                />
            )}
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
