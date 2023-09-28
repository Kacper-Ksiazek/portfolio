// Tools
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { SELECTORS } from "landing_page/css_references";
import { useContactNavigation, useFormContext } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContactWrapper from "./ContactWrapper";
import WaysToReachMe from "./content/WaysToReachMe";
import { MapContextProvider, ContactNavigationContextProvider, FormContextProvider } from "./contexts";

const SendMeAnEmail = dynamic(() => import("./content/SendMeAnEmail"));
// Styled Components

const Contact: FunctionComponent = () => {
    const navigationContext = useContactNavigation();
    const { validSections } = useFormContext();

    function writeToMe() {
        const el = document.getElementById(SELECTORS.CONTACT_ME);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        navigationContext.updaters.setCurrentGeneralSection("SEND_EMAIL_FORM");
    }

    // Prevent from going back to the once approved recaptcha
    const emailFormSubsection = navigationContext.stages.form.current;
    const generalSection = navigationContext.stages.generalSection.current;

    useEffect(() => {
        if (emailFormSubsection === "RECAPTCHA" && generalSection === "WAYS_TO_REACH_ME" && validSections.RECAPTCHA) {
            navigationContext.updaters.setEmailFormSubsection("GENERAL_PURPOSE");
        }
    }, [emailFormSubsection, generalSection, navigationContext.updaters, validSections]);

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
            <FormContextProvider>
                <MapContextProvider>
                    <Contact />
                </MapContextProvider>
            </FormContextProvider>
        </ContactNavigationContextProvider>
    );
};

export default ContactWithContexts;
