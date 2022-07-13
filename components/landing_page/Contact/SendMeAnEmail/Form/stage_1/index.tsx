// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/_keyframes/fadeFromTop";
import useSendMeAnEmailContext from "../../hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "@/components/landing_page/Contact/SendMeAnEmail/_styled_components/StyledInput";

const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
    animation: `${fadeFromTop} .2s .4s linear both`,
}));

const FormStage1: FunctionComponent = (props) => {
    const { author, subject, message, checkWhetherAFieldIsValid } = useSendMeAnEmailContext();

    return (
        <>
            <StyledInput
                label="Your name" //
                color="secondary"
                value={author.value}
                onChange={(e) => author.setValue(e.target.value)}
                error={checkWhetherAFieldIsValid("author")}
            />
            <StyledInput
                label="Subject" //
                color="secondary"
                value={subject.value}
                onChange={(e) => subject.setValue(e.target.value)}
                error={checkWhetherAFieldIsValid("subject")}
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
        </>
    );
};

export default FormStage1;
