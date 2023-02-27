// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Color } from "@/components/atoms/forms/StyledButton";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

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
    className?: string;

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
                    className={props.className}
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
