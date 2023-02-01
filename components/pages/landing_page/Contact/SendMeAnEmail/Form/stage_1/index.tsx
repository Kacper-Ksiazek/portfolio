// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import StyledInput from "@/components/pages/landing_page/Contact/SendMeAnEmail/_styled_components/StyledInput";

const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
    animation: `${fadeFromTop} .2s .4s linear backwards`,
}));

const FormStage1: FunctionComponent = (props) => {
    const { form, updateForm, invalidFormFields } = useSendEmailContext();

    return (
        <>
            <StyledInput
                label="Your name" //
                color="secondary"
                value={form.author}
                onChange={(e) => updateForm({ author: e.target.value })}
                error={invalidFormFields.includes("author")}
                sx={{
                    animation: `${fadeFromLeft} .2s .2s linear backwards`,
                }}
            />
            <StyledInput
                label="Subject" //
                color="secondary"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
                error={invalidFormFields.includes("subject")}
                sx={{
                    animation: `${fadeFromLeft} .2s .3s linear backwards`,
                }}
            />
            <StyledInput
                label="Message" //
                color="secondary"
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
                error={invalidFormFields.includes("message")}
                sx={{
                    animation: `${fadeFromLeft} .2s .4s linear backwards`,
                }}
            />
            <LengthNotification>{form.message.length} / 500</LengthNotification>
        </>
    );
};

export default FormStage1;
