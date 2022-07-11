// Tools
import { styled, keyframes } from "@mui/system";
import useFieldsWithValidation from "./hooks/useFieldsWithValidation";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
import StyledInput from "./_styled_components/StyledInput";
import SendMailButton from "./_styled_components/SendMailButton";
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const SendMeAnEmail: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { message, name, topic, disableContinueButton, checkWhetherAFieldIsValid } = useFieldsWithValidation();

    return (
        <SendMeAnEmailWrapper>
            <h4>Send me an email</h4>
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
            <span className="length-notification">{message.value.length} / 500</span>

            <SendMailButton disabled={disableContinueButton}>
                <span className="text">Send</span>
            </SendMailButton>
        </SendMeAnEmailWrapper>
    );
};

export default SendMeAnEmail;
