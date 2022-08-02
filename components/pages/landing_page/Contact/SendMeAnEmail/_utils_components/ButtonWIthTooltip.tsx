// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

interface ButtonWithTooltipProps {
    tooltip: string;
    color: "success" | "error";
    icon: ReactNode;
    sx?: SxProps;
    onClick: () => void;
    className?: string;
}

const ButtonWithTooltip: FunctionComponent<ButtonWithTooltipProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <StyledButton
                color={props.color} //
                onClick={props.onClick}
                sx={{ width: "43px", height: "43px", ...props.sx }}
                className={props.className}
            >
                {props.icon}
            </StyledButton>
        </Tooltip>
    );
};

export default ButtonWithTooltip;
