// Tools
import { forwardRef } from "react";
import { alpha, styled } from "@mui/material";
// Types
import type { ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
// Styled components
const StyledIconButtonBase = styled(IconButton)(({ theme }) => ({
    ...theme.mixins.flex_center,
    color: alpha("#fff", 0.6),
    transition: "color .3s",
    "&:hover": {
        color: "#fff",
    },
    svg: {
        fontSize: "24px",
        transition: "opacity .3s",
    },
}));
interface StyledIconButtonProps {
    tooltip: string;
    // active: boolean;
    children: ReactNode;
    disabled?: boolean;
    onClick: () => void;
}

const StyledIconButton = forwardRef<HTMLButtonElement, StyledIconButtonProps>((props, ref) => {
    return (
        <Tooltip
            title={props.tooltip} //
            placement="top"
            disableHoverListener={props.disabled}
        >
            <span style={{ cursor: "default" }}>
                <StyledIconButtonBase
                    ref={ref} //
                    tabIndex={-1}
                    onClick={props.onClick}
                    disabled={props.disabled}
                >
                    {props.children}
                </StyledIconButtonBase>
            </span>
        </Tooltip>
    );
});

StyledIconButton.displayName = "StyledIconButton";

export default StyledIconButton;
