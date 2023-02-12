// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { GeneralContactSection, SendEmailSubsection } from "./@types";
// Other components
import Content from "./content";
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

    function writeToMe() {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setCurrentGeneralSection("SEND_EMAIL_FORM");
    }

    return (
        <ContactWrapper
            currentGeneralSection={currentGeneralSection} //
            sendEmailSubsection={sendEmailSubsection}
            setCurrentGeneralSection={setCurrentGeneralSection}
            hideContent={hideContent}
        >
            <Content
                currentGeneralSection={currentGeneralSection} //
                sendEmailSubsection={sendEmailSubsection}
                writeToMe={writeToMe}
                setSendEmailSubsection={setSendEmailSubsection}
            />
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
