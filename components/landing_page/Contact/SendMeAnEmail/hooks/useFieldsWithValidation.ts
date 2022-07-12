// Tools
import joi from "joi";
import { useState, useMemo, useEffect } from "react";
import stated from "@/utils/client/stated";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

interface UseFieldsWithValidationResult {
    name: StatedDataField<string>;
    topic: StatedDataField<string>;
    message: StatedDataField<string>;
    //
    disableContinueButton: boolean;
    //
    checkWhetherAFieldIsValid: (fieldName: "name" | "topic" | "message") => boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseFieldsWithValidationResult => {
    const [name, setName] = useState<string>("dasd asdasd asd");
    const [topic, setTopic] = useState<string>("asd asdasd asdas");
    const [message, setMessage] = useState<string>("d asd asdasd asdasdasd asd");

    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [disableContinueButton, setDisableContinueButton] = useState<boolean>(false);

    const validationScheme = useMemo(() => {
        return joi.object({
            name: joi.string().min(3).max(100).required(),
            topic: joi.string().min(3).max(100).required(),
            message: joi.string().min(10).max(500).required(),
        });
    }, []);

    useEffect(() => {
        if (name.length === 0 && topic.length === 0 && message.length === 0) {
            setInvalidFields([]);
            setDisableContinueButton(true);
            return;
        }

        const { error } = validationScheme.validate({ name, topic, message }, { abortEarly: false });
        setDisableContinueButton(Boolean(error));

        setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
    }, [name, topic, message, validationScheme]);

    return {
        name: stated(name, setName),
        topic: stated(topic, setTopic),
        message: stated(message, setMessage),
        checkWhetherAFieldIsValid: (field) => invalidFields.includes(field),
        disableContinueButton,
    };
};
