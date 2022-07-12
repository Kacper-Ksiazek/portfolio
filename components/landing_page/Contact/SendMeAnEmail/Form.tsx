// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
import fadeFromTop from "@/components/_keyframes/fadeFromTop";
import fadeToBottom from "@/components/_keyframes/fadeToBottom";
import fadeFromBottom from "@/components/_keyframes/fadeFromBottom";
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "./_styled_components/StyledInput";
import SendMailButton from "./_styled_components/SendMailButton";

const Header = styled("h4")(({ theme }) => ({
    fontSize: "32px",
    margin: "0 0 20px 0",
    fontFamily: "Montserrat Alternates",
    fontWeight: 700,
    userSelect: "none",
    animation: `${fadeFromLeft} .2s both linear .1s`,
}));

const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
    animation: `${fadeFromTop} .2s .4s linear both`,
}));

const FormWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "&.outro-animation": {
        animation: `${fadeToBottom} .3s linear both`,
    },
    ".MuiFormControl-root": {
        "&:nth-of-type(1)": {
            animation: `${fadeFromLeft} .2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeFromLeft} .2s .1s linear both`,
        },
        "&:nth-of-type(3)": {
            animation: `${fadeFromLeft} .2s .2s linear both`,
        },
    },
    "&>button": {
        animation: `${fadeFromLeft} .2s .3s linear both`,
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

            <SendMailButton disabled={disableContinueButton} onClick={props.sendRequest}>
                <span className="text">Send</span>
            </SendMailButton>
        </FormWrapper>
    );
};

export default EmailForm;
