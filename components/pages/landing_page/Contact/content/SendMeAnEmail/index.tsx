// Tools
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useLazyLoadedMapImages, useMapStatusUpdater, useRequestContext, useSendRequestQuery, useSpecialWayOfRendering } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
import ProcessRequest from "./ProcessRequest";
import { RequestContextProvider } from "./contexts/requestContext";
// Styled Components
import SectionWrapper from "../_SectionWrapper";

const SendMeAnEmail: FunctionComponent = () => {
    const { request } = useRequestContext();
    const [alreadySentEmail, setAlreadySentEmail] = useLocalStorage<string | null>("email-has-been-already-send", null, { stickWithOriginalValue: true });

    const specialWayOfRendering = useSpecialWayOfRendering();
    const sendRequest = useSendRequestQuery(setAlreadySentEmail);

    useLazyLoadedMapImages();
    useMapStatusUpdater(request.status, alreadySentEmail);

    return (
        <SectionWrapper id="send-me-en-email-wrapper" sx={{ height: "490px" }}>
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
