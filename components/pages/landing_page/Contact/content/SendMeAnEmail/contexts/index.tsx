// Tools
import { createContext, useMemo } from "react";
import * as validators from "./utils/joi_validators";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import * as reducersDefaultValues from "./utils/reducersDefaultValues";
import { useContactNavigation } from "@/components/pages/landing_page/Contact/hooks/useContactNavigation";
// Types
import type { EmailForm, Request } from "./@types";
import type { FunctionComponent, ReactNode } from "react";

interface I_SendEmailContext {
    form: EmailForm;
    request: Request;
    invalidFormFields: (keyof EmailForm)[];

    updateForm: (newForm: Partial<EmailForm>) => void;
    updateRequest: (newForm: Partial<Request>) => void;
}

interface SendEmailContextProviderProps {
    children: ReactNode;
}

export const SendEmailContext = createContext({} as I_SendEmailContext);

export const SendEmailContextProvider: FunctionComponent<SendEmailContextProviderProps> = (props) => {
    const contactNavigationContext = useContactNavigation();
    const [form, updateForm] = useSimpleReducer<EmailForm>(reducersDefaultValues.EMPTY_FORM_STATE);
    const [request, updateRequest] = useSimpleReducer<Request>(reducersDefaultValues.EMPTY_REQUEST_STATE);

    const emailFormSubsection = contactNavigationContext.stages.form.current;

    const invalidFormFields = useMemo<(keyof EmailForm)[]>(() => {
        switch (emailFormSubsection) {
            case "GENERAL_PURPOSE":
                return validators.generalPurposeValidator({
                    author: form.author,
                    message: form.message,
                    subject: form.subject,
                });
            case "CONTACT_DETAILS":
                return validators.contactDetailsValidator({
                    email: form.email,
                    ...(form.website ? { website: form.website } : null),
                    ...(form.linkedIn ? { linkedIn: form.linkedIn } : null),
                    country: form.country ? form.country.label : "",
                });
            case "RECAPTCHA":
                return form.ReCAPTCHAIsApproved ? [] : ["ReCAPTCHAIsApproved"];
        }
    }, [emailFormSubsection, form]);

    return (
        <SendEmailContext.Provider
            value={{
                form,
                invalidFormFields,
                request,

                updateForm,
                updateRequest,
            }}
        >
            {props.children}
        </SendEmailContext.Provider>
    );
};
