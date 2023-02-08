// Tools
import * as validators from "./utils/joi_validators";
import * as reducersDefaultValues from "./utils/reducersDefaultValues";
import { createContext, useState, useReducer, useMemo } from "react";
// Types
import type { EmailForm, Request } from "./@types";
import type { SendEmailSubsection } from "../../@types";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

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
    _setSendEmailSubsection: Dispatch<SetStateAction<SendEmailSubsection>>;
}

export const SendEmailContext = createContext({} as I_SendEmailContext);

export const SendEmailContextProvider: FunctionComponent<SendEmailContextProviderProps> = (props) => {
    const [sendEmailSubsectionIsChanging, setsendEmailSubsectionIsChanging] = useState<boolean>(false);

    const [form, updateForm] = useReducer((state: EmailForm, newState: Partial<EmailForm>): EmailForm => {
        return {
            ...state,
            ...newState,
        };
    }, reducersDefaultValues.EMPTY_FORM_STATE);
    const [request, updateRequest] = useReducer((state: Request, newState: Partial<Request>): Request => {
        return {
            ...state,
            ...newState,
        };
    }, reducersDefaultValues.EMPTY_REQUEST_STATE);

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
