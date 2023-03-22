// Tools
import { useContactNavigation, useFormContext } from "@/components/pages/landing_page/Contact/hooks";
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
    const contactNavigationContext = useContactNavigation();
    const { validSections } = useFormContext();

    const emailFormSubsection = contactNavigationContext.stages.form.current;

    const everythingHasBeenFulfilledProperly: boolean = Object.values(validSections).indexOf(false) === -1;

    function proceed() {
        if (everythingHasBeenFulfilledProperly) return props.sendRequest();

        if (emailFormSubsection === "GENERAL_PURPOSE") {
            contactNavigationContext.updaters.setEmailFormSubsection(validSections.CONTACT_DETAILS ? "RECAPTCHA" : "CONTACT_DETAILS");
        } //
        else if (emailFormSubsection === "CONTACT_DETAILS") {
            contactNavigationContext.updaters.setEmailFormSubsection(validSections.GENERAL_PURPOSE ? "RECAPTCHA" : "GENERAL_PURPOSE");
        }
    }

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages validSections={validSections} />
            <Content />
            <BottomButtons onContinueButtonClick={proceed} continueButtonMsg={everythingHasBeenFulfilledProperly ? "Send message" : "Continue"} />
        </FormWrapper>
    );
};

export default EmailForm;
