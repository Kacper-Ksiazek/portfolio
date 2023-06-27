// Tools
import { useMemo } from "react";
// Types
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";

export type ResponsiveHeightCSSClass = "EXTENDED_HEIGHT" | "HIDDEN" | "DEFAULT_HEIGHT";

export function useResponsiveHeight(stage: ActionHeaderSection, contentIsHidden: boolean): ResponsiveHeightCSSClass {
    return useMemo<ResponsiveHeightCSSClass>(() => {
        if (contentIsHidden) return "HIDDEN";
        else if (stage === "EDIT_LABELS") return "EXTENDED_HEIGHT";
        return "DEFAULT_HEIGHT";
    }, [contentIsHidden, stage]);
}
