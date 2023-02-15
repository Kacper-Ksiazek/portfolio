// Tools
import axios from "axios";
import { useSendEmailContext } from "../../hooks/useSendEmailContext";
// Types
import type { SetStateAction, Dispatch } from "react";

const API_ADDRESS = "./api/send_email";

export const useSendRequestQuery = (setAlreadySentEmail: Dispatch<SetStateAction<string | null>>): (() => Promise<void>) => {
    const { updateRequest, form } = useSendEmailContext();

    return async () => {
        const { author, subject, message, email, country, github, website } = form;

        updateRequest({ status: "pending" });

        await axios
            .post(API_ADDRESS, {
                author,
                subject,
                message,
                contact: {
                    email,
                    country: country ? country?.label : "",
                    ...(github.length ? { github } : null),
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
