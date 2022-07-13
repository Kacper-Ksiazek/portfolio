// Tools
import useBetterState from "@/hooks/useBetterState";
// Types
import type { FunctionComponent } from "react";
// Other components
import Stage1 from "./stage_1";
import BottomButtons from "./BottomButtons";
// Other components
import { FormWrapper, Header } from "./_styled_components";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const stage = useBetterState<"general_form" | "contact_form" | "recaptcha">("general_form");

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <Header>Send me an email</Header>
            <Stage1 />
            <BottomButtons sendRequest={props.sendRequest} />
        </FormWrapper>
    );
};

export default EmailForm;
