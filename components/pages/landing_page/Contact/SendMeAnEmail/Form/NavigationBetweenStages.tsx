// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import useFormStageOne from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useFormStageOne";
import useFormStageTwo from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useFormStageTwo";
import useManagementContext from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepButton from "@mui/material/StepButton";
// Styled components
const StyledStepper = styled(Stepper)(({ theme }) => ({
    marginBottom: "30px", //
    animation: `${fadeFromLeft} .2s .2s linear backwards`,
    ".MuiStepLabel-label": {
        fontWeight: 500,
    },
    maxWidth: "360px",
}));

const NavigationBetweenStages: FunctionComponent = (props) => {
    const formStageOne = useFormStageOne();
    const formStageTwo = useFormStageTwo();
    const { formFillingStage, setFormFillingStage } = useManagementContext();

    return (
        <StyledStepper nonLinear className="navigation-between-stages">
            <Step active={formFillingStage === "purpose"} completed={formStageOne.everythingIsValid}>
                <StepButton color="inherit" onClick={() => setFormFillingStage("purpose")} className="single-nagivation-step one">
                    General purpose
                </StepButton>
            </Step>
            <Step active={formFillingStage === "contact_details"} completed={formStageTwo.everythingIsValid}>
                <StepButton color="inherit" onClick={() => setFormFillingStage("contact_details")} className="single-nagivation-step two">
                    Contact details
                </StepButton>
            </Step>
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
