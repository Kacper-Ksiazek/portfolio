// Tools
import { useMemo } from "react";
import { CSS_REFERENCES } from "../css_references";
import { useEditModeContext, useTaskDataContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import MUITooltip from "@mui/material/Tooltip";

interface TooltipProps {
    children: ReactNode;
}

const Tooltip: FunctionComponent<TooltipProps> = (props) => {
    const { isOpened: isInEditMode } = useEditModeContext();
    const { originalTask } = useTaskDataContext();

    const tooltipTitle = useMemo<string>(() => {
        if (isInEditMode) return "Edit mode is active";
        return `Mark as ${originalTask.isCompleted ? "in progress" : "completed"}`;
    }, [isInEditMode, originalTask.isCompleted]);

    return (
        <MUITooltip
            placement="top" //
            title={tooltipTitle}
        >
            <span className={CSS_REFERENCES.COMPLETION_BUTTON}>{props.children}</span>
        </MUITooltip>
    );
};

export default Tooltip;
