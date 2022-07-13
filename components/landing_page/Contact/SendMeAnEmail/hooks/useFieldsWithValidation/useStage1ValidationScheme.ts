// Tools
import joi from "joi";
import { useMemo } from "react";
import restrictions from "@/utils/restrictions/sendEmailForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return useMemo(() => {
        return joi.object({
            author: joi.string().min(restrictions.author.min).max(restrictions.author.max).required(),
            subject: joi.string().min(restrictions.subject.min).max(restrictions.subject.max).required(),
            message: joi.string().min(restrictions.message.min).max(restrictions.message.max).required(),
        });
    }, []);
};
