// Tools
import { styled } from "@mui/material";
import useWindowSizes from "@/hooks/useWindowSizes";
import { fadeSimple } from "@/components/keyframes/intro";
import { generateSequentialLineAnimations, generateStaticLineAnimations } from "@/utils/client/styled/lineAnimations";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
import type { EmailFormSubsection } from "@/components/pages/landing_page/Contact/@types";
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
        "&:nth-of-type(3)": generateStaticLineAnimations({
            animations: {
                commonDuration: 0.25,
                start: {
                    direction: "BOTTOM",
                },
                end: {
                    direction: "TOP",
                },
            },
            color: theme.palette.primary.main,
        }),
        "&::before": {
            animation: `${fadeSimple} .2s linear both 1.8s`,
        },
    },
    "@media (max-width:800px)": {
        justifyContent: "space-between",
        ".single-nagivation-step": {
            background: "#fff",
            "&:nth-of-type(1)": {
                paddingRight: "8px",
                zIndex: 2,
            },
            "&:not(&:nth-of-type(1))": {
                marginLeft: 0,
                "&::before": {
                    width: "30vw",
                    transform: "translate(-105%,50%)",
                },
            },
        },
    },
}));

interface NavigationBetweenStagesProps {
    validSections: Record<EmailFormSubsection, boolean>;
}

const NavigationBetweenStages: FunctionComponent<NavigationBetweenStagesProps> = (props) => {
    const { setEmailFormSubsection, emailFormSubsection } = useSendEmailContext();
    const { width } = useWindowSizes();

    function parseSection(section: EmailFormSubsection): {
        isValid: boolean; //
        isActive: boolean;
        isBlocked: boolean;
    } {
        return {
            isValid: props.validSections[section],
            isActive: emailFormSubsection === section,
            isBlocked: section !== "RECAPTCHA" && emailFormSubsection === "RECAPTCHA",
        };
    }

    return (
        <StyledStepper className="navigation-between-stages">
            {(
                [
                    { label: "General purpose", section: "GENERAL_PURPOSE" },
                    { label: "Contact details", section: "CONTACT_DETAILS" },
                    { label: "ReCAPTCHA", section: "RECAPTCHA" },
                ] as { label: string; section: EmailFormSubsection }[]
            )
                .slice(0, emailFormSubsection === "RECAPTCHA" && width > 800 ? 3 : 2)
                .map(({ label, section }, index) => {
                    const { isActive, isBlocked, isValid } = parseSection(section);

                    return (
                        <Step
                            key={index} //
                            index={index + 1}
                            label={label}
                            active={isActive}
                            completed={isValid}
                            blocked={isBlocked}
                            onClick={() => setEmailFormSubsection(section)}
                        />
                    );
                })}
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
