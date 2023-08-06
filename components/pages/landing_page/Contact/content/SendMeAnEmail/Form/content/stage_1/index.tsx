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

const EmailFormSubsection1: FunctionComponent<{ color: "primary" | "secondary" }> = (props) => {
    const { form, updateForm, invalidFormFields } = useFormContext();

    return (
        <>
            <StyledInput
                label="Your name" //
                color={props.color}
                value={form.author}
                onChange={(e) => updateForm({ author: e.target.value })}
                error={form.author !== "" && invalidFormFields.includes("author")}
                componentThemeID="TEXT_PRIMARY"
            />
            <StyledInput
                label="Subject" //
                color={props.color}
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
                error={form.subject !== "" && invalidFormFields.includes("subject")}
                componentThemeID="TEXT_PRIMARY"
            />
            <StyledInput
                label="Message" //
                color={props.color}
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
                error={form.message !== "" && invalidFormFields.includes("message")}
                componentThemeID="TEXT_PRIMARY"
            />
            <LengthNotification>{form.message.length} / 500</LengthNotification>
        </>
    );
};

export default EmailFormSubsection1;
