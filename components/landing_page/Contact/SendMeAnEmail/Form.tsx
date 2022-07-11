// Tools
import { styled } from "@mui/system";
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
import fadeToBottom from "@/components/_keyframes/fadeToBottom";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "./_styled_components/StyledInput";
import SendMailButton from "./_styled_components/SendMailButton";

const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
}));

const FormWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "&.outro-animation": {
        animation: `${fadeToBottom} .3s linear both`,
    },
}));

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { name, topic, message, checkWhetherAFieldIsValid, disableContinueButton } = useSendMeAnEmailContext();

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
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

            <SendMailButton disabled={disableContinueButton} onClick={props.sendRequest}>
                <span className="text">Send</span>
            </SendMailButton>
        </FormWrapper>
    );
};

export default EmailForm;
