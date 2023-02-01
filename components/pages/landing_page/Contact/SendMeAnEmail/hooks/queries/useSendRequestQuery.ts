// Tools
import axios from "axios";
import { useSendEmailContext } from "../../hooks/useSendEmailContext";
// Types
import type { SetStateAction, Dispatch } from "react";

const API_ADDRESS = "./api/send_email";

interface UseSendRequestQueryParams {
    setPreviouslySentEmail: Dispatch<SetStateAction<string | null>>;
}

export const useSendRequestQuery = (params: UseSendRequestQueryParams): (() => Promise<void>) => {
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
                params.setPreviouslySentEmail(new Date().toLocaleDateString());
            })
            .catch((res) =>
                updateRequest({
                    errorCode: res.response.status,
                    status: "error",
                })
            );
    };
};
