// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { SendEmailSubsection, GeneralContactSection } from "../@types";
// Other components
import WaysToReachMe from "./WaysToReachMe";
const SendMeAnEmail = dynamic(() => import("./SendMeAnEmail"));

interface ContactContentProps {
    sendEmailSubsection: SendEmailSubsection;
    currentGeneralSection: GeneralContactSection;

    writeToMe: () => void;
    setSendEmailSubsection: (val: SendEmailSubsection) => void;
}

const ContactContent: FunctionComponent<ContactContentProps> = (props) => {
    switch (props.currentGeneralSection) {
        case "WAYS_TO_REACH_ME":
            return <WaysToReachMe writeToMe={props.writeToMe} />;
        case "SEND_EMAIL_FORM":
            return (
                <SendMeAnEmail
                    sendEmailSubsection={props.sendEmailSubsection} //
                    setSendEmailSubsection={props.setSendEmailSubsection}
                />
            );
    }
};

export default ContactContent;
