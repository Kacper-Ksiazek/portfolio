// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { GeneralContactSection, SendEmailSubsection } from "./@types";
// Other components
import WaysToReachMe from "./WaysToReachMe";
import SendMeAnEmail from "./SendMeAnEmail";
import ContactWrapper from "./ContactWrapper";
import MapContextProvider from "./mapContext/Provider";
// Styled Components

const CONTENT_HIDING_ANIMATION: number = 300;

const Contact: FunctionComponent = () => {
    const [sendEmailSubsection, setSendEmailSubsection] = useState<SendEmailSubsection>("GENERAL_PURPOSE");
    const [currentGeneralSection, _setCurrentGeneralSection] = useState<GeneralContactSection>("WAYS_TO_REACH_ME");
    const [hideContent, setHideContent] = useState<boolean>(false);

    function setCurrentGeneralSection(val: GeneralContactSection) {
        if (hideContent) return;

        setHideContent(true);
        setTimeout(() => {
            setHideContent(false);
            _setCurrentGeneralSection(val);
        }, CONTENT_HIDING_ANIMATION + 100);
    }

    return (
        <ContactWrapper
            currentGeneralSection={currentGeneralSection} //
            setCurrentGeneralSection={setCurrentGeneralSection}
            hideContent={hideContent}
        >
            {(() => {
                switch (currentGeneralSection) {
                    case "WAYS_TO_REACH_ME":
                        return <WaysToReachMe writeToMe={() => setCurrentGeneralSection("SEND_EMAIL_FORM")} />;
                    case "SEND_EMAIL_FORM":
                        return (
                            <SendMeAnEmail
                                sendEmailSubsection={sendEmailSubsection} //
                                setSendEmailSubsection={setSendEmailSubsection}
                            />
                        );
                }
            })()}
        </ContactWrapper>
    );
};

const ContactWithMapContext: FunctionComponent = () => {
    return (
        <MapContextProvider>
            <Contact />
        </MapContextProvider>
    );
};

export default ContactWithMapContext;
