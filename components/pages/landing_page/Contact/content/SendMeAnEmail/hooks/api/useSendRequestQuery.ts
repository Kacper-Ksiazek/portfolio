// Tools
import { useRequestContext } from "../useRequestContext";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
// Types
import type { SetStateAction, Dispatch } from "react";

const API_ADDRESS = "/api/send_email";

export const useSendRequestQuery = (setAlreadySentEmail: Dispatch<SetStateAction<string | null>>): (() => Promise<void>) => {
    const { updateRequest } = useRequestContext();
    const { form } = useFormContext();

    return async () => {
        const { author, subject, message, email, country, linkedIn, website } = form;

        updateRequest({ status: "pending" });

        await fetch(API_ADDRESS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author,
                subject,
                message,
                contact: {
                    email,
                    country: country ? country?.label : "",
                    ...(linkedIn.length ? { linkedIn } : null),
                    ...(website.length ? { website } : null),
                },
            }),
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw { response: { status: response.status } };
                }
                updateRequest({ status: "success" });
                setAlreadySentEmail(new Date().toLocaleDateString());
            })
            .catch((res) =>
                updateRequest({
                    errorCode: res.response?.status ?? 500,
                    status: "error",
                })
            );
    };
};
