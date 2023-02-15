// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { EmailFormSubsection, GeneralContactSection } from "../@types";
// Other components
import WaysToReachMe from "./WaysToReachMe";
const SendMeAnEmail = dynamic(() => import("./SendMeAnEmail"));

interface ContactContentProps {
    emailFormSubsection: EmailFormSubsection;
    currentGeneralSection: GeneralContactSection;

    writeToMe: () => void;
    setEmailFormSubsection: (val: EmailFormSubsection) => void;
}

const ContactContent: FunctionComponent<ContactContentProps> = (props) => {
    switch (props.currentGeneralSection) {
        case "WAYS_TO_REACH_ME":
            return <WaysToReachMe writeToMe={props.writeToMe} />;
        case "SEND_EMAIL_FORM":
            return (
                <SendMeAnEmail
                    emailFormSubsection={props.emailFormSubsection} //
                    setEmailFormSubsection={props.setEmailFormSubsection}
                />
            );
    }
};

export default ContactContent;
