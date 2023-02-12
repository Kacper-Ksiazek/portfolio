// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "@/components/atoms/forms/StyledInput";

const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
    animation: `${fadeFromTop} .2s .4s linear backwards`,
}));

const SendEmailSubsection1: FunctionComponent = (props) => {
    const { form, updateForm, invalidFormFields } = useSendEmailContext();

    return (
        <>
            <StyledInput
                label="Your name" //
                color="secondary"
                value={form.author}
                onChange={(e) => updateForm({ author: e.target.value })}
                error={invalidFormFields.includes("author")}
            />
            <StyledInput
                label="Subject" //
                color="secondary"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
                error={invalidFormFields.includes("subject")}
            />
            <StyledInput
                label="Message" //
                color="secondary"
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
                error={invalidFormFields.includes("message")}
            />
            <LengthNotification>{form.message.length} / 500</LengthNotification>
        </>
    );
};

export default SendEmailSubsection1;
