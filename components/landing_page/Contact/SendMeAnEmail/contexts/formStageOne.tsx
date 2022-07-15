// Tools
import joi from "joi";
import intoJoi from "./tools/intoJoi";
import { useState, createContext, useMemo } from "react";
import restrictions from "@/utils/restrictions/sendEmailForm";
import distinguishInvalidProperties from "./tools/distinguishInvalidProperties";
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
    const [author, setAuthor] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const validationScheme = useMemo(() => {
        return joi.object({
            author: intoJoi(restrictions.author),
            subject: intoJoi(restrictions.subject),
            message: intoJoi(restrictions.message),
        });
    }, []);

    const { checkWhetherAFieldIsValid, everythingIsValid } = distinguishInvalidProperties({
        body: { message, author, subject },
        schema: validationScheme,
    });

    return (
        <FormStageOneContext.Provider
            value={{
                author,
                setAuthor,
                subject,
                setSubject,
                message,
                setMessage,
                authorIsInvalid: checkWhetherAFieldIsValid("author"),
                messageIsInvalid: checkWhetherAFieldIsValid("message"),
                subjectIsInvalid: checkWhetherAFieldIsValid("subject"),
                //
                everythingIsValid,
            }}
        >
            {props.children}
        </FormStageOneContext.Provider>
    );
};
