// Tools
import { useSectionsParser } from "./hooks/useSectionsParser";
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

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages validSections={validSections} />
            <Content />
            <BottomButtons onContinueButtonClick={proceed} />
        </FormWrapper>
    );
};

export default EmailForm;
