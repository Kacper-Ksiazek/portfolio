// Tools
import { styled } from "@mui/system";
import { useState, useEffect } from "react";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { generateSequentialLineAnimations } from "@/utils/client/styled/lineAnimations";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
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
        ...generateSequentialLineAnimations({
            color: theme.palette.primary.main,
            sequence: [
                ["BOTTOM", "RIGHT"],
                ["LEFT", "TOP"],
            ],
            duration: 0.25,
            playBackToBack: true,
            delays: {
                initial: 0.4,
                beforeOutro: 0.2,
                betweenSequenceElements: 0.05,
            },
        }),
        "&::before": {
            animation: `${fadeSimple} .2s linear both 1.8s`,
        },
    },
}));

const NavigationBetweenStages: FunctionComponent = () => {
    const { setSendEmailSubsection, sendEmailSubsection, invalidFormFields } = useSendEmailContext();

    const [generalPurposeSectionIsCorrect, setGeneralPurposeSectionIsCorrect] = useState<boolean>(false);
    const [contactDetailsSectionIsCorrect, setContactDetailsSectionIsCorrect] = useState<boolean>(false);

    useEffect(() => {
        switch (sendEmailSubsection) {
            case "GENERAL_PURPOSE":
                setGeneralPurposeSectionIsCorrect(invalidFormFields.length === 0);
                break;
            case "CONTACT_DETAILS":
                setContactDetailsSectionIsCorrect(invalidFormFields.length === 0);
                break;
        }
    }, [invalidFormFields, sendEmailSubsection]);

    return (
        <StyledStepper className="navigation-between-stages">
            <Step
                index={1}
                completed={generalPurposeSectionIsCorrect}
                label="General purpose"
                active={sendEmailSubsection === "GENERAL_PURPOSE"} //
                onClick={() => {
                    if (sendEmailSubsection === "GENERAL_PURPOSE") return;
                    setSendEmailSubsection("GENERAL_PURPOSE");
                }}
            />

            <Step
                index={2}
                completed={contactDetailsSectionIsCorrect}
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
