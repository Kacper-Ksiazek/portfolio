// Tools
import joi from "joi";
import intoJoi from "./tools/intoJoi";
import { useState, createContext, useMemo, useEffect } from "react";
import restrictions from "@/utils/restrictions/sendEmailForm";
// Types
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface FormStageOneContextInterface {
    author: string;
    setAuthor: Dispatch<SetStateAction<string>>;
    authorIsInvalid: boolean;
    //
    subject: string;
    setSubject: Dispatch<SetStateAction<string>>;
    subjectIsInvalid: boolean;
    //
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
    messageIsInvalid: boolean;
    //
    everythingIsValid: boolean;
}

export const FormStageOneContext = createContext<FormStageOneContextInterface>({} as any);

export const FormStageOneContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [author, setAuthor] = useState<string>("Johanes Krankenburger");
    const [subject, setSubject] = useState<string>("Polow wielorybow");
    const [message, setMessage] = useState<string>("Lorem ipsum dolor delfin orka salamandra i słoń");

    const [invalidFields, setInvalidFields] = useState<string[]>([]);

    const validationScheme = useMemo(() => {
        return joi.object({
            author: intoJoi(restrictions.author),
            subject: intoJoi(restrictions.subject),
            message: intoJoi(restrictions.message),
        });
    }, []);

    useEffect(() => {
        const { error } = validationScheme.validate({ author, subject, message }, { abortEarly: false });
        setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
    }, [author, message, subject, validationScheme]);

    return (
        <FormStageOneContext.Provider
            value={{
                author,
                setAuthor,
                subject,
                setSubject,
                message,
                setMessage,
                authorIsInvalid: invalidFields.includes("author"),
                messageIsInvalid: invalidFields.includes("message"),
                subjectIsInvalid: invalidFields.includes("subject"),
                //
                everythingIsValid: invalidFields.length === 0,
            }}
        >
            {props.children}
        </FormStageOneContext.Provider>
    );
};
