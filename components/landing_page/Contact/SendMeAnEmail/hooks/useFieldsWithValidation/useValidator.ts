// Tools
import { useState, useEffect } from "react";
import useStage1ValidationScheme from "./useStage1ValidationScheme";
import useStage2ValidationScheme from "./useStage2ValidationScheme";
// Types
import type { FieldName, FormFillingStage } from "../../context";

interface UseValidatorParams {
    stage: FormFillingStage;
    author: string;
    subject: string;
    message: string;
    country: string;
    email: string;
    github: string;
    website: string;
    ReCAPTCHAHasBeenVerified: boolean;
}

interface UseValidatorResult {
    disableContinueButton: boolean;
    checkWhetherAFieldIsValid: (fieldName: FieldName) => boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (params: UseValidatorParams): UseValidatorResult => {
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [disableContinueButton, setDisableContinueButton] = useState<boolean>(false);

    const stage1ValidationSchema = useStage1ValidationScheme();
    const stage2ValidationScheme = useStage2ValidationScheme();

    useEffect(() => {
        // Validate Stage 1
        if (params.stage === "purpose") {
            const { author, subject, message } = params;
            //
            const { error } = stage1ValidationSchema.validate({ author, subject, message }, { abortEarly: false });
            setDisableContinueButton(Boolean(error));
            setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
        }
        // Validate Stage 2
        else if (params.stage === "contact_details") {
            const { country, email, github, website } = params;
            //
            const { error } = stage2ValidationScheme.validate({ country, email, github, website }, { abortEarly: false });
            setDisableContinueButton(Boolean(error));
            setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
        }
        // Validate Stage 3
        else if (params.stage === "recaptcha") {
            setDisableContinueButton(!params.ReCAPTCHAHasBeenVerified);
        }
    }, [params, stage1ValidationSchema, stage2ValidationScheme]);

    return {
        checkWhetherAFieldIsValid: (field) => invalidFields.includes(field), //
        disableContinueButton,
    };
};
