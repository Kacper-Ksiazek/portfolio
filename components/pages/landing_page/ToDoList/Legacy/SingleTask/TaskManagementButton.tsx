// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { StyledButtonThemeName } from "@/components/atoms/forms/StyledButton/ComponentColorThemes";
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
    icon: ReactNode;
    tooltip: string;

    onClick: () => void;

    disabled?: boolean;
    tabIndex?: number;
    className?: string;
    componentThemeID?: StyledButtonThemeName;
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
                    tabIndex={props.tabIndex}
                    disabled={props.disabled}
                    componentThemeID={props.componentThemeID}
                >
                    {props.icon}
                </TaskManagementButtonBase>
            </span>
        </Tooltip>
    );
};

export default TaskManagementButton;
