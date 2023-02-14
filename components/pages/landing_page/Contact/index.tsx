// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { GeneralContactSection, EmailFormSubsection } from "./@types";
// Other components
import Content from "./content";
import ContactWrapper from "./ContactWrapper";
import MapContextProvider from "./mapContext/Provider";
// Styled Components

const CONTENT_HIDING_ANIMATION: number = 300;

const Contact: FunctionComponent = () => {
    const [emailFormSubsection, setEmailFormSubsection] = useState<EmailFormSubsection>("CONTACT_DETAILS");
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
            emailFormSubsection={emailFormSubsection}
            setCurrentGeneralSection={setCurrentGeneralSection}
            hideContent={hideContent}
        >
            <Content
                currentGeneralSection={currentGeneralSection} //
                emailFormSubsection={emailFormSubsection}
                writeToMe={writeToMe}
                setEmailFormSubsection={setEmailFormSubsection}
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
