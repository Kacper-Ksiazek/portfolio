// Tools
import axios from "axios";
import { useRequestContext } from "../useRequestContext";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
// Types
import type { SetStateAction, Dispatch } from "react";

const API_ADDRESS = "./api/send_email";

export const useSendRequestQuery = (setAlreadySentEmail: Dispatch<SetStateAction<string | null>>): (() => Promise<void>) => {
    const { updateRequest } = useRequestContext();
    const { form } = useFormContext();

    return async () => {
        const { author, subject, message, email, country, linkedIn, website } = form;

        updateRequest({ status: "pending" });

        await axios
            .post(API_ADDRESS, {
                author,
                subject,
                message,
                contact: {
                    email,
                    country: country ? country?.label : "",
                    ...(linkedIn.length ? { linkedIn } : null),
                    ...(website.length ? { website } : null),
                },
            })
            .then(() => {
                updateRequest({ status: "success" });
                setAlreadySentEmail(new Date().toLocaleDateString());
            })
            .catch((res) =>
                updateRequest({
                    errorCode: res.response.status,
                    status: "error",
                })
            );
    };
};
