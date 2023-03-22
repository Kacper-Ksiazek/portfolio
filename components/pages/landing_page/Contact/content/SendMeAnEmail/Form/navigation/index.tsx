// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
import { useContactNavigation } from "@/components/pages/landing_page/Contact/hooks/useContactNavigation";
// Types
import type { FunctionComponent } from "react";
import type { EmailFormSubsection } from "@/components/pages/landing_page/Contact/@types";
// Other components
import Step from "./Step";
// Styled components
import { Divider, StyledStepper } from "./styled_components";

interface NavigationBetweenStagesProps {
    validSections: Record<EmailFormSubsection, boolean>;
}

const NavigationBetweenStages: FunctionComponent<NavigationBetweenStagesProps> = (props) => {
    const contactNavigationContext = useContactNavigation();
    const { width } = useWindowSizes();

    const emailFormSubsection = contactNavigationContext.stages.form.current;

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
                                onClick={() => contactNavigationContext.updaters.setEmailFormSubsection(section)}
                            />
                        </>
                    );
                })}
        </StyledStepper>
    );
};

export default NavigationBetweenStages;
