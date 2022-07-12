// Tools
import useRequestFaker from "./hooks/useRequestFaker";
import useSendMeAnEmailContext from "../hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ButtonWIthTooltip from "../_utils_components/ButtonWIthTooltip";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled Components
import StyledInput from "../_styled_components/StyledInput";
import SendMailButton from "../_styled_components/SendMailButton";
import { ButtonsBottomWrapper, FormWrapper, Header, LengthNotification, SimpleFlexBox } from "./_styled_components";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { name, topic, message, checkWhetherAFieldIsValid, disableContinueButton } = useSendMeAnEmailContext();
    const { feignSucceededRequest, feignInvalidRequest } = useRequestFaker();

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

                <SimpleFlexBox>
                    <ButtonWIthTooltip
                        color="error" //
                        tooltip="Feign an invalid request"
                        onClick={feignInvalidRequest}
                        icon={<CodeOff />}
                    />
                    <ButtonWIthTooltip
                        color="success" //
                        tooltip="Feign a succeeded request"
                        onClick={feignSucceededRequest}
                        icon={<CodeOff />}
                    />
                </SimpleFlexBox>
            </ButtonsBottomWrapper>
        </FormWrapper>
    );
};

export default EmailForm;
