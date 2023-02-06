// Tools
import { createContext, useState, useReducer, useMemo } from "react";
import * as validators from "./utils/joi_validators";
// Types
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";
import type { EmailForm, FormStage, Request } from "./@types";

const STAGE_CHANGE_ANIMATION_DURATION = 1000;

interface I_SendEmailContext {
    form: EmailForm;
    request: Request;
    formStage: FormStage;
    formStageIsChanging: boolean;
    invalidFormFields: (keyof EmailForm)[];

    setFormStage: Dispatch<SetStateAction<FormStage>>;
    updateForm: (newForm: Partial<EmailForm>) => void;
    updateRequest: (newForm: Partial<Request>) => void;
}

export const SendEmailContext = createContext({} as I_SendEmailContext);

export const SendEmailContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [formStage, _setFormStage] = useState<FormStage>("GENERAL_PURPOSE");
    const [formStageIsChanging, setformStageIsChanging] = useState<boolean>(false);

    const [form, updateForm] = useReducer((state: EmailForm, newState: Partial<EmailForm>): EmailForm => {
        return {
            ...state,
            ...newState,
        };
    }, EMPTY_FORM_STATE);
    const [request, updateRequest] = useReducer((state: Request, newState: Partial<Request>): Request => {
        return {
            ...state,
            ...newState,
        };
    }, EMPTY_REQUEST_STATE);

    const invalidFormFields = useMemo<(keyof EmailForm)[]>(() => {
        switch (formStage) {
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
    }, [formStage, form]);
    //

    const setFormStage: I_SendEmailContext["setFormStage"] = (val) => {
        if (formStageIsChanging) return;
        setformStageIsChanging(true);

        setTimeout(() => {
            _setFormStage(val);
            setformStageIsChanging(false);
        }, STAGE_CHANGE_ANIMATION_DURATION);
    };

    return (
        <SendEmailContext.Provider
            value={{
                form,
                formStage,
                invalidFormFields,
                request,
                formStageIsChanging,

                updateForm,
                updateRequest,
                setFormStage,
            }}
        >
            {children}
        </SendEmailContext.Provider>
    );
};

const EMPTY_FORM_STATE: EmailForm = {
    author: "",
    country: null,
    email: "",
    github: "",
    message: "",
    subject: "",
    website: "",
};

const EMPTY_REQUEST_STATE: Request = {
    errorCode: null,
    status: "fillingForm",
};
