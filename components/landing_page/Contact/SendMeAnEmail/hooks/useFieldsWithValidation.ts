// Tools
import joi from "joi";
import { useState, useMemo, useEffect } from "react";
import stated from "@/utils/client/stated";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

interface UseFieldsWithValidationResult {
    author: StatedDataField<string>;
    subject: StatedDataField<string>;
    message: StatedDataField<string>;
    //
    disableContinueButton: boolean;
    //
    checkWhetherAFieldIsValid: (fieldName: "author" | "subject" | "message") => boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseFieldsWithValidationResult => {
    const [author, setAuthor] = useState<string>("dasd asdasd asd");
    const [subject, setSubject] = useState<string>("asd asdasd asdas");
    const [message, setMessage] = useState<string>("d asd asdasd asdasdasd asd");

    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [disableContinueButton, setDisableContinueButton] = useState<boolean>(false);

    const validationScheme = useMemo(() => {
        return joi.object({
            author: joi.string().min(3).max(100).required(),
            subject: joi.string().min(3).max(100).required(),
            message: joi.string().min(10).max(500).required(),
        });
    }, []);

    useEffect(() => {
        if (author.length === 0 && subject.length === 0 && message.length === 0) {
            setInvalidFields([]);
            setDisableContinueButton(true);
            return;
        }

        const { error } = validationScheme.validate({ author, subject, message }, { abortEarly: false });
        setDisableContinueButton(Boolean(error));

        setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
    }, [author, subject, message, validationScheme]);

    return {
        author: stated(author, setAuthor),
        subject: stated(subject, setSubject),
        message: stated(message, setMessage),
        checkWhetherAFieldIsValid: (field) => invalidFields.includes(field),
        disableContinueButton,
    };
};
