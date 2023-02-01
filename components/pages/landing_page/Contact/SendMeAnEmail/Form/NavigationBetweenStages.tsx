// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepButton from "@mui/material/StepButton";
// Styled components
const StyledStepper = styled(Stepper)(({ theme }) => ({
    margin: "24px 0 28px 0", //
    animation: `${fadeFromLeft} .2s .2s linear backwards`,
    ".MuiStepLabel-label": {
        fontWeight: 500,
    },
    maxWidth: "360px",
}));

const NavigationBetweenStages: FunctionComponent = (props) => {
    const { setFormStage, formStage } = useSendEmailContext();

    return (
        <StyledStepper nonLinear className="navigation-between-stages">
            <Step active={formStage === "GENERAL_PURPOSE"} completed={false}>
                <StepButton color="inherit" onClick={() => setFormStage("GENERAL_PURPOSE")} className="single-nagivation-step one">
                    General purpose
                </StepButton>
            </Step>
            <Step active={formStage === "CONTACT_DETAILS"} completed={false}>
                <StepButton color="inherit" onClick={() => setFormStage("CONTACT_DETAILS")} className="single-nagivation-step two">
                    Contact details
                </StepButton>
            </Step>
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
