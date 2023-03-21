// Tools
import { createContext, useMemo } from "react";
import * as validators from "./utils/joi_validators";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useContactNavigation } from "@/components/pages/landing_page/Contact/hooks/useContactNavigation";
// Types
import type { EmailForm } from "./@types";
import type { FunctionComponent, ReactNode } from "react";

interface I_FormContext {
    form: EmailForm;
    invalidFormFields: (keyof EmailForm)[];

    updateForm: (newForm: Partial<EmailForm>) => void;
}

interface FormContextProviderProps {
    children: ReactNode;
}

export const formContext = createContext({} as I_FormContext);

const FormContextProvider: FunctionComponent<FormContextProviderProps> = (props) => {
    const contactNavigationContext = useContactNavigation();
    const [form, updateForm] = useSimpleReducer<EmailForm>({
        author: "",
        country: null,
        email: "",
        linkedIn: "",
        message: "",
        subject: "",
        website: "",
        ReCAPTCHAIsApproved: false,
    });

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
        <formContext.Provider
            value={{
                form,
                invalidFormFields,

                updateForm,
            }}
        >
            {props.children}
        </formContext.Provider>
    );
};

export default FormContextProvider;
