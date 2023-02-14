// Tools
import * as validators from "./utils/joi_validators";
import { createContext, useState, useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import * as reducersDefaultValues from "./utils/reducersDefaultValues";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { EmailForm, Request, SendEmailSubsection } from "./@types";

const STAGE_CHANGE_ANIMATION_DURATION = 1000;

interface I_SendEmailContext {
    form: EmailForm;
    request: Request;
    sendEmailSubsection: SendEmailSubsection;
    sendEmailSubsectionIsChanging: boolean;
    invalidFormFields: (keyof EmailForm)[];

    updateForm: (newForm: Partial<EmailForm>) => void;
    updateRequest: (newForm: Partial<Request>) => void;
    setSendEmailSubsection: (val: SendEmailSubsection) => void;
}

interface SendEmailContextProviderProps {
    children: ReactNode;
    sendEmailSubsection: SendEmailSubsection;
    _setSendEmailSubsection: (val: SendEmailSubsection) => void;
}

export const SendEmailContext = createContext({} as I_SendEmailContext);

export const SendEmailContextProvider: FunctionComponent<SendEmailContextProviderProps> = (props) => {
    const [sendEmailSubsectionIsChanging, setsendEmailSubsectionIsChanging] = useState<boolean>(false);

    const [form, updateForm] = useSimpleReducer<EmailForm>(reducersDefaultValues.EMPTY_FORM_STATE);
    const [request, updateRequest] = useSimpleReducer<Request>(reducersDefaultValues.EMPTY_REQUEST_STATE);

    const invalidFormFields = useMemo<(keyof EmailForm)[]>(() => {
        switch (props.sendEmailSubsection) {
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
        }
        return [];
    }, [props.sendEmailSubsection, form]);

    function setSendEmailSubsection(val: SendEmailSubsection) {
        if (sendEmailSubsectionIsChanging) return;
        setsendEmailSubsectionIsChanging(true);

        setTimeout(() => {
            props._setSendEmailSubsection(val);
            setsendEmailSubsectionIsChanging(false);
        }, STAGE_CHANGE_ANIMATION_DURATION);
    }

    return (
        <SendEmailContext.Provider
            value={{
                form,
                sendEmailSubsection: props.sendEmailSubsection,
                invalidFormFields,
                request,
                sendEmailSubsectionIsChanging,

                updateForm,
                updateRequest,
                setSendEmailSubsection,
            }}
        >
            {props.children}
        </SendEmailContext.Provider>
    );
};
