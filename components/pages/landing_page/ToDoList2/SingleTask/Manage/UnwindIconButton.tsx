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
const UnwindIconButtonBase = styled(IconButton)(({ theme }) => ({
    ...theme.mixins.flex_center,
    color: alpha("#fff", 0.6),
    cursor: "pointer",
    position: "absolute",
    transition: "color .3s",
    "&.active": {
        zIndex: 1,
        svg: {
            opacity: 1,
            transition: "opacity .3s",
        },
    },
    "&:hover": {
        color: "#fff",
    },
    svg: {
        opacity: 0,
        fontSize: "24px",
    },
}));
interface UnwindIconButtonProps {
    tooltip: string;
    active: boolean;
    children: ReactNode;
    onClick: () => void;
}

const UnwindIconButton = forwardRef<HTMLButtonElement, UnwindIconButtonProps>((props, ref) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <UnwindIconButtonBase
                ref={ref} //
                tabIndex={-1}
                onClick={props.onClick}
                className={props.active ? "active" : ""}
            >
                {props.children}
            </UnwindIconButtonBase>
        </Tooltip>
    );
});

UnwindIconButton.displayName = "UnwindIconButton";

export default UnwindIconButton;
