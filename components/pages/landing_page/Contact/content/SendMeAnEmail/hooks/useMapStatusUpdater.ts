// Tools
import { useEffect } from "react";
import { useMapContext } from "@/components/pages/landing_page/Contact/hooks/useMapContext";
// Types
import type { Status } from "../contexts/requestContext";

export function useMapStatusUpdater(status: Status, alreadySentEmail: string | null) {
    const { changeMapStatus } = useMapContext();

    useEffect(() => {
        if (status === "error" || status === "staged_error") {
            changeMapStatus("error");
        } //
        else if (status === "success" || status === "staged_success" || alreadySentEmail) {
            changeMapStatus("success");
        } //
        else changeMapStatus(null);
    }, [status, changeMapStatus, alreadySentEmail]);
}
