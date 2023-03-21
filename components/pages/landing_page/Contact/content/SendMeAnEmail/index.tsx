// Tools
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRequestContext } from "./hooks/useRequestContext";
import { useSendRequestQuery } from "./hooks/queries/useSendRequestQuery";
import { useSpecialWayOfRendering } from "./hooks/useSpecialWayOfRendering";
import { useMapContext } from "@/components/pages/landing_page/Contact/hooks/useMapContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
import { RequestContextProvider } from "./contexts/requestContext";
// Styled Components
import SectionWrapper from "../_SectionWrapper";

const SendMeAnEmail: FunctionComponent = () => {
    const [alreadySentEmail, setAlreadySentEmail] = useLocalStorage<string | null>("email-has-been-already-send", null, { keepOriginalValue: true });

    const specialWayOfRendering = useSpecialWayOfRendering();
    const sendRequest = useSendRequestQuery(setAlreadySentEmail);

    const { request } = useRequestContext();
    const { changeMapStatus } = useMapContext();

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
        <SectionWrapper id="send-me-en-email-wrapper" sx={{ height: "460px" }}>
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
        </SectionWrapper>
    );
};

const SendMeAnEmailContextsWrapper: FunctionComponent = () => {
    return (
        <RequestContextProvider>
            <SendMeAnEmail />
        </RequestContextProvider>
    );
};

export default SendMeAnEmailContextsWrapper;
