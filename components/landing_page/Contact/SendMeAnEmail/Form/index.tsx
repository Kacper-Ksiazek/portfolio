// Tools
import useSendMeAnEmailContext from "../hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "../_styled_components/StyledInput";
import SendMailButton from "../_styled_components/SendMailButton";
import { ButtonsBottomWrapper, FormWrapper, Header, LengthNotification } from "./_styled_components";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { name, topic, message, checkWhetherAFieldIsValid, disableContinueButton } = useSendMeAnEmailContext();

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <Header>Send me an email</Header>

            <StyledInput
                label="Your name" //
                color="secondary"
                value={name.value}
                onChange={(e) => name.setValue(e.target.value)}
                error={checkWhetherAFieldIsValid("name")}
            />
            <StyledInput
                label="Topic" //
                color="secondary"
                value={topic.value}
                onChange={(e) => topic.setValue(e.target.value)}
                error={checkWhetherAFieldIsValid("topic")}
            />
            <StyledInput
                label="Message" //
                color="secondary"
                multiline
                rows={4}
                value={message.value}
                onChange={(e) => message.setValue(e.target.value)}
                error={checkWhetherAFieldIsValid("message")}
            />
            <LengthNotification>{message.value.length} / 500</LengthNotification>

            <ButtonsBottomWrapper>
                <SendMailButton disabled={disableContinueButton} onClick={props.sendRequest}>
                    <span className="text">Send</span>
                </SendMailButton>
            </ButtonsBottomWrapper>
        </FormWrapper>
    );
};

export default EmailForm;
