// Tools
import { styled } from "@mui/system";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Step from "./Step";
// Styled components
const StyledStepper = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "12px 0 24px 0",
}));

const NavigationBetweenStages: FunctionComponent = (props) => {
    const { setFormStage, formStage } = useSendEmailContext();

    return (
        <StyledStepper className="navigation-between-stages">
            <Step
                index={1}
                completed={true}
                label="General purpose"
                active={formStage === "GENERAL_PURPOSE"} //
                onClick={() => setFormStage("GENERAL_PURPOSE")}
            />

            <Step
                index={2}
                completed={false}
                label="Contact details"
                active={formStage === "CONTACT_DETAILS"} //
                onClick={() => setFormStage("CONTACT_DETAILS")}
            />

            {/* <Step active={formStage === "CONTACT_DETAILS"} completed={false}>
                <StepButton color="inherit" onClick={() => setFormStage("CONTACT_DETAILS")} className="single-nagivation-step two">
                    Contact details
                </StepButton>
            </Step> */}
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
