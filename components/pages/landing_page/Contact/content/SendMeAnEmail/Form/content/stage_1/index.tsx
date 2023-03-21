// Tools
import { styled } from "@mui/material";
import { fadeFromTop } from "@/components/keyframes/intro";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
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

const EmailFormSubsection1: FunctionComponent = () => {
    const { form, updateForm, invalidFormFields } = useFormContext();

    return (
        <>
            <StyledInput
                label="Your name" //
                color="secondary"
                value={form.author}
                onChange={(e) => updateForm({ author: e.target.value })}
                error={form.author !== "" && invalidFormFields.includes("author")}
            />
            <StyledInput
                label="Subject" //
                color="secondary"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
                error={form.subject !== "" && invalidFormFields.includes("subject")}
            />
            <StyledInput
                label="Message" //
                color="secondary"
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
                error={form.message !== "" && invalidFormFields.includes("message")}
            />
            <LengthNotification>{form.message.length} / 500</LengthNotification>
        </>
    );
};

export default EmailFormSubsection1;
