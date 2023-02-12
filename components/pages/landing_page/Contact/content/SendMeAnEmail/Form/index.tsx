// Types
import type { FunctionComponent } from "react";
// Other components
import Content from "./content";
import BottomButtons from "./BottomButtons";
import NavigationBetweenStages from "./navigation";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Styled Components
import FormWrapper from "./FormWrapper";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { sendEmailSubsection, setSendEmailSubsection, sendEmailSubsectionIsChanging } = useSendEmailContext();

    const onContinueButtonClick = () => {
        if (sendEmailSubsection === "GENERAL_PURPOSE") setSendEmailSubsection("CONTACT_DETAILS");
        else if (sendEmailSubsection === "CONTACT_DETAILS") setSendEmailSubsection("RECAPTCHA");
        else props.sendRequest();
    };

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages />
            <Content
                sendEmailSubsection={sendEmailSubsection} //
                sendEmailSubsectionIsChanging={sendEmailSubsectionIsChanging}
            />
            <BottomButtons onContinueButtonClick={onContinueButtonClick} />
        </FormWrapper>
    );
};

export default EmailForm;
