// Tools
import joi from "joi";
import { useMemo } from "react";
import restrictions from "@/utils/restrictions/sendEmailForm";
// Type
import type { Restriction } from "@/@types/Restriction";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return useMemo(() => {
        const transformIntoJoi = ({ max, min }: Restriction) => joi.string().min(min).max(max);

        return joi.object({
            country: transformIntoJoi(restrictions.contact.country).required(),
            email: transformIntoJoi(restrictions.contact.country).required().email({ tlds: false }),
            github: transformIntoJoi(restrictions.contact.github).custom((val, helper) => {
                if (val.slice(0, 19) === restrictions.contact.github.startWith) return val;
                else {
                    return helper.error("github.invalid");
                }
            }),
            website: transformIntoJoi(restrictions.contact.website),
        });
    }, []);
};
