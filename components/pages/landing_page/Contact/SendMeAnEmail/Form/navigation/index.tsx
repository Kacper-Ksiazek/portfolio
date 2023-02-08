// Tools
import { styled } from "@mui/system";
import { generateStaticLineAnimations } from "@/utils/client/styled/lineAnimations";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Step from "./Step";
// Styled components
const StyledStepper = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0px 0 24px 0",
    ".single-nagivation-step": {
        position: "relative",
        ...generateStaticLineAnimations({
            animations: {
                initialDelay: 0.5,
                commonDuration: 0.3,
                start: {
                    direction: "TOP",
                },
                end: {
                    direction: "RIGHT",
                    delay: 0.1,
                },
            },
            color: "red",
            applyAnimationsInSeries: {
                amountOfElements: 2,
                delayBetweenAnimations: 0.3,
            },
        }),
    },
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
