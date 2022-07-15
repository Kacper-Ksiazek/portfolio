// Tools
import { useEffect } from "react";
import { styled } from "@mui/system";
import fadeFromTop from "@/components/_keyframes/fadeFromTop";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
import useFormStageOne from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useFormStageOne";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
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
    const { everythingIsValid, ...formStageOneContext } = useFormStageOne();
    const { setBlockContinueButton } = useManagementContext();

    useEffect(() => {
        setBlockContinueButton(!everythingIsValid);
    }, [everythingIsValid, setBlockContinueButton]);

    return (
        <>
            <StyledInput
                label="Your name" //
                color="secondary"
                value={formStageOneContext.author}
                onChange={(e) => formStageOneContext.setAuthor(e.target.value)}
                error={formStageOneContext.authorIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .2s linear both`,
                }}
            />
            <StyledInput
                label="Subject" //
                color="secondary"
                value={formStageOneContext.subject}
                onChange={(e) => formStageOneContext.setSubject(e.target.value)}
                error={formStageOneContext.subjectIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .3s linear both`,
                }}
            />
            <StyledInput
                label="Message" //
                color="secondary"
                multiline
                rows={4}
                value={formStageOneContext.message}
                onChange={(e) => formStageOneContext.setMessage(e.target.value)}
                error={formStageOneContext.messageIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .4s linear both`,
                }}
            />
            <LengthNotification>{formStageOneContext.message.length} / 500</LengthNotification>
        </>
    );
};

export default FormStage1;
