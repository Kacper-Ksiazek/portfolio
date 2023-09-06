// Tools
import { useMemo } from "react";
import { useLabelsContext } from "./useLabelsContext";
// Types
import type { LabelID } from "landing_page/ToDoList2/@types/Labels";

interface UseLabelResult {
    labelName: string | null;
    color: string | null;
}

export function useLabelWithParticularID(labelID: LabelID | null) {
    const { getLabelWithID } = useLabelsContext();

    return useMemo<UseLabelResult>(() => {
        if (labelID === null) return { color: null, labelName: null };
        const result = getLabelWithID(labelID);

        return {
            color: result.color,
            labelName: result.name,
        };
    }, [getLabelWithID, labelID]);
}
