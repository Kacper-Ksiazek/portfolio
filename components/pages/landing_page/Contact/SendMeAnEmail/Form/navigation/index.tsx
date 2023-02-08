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
    margin: "0px 0 24px 0",
}));

const NavigationBetweenStages: FunctionComponent = (props) => {
    const { setSendEmailSubsection, sendEmailSubsection } = useSendEmailContext();

    return (
        <StyledStepper className="navigation-between-stages">
            <Step
                index={1}
                completed={true}
                label="General purpose"
                active={sendEmailSubsection === "GENERAL_PURPOSE"} //
                onClick={() => {
                    if (sendEmailSubsection === "GENERAL_PURPOSE") return;
                    setSendEmailSubsection("GENERAL_PURPOSE");
                }}
            />

            <Step
                index={2}
                completed={false}
                label="Contact details"
                active={sendEmailSubsection === "CONTACT_DETAILS"} //
                onClick={() => {
                    if (sendEmailSubsection === "CONTACT_DETAILS") return;
                    setSendEmailSubsection("CONTACT_DETAILS");
                }}
            />
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
