// Tools
import { styled, alpha } from "@mui/material";
import useWindowSizes from "@/hooks/useWindowSizes";
import { scaleFromLeft } from "@/components/keyframes/intro";
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
    alignItems: "center",
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
                initial: 0.2,
                beforeOutro: 0.2,
                betweenSequenceElements: 0.2,
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
    },
    ".divider": {
        animation: `${scaleFromLeft} .2s linear both .8s`,
        "&:nth-of-type(2)": {
            animation: `${scaleFromLeft} .2s linear both`,
        },
    },
    "@media (max-width:800px)": {
        justifyContent: "space-between",
        ".single-nagivation-step": {
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
    "@media (max-width:385px)": {
        ".single-nagivation-step": {
            fontSize: "16px",
        },
    },
}));

const Divider = styled("span")(({ theme }) => ({
    background:
        theme.palette.mode === "light" //
            ? alpha("#000", 0.12)
            : alpha("#fff", 0.3),
    height: "2px",
    width: "86px",
    margin: "0 12px",
    "@media (max-width:1000px)": {
        width: "auto",
        flexGrow: 1,
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
                .slice(0, emailFormSubsection === "RECAPTCHA" && width > 650 ? 3 : 2)
                .map(({ label, section }, index) => {
                    const { isActive, isBlocked, isValid } = parseSection(section);

                    return (
                        <>
                            {index !== 0 && <Divider className="divider" />}

                            <Step
                                key={index} //
                                index={index + 1}
                                label={label}
                                active={isActive}
                                completed={isValid}
                                blocked={isBlocked}
                                onClick={() => setEmailFormSubsection(section)}
                            />
                        </>
                    );
                })}
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
