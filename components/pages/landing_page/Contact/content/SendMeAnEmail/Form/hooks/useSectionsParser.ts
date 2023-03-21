// Tools
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useContactNavigation } from "@/components/pages/landing_page/Contact/hooks/useContactNavigation";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { EmailFormSubsection } from "@/components/pages/landing_page/Contact/@types";

interface UseSectionsParserResult {
    validSections: Record<EmailFormSubsection, boolean>;

    proceed: () => void;
}

export function useSectionsParser(sendRequest: () => void): UseSectionsParserResult {
    const contactNavigationContext = useContactNavigation();
    const { invalidFormFields } = useSendEmailContext();

    const emailFormSubsection = contactNavigationContext.stages.form.current;

    const [validSections, updateValidSections] = useSimpleReducer<UseSectionsParserResult["validSections"]>({
        CONTACT_DETAILS: false,
        GENERAL_PURPOSE: false,
        RECAPTCHA: false,
    });

    useEffect(() => {
        updateValidSections({ [emailFormSubsection]: invalidFormFields.length === 0 });
    }, [invalidFormFields, emailFormSubsection, updateValidSections]);

    function proceed() {
        const everythingHasBeenFulfilledProperly: boolean = Object.values(validSections).indexOf(false) === -1;
        if (everythingHasBeenFulfilledProperly) return sendRequest();

        if (emailFormSubsection === "GENERAL_PURPOSE") {
            contactNavigationContext.updaters.setEmailFormSubsection(validSections.CONTACT_DETAILS ? "RECAPTCHA" : "CONTACT_DETAILS");
        } //
        else if (emailFormSubsection === "CONTACT_DETAILS") {
            contactNavigationContext.updaters.setEmailFormSubsection(validSections.GENERAL_PURPOSE ? "RECAPTCHA" : "GENERAL_PURPOSE");
        }
    }

    return {
        validSections,
        proceed,
    };
}
