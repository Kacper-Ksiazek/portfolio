// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepButton from "@mui/material/StepButton";
// Styled components
const StyledStepper = styled(Stepper)(({ theme }) => ({
    marginBottom: "30px", //
    animation: `${fadeFromLeft} .2s .2s linear both`,
}));

const NavigationBetweenStages: FunctionComponent = (props) => {
    return (
        <StyledStepper>
            <Step>
                <StepButton color="inherit">General purpose</StepButton>
            </Step>
            <Step>
                <StepButton color="inherit" disabled>
                    Contact details
                </StepButton>
            </Step>
            <Step>
                <StepButton color="inherit" disabled>
                    ReCAPTCHA
                </StepButton>
            </Step>
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
