// Tools
import { useMemo } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import MUITooltip from "@mui/material/Tooltip";

interface TooltipProps {
    isCompleted: boolean;
    isInEditMode: boolean;

    children: ReactNode;
}

const Tooltip: FunctionComponent<TooltipProps> = (props) => {
    const tooltipTitle = useMemo<string>(() => {
        if (props.isInEditMode) return "Edit mode is active";
        return `Mark as ${props.isCompleted ? "in progress" : "completed"}`;
    }, [props]);

    return (
        <MUITooltip
            placement="top" //
            title={tooltipTitle}
        >
            <span>{props.children}</span>
        </MUITooltip>
    );
};

export default Tooltip;
