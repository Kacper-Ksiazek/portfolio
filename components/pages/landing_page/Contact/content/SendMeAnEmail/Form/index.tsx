// Tools
import { useSectionsParser } from "./hooks/useSectionsParser";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Content from "./content";
import BottomButtons from "./BottomButtons";
import NavigationBetweenStages from "./navigation";
// Styled Components
import FormWrapper from "./FormWrapper";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { validSections, proceed } = useSectionsParser(props.sendRequest);
    const { emailFormSubsection, emailFormSubsectionIsChanging } = useSendEmailContext();

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages validSections={validSections} />
            <Content
                emailFormSubsection={emailFormSubsection} //
                emailFormSubsectionIsChanging={emailFormSubsectionIsChanging}
            />
            <BottomButtons onContinueButtonClick={proceed} />
        </FormWrapper>
    );
};

export default EmailForm;
