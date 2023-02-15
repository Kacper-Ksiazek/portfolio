// Tools
import joi from "joi";
import { createJoiObject } from "./createJoiObject";
import restrictions from "@/utils/restrictions/sendEmailForm";
// Types
import type { EmailForm } from "../../@types";
import type { ValidationResult } from "joi";

interface ValidateGeneralPurposeBody {
    author: string;
    subject: string;
    message: string;
}

export const generalPurposeValidator = (body: ValidateGeneralPurposeBody) => {
    return getNamesOfPropertiesWhichAreInvalid(
        joi
            .object({
                author: createJoiObject(restrictions.author),
                subject: createJoiObject(restrictions.subject),
                message: createJoiObject(restrictions.message),
            })
            .validate(body, { abortEarly: false })
    );
};

interface ValidateContactDetailsBody {
    country: string;
    email: string;
    linkedIn?: string;
    website?: string;
}

export const contactDetailsValidator = (body: ValidateContactDetailsBody) => {
    return getNamesOfPropertiesWhichAreInvalid(
        joi
            .object({
                country: createJoiObject(restrictions.contact.country),
                email: createJoiObject(restrictions.contact.country).email({ tlds: false }),
                linkedIn: createJoiObject(restrictions.contact.linkedIn, false).custom((val, helper) => {
                    if (val.slice(0, 25) === restrictions.contact.linkedIn.startWith) return val;
                    else {
                        return helper.error("any.invalid");
                    }
                }),
                website: createJoiObject(restrictions.contact.website, false),
            })
            .validate(body, { abortEarly: false })
    );
};

const getNamesOfPropertiesWhichAreInvalid = ({ error }: ValidationResult): (keyof EmailForm)[] => {
    return error ? (error as any).details.map((el: any) => el.path[0]) : [];
};
