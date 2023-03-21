// Tools
import { useState, useEffect } from "react";
import { useRequestContext } from "./useRequestContext";
// Types
import type { Status } from "../contexts/requestContext";

type SpecialWayOfRendering = null | "displayOutroAnimation" | "hideIt";

export function useSpecialWayOfRendering(): SpecialWayOfRendering {
    const { request, updateRequest } = useRequestContext();
    const [specialWayOfRendering, setSpecialWayOfRendering] = useState<SpecialWayOfRendering>(null);

    useEffect(() => {
        if (specialWayOfRendering === null && request.status === "fillingForm") return;

        if ((["fillingForm", "form_after_error", "form_after_success"] as Status[]).includes(request.status)) {
            setSpecialWayOfRendering(null);
            // ---
            // Let the outro animation end and then simply stop rendering <ProcessRequest/> component
            if ((["form_after_error", "form_after_success"] as Status[]).includes(request.status)) {
                setTimeout(() => {
                    updateRequest({ status: "fillingForm" });
                }, 300);
            }
        }
        //
        else if (specialWayOfRendering === null) {
            setSpecialWayOfRendering("displayOutroAnimation");
            setTimeout(() => {
                setSpecialWayOfRendering("hideIt");
            }, 800);
        }
    }, [specialWayOfRendering, request.status, updateRequest]);

    return specialWayOfRendering;
}
