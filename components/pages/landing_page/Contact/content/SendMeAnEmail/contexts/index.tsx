// Tools
import * as validators from "./utils/joi_validators";
import { createContext, useState, useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import * as reducersDefaultValues from "./utils/reducersDefaultValues";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { EmailForm, Request, EmailFormSubsection } from "./@types";

const STAGE_CHANGE_ANIMATION_DURATION = 1000;

interface I_SendEmailContext {
    form: EmailForm;
    request: Request;
    emailFormSubsection: EmailFormSubsection;
    emailFormSubsectionIsChanging: boolean;
    invalidFormFields: (keyof EmailForm)[];

    updateForm: (newForm: Partial<EmailForm>) => void;
    updateRequest: (newForm: Partial<Request>) => void;
    setEmailFormSubsection: (val: EmailFormSubsection) => void;
}

interface SendEmailContextProviderProps {
    children: ReactNode;
    emailFormSubsection: EmailFormSubsection;
    _setEmailFormSubsection: (val: EmailFormSubsection) => void;
}

export const SendEmailContext = createContext({} as I_SendEmailContext);

export const SendEmailContextProvider: FunctionComponent<SendEmailContextProviderProps> = (props) => {
    const [emailFormSubsectionIsChanging, setemailFormSubsectionIsChanging] = useState<boolean>(false);

    const [form, updateForm] = useSimpleReducer<EmailForm>(reducersDefaultValues.EMPTY_FORM_STATE);
    const [request, updateRequest] = useSimpleReducer<Request>(reducersDefaultValues.EMPTY_REQUEST_STATE);

    const invalidFormFields = useMemo<(keyof EmailForm)[]>(() => {
        switch (props.emailFormSubsection) {
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
                    ...(form.github ? { github: form.github } : null),
                    country: form.country ? form.country.label : "",
                });
            case "RECAPTCHA":
                return form.ReCAPTCHAIsApproved ? [] : ["ReCAPTCHAIsApproved"];
        }
    }, [props.emailFormSubsection, form]);

    function setEmailFormSubsection(val: EmailFormSubsection) {
        if (emailFormSubsectionIsChanging) return;
        setemailFormSubsectionIsChanging(true);

        setTimeout(() => {
            props._setEmailFormSubsection(val);
            setemailFormSubsectionIsChanging(false);
        }, STAGE_CHANGE_ANIMATION_DURATION);
    }

    return (
        <SendEmailContext.Provider
            value={{
                form,
                emailFormSubsection: props.emailFormSubsection,
                invalidFormFields,
                request,
                emailFormSubsectionIsChanging,

                updateForm,
                updateRequest,
                setEmailFormSubsection,
            }}
        >
            {props.children}
        </SendEmailContext.Provider>
    );
};
