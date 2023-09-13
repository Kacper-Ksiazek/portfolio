// Tools
import { useMemo } from "react";
// Types
import type { ActionHeaderSection } from "landing_page/ToDoList/2023/ActionsHeader/@types";

export type ResponsiveHeightCSSClass = ActionHeaderSection | "HIDDEN";

export function useResponsiveHeight(stage: ActionHeaderSection, contentIsHidden: boolean): ResponsiveHeightCSSClass {
    return useMemo<ResponsiveHeightCSSClass>(() => {
        if (contentIsHidden) return "HIDDEN";
        return stage;
    }, [contentIsHidden, stage]);
}
