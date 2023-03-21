// Tools
import dynamic from "next/dynamic";
import { useContactNavigation } from "./hooks/useContactNavigation";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContactWrapper from "./ContactWrapper";
import WaysToReachMe from "./content/WaysToReachMe";
import { MapContextProvider, ContactNavigationContextProvider } from "./contexts";

const SendMeAnEmail = dynamic(() => import("./content/SendMeAnEmail"));
// Styled Components

const Contact: FunctionComponent = () => {
    const navigationContext = useContactNavigation();

    function writeToMe() {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        navigationContext.updaters.setCurrentGeneralSection("SEND_EMAIL_FORM");
    }

    return (
        <ContactWrapper>
            {(() => {
                switch (navigationContext.stages.generalSection.current) {
                    case "WAYS_TO_REACH_ME":
                        return <WaysToReachMe writeToMe={writeToMe} />;
                    case "SEND_EMAIL_FORM":
                        return <SendMeAnEmail />;
                }
            })()}
        </ContactWrapper>
    );
};

const ContactWithContexts: FunctionComponent = () => {
    return (
        <ContactNavigationContextProvider>
            <MapContextProvider>
                <Contact />
            </MapContextProvider>
        </ContactNavigationContextProvider>
    );
};

export default ContactWithContexts;
