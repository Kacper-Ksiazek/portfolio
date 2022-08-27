// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Color } from "@/components/_styled_components/forms/StyledButton";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

const TaskManagementButtonBase = styled(StyledButton)(({ theme }) => ({
    marginLeft: "10px",
    height: "28px",
    padding: "3px 5px",
}));

interface TaskManagementButtonProps {
    tooltip: string;
    icon: ReactNode;
    color?: Color;
    disabled?: boolean;
    tabIndex?: number;
    onClick: () => void;
}

const TaskManagementButton: FunctionComponent<TaskManagementButtonProps> = (props) => {
    return (
        <Tooltip
            title={props.tooltip} //
            placement="top"
        >
            <span>
                <TaskManagementButtonBase
                    onClick={props.onClick} //
                    className="task-management"
                    color={props.color}
                    tabIndex={props.tabIndex}
                    disabled={props.disabled}
                >
                    {props.icon}
                </TaskManagementButtonBase>
            </span>
        </Tooltip>
    );
};

export default TaskManagementButton;
