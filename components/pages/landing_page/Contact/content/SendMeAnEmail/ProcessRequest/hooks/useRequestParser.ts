// Tools
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";

interface UseRequestParserResult {
    isStaged: boolean;
    screenToDisplay: "SUCCESS" | "FAILURE" | null;
    errorCode: number;
    outroAnimatins: {
        pending: boolean;
        success: boolean;
        failure: boolean;
    };

    refresh: () => void;
    goBackToTheForm: () => void;
}

export function useRequestParser(sendRequest: () => void): UseRequestParserResult {
    const { updateRequest, request } = useSendEmailContext();
    const { status } = request;

    function goBackToTheForm() {
        if (status.includes("error")) updateRequest({ status: "form_after_error" });
        else updateRequest({ status: "form_after_success" });
    }

    function refresh() {
        if (status === "staged_error" || status === "staged_success") {
            return updateRequest({ status: "staged_pending" });
        } else {
            sendRequest();
        }
    }

    return {
        isStaged: status.slice(0, 7) === "staged_",
        errorCode: request.errorCode ?? 400,
        screenToDisplay: status.includes("pending") ? null : status.includes("success") ? "SUCCESS" : "FAILURE",
        outroAnimatins: {
            success: status === "form_after_success",
            failure: status === "form_after_error",
            pending: status !== "pending" && status !== "staged_pending",
        },

        goBackToTheForm,
        refresh,
    };
}
