// Tools
import { forwardRef } from "react";
import { styled } from "@mui/material";
// Types
import IconButton from "@mui/material/IconButton";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
// Styled components
const UnwindIconButtonBase = styled(IconButton)(({ theme }) => ({
    ...theme.mixins.flex_center,
    color: "#fff",
    cursor: "pointer",
    svg: {
        fontSize: "24px",
    },
}));
interface UnwindIconButtonProps {
    onClick: () => void;
}

const UnwindIconButton = forwardRef<HTMLButtonElement, UnwindIconButtonProps>((props, ref) => {
    return (
        <Tooltip title="More" placement="top">
            <UnwindIconButtonBase ref={ref} tabIndex={-1} onClick={props.onClick}>
                <MoreVertRounded />
            </UnwindIconButtonBase>
        </Tooltip>
    );
});

UnwindIconButton.displayName = "UnwindIconButton";

export default UnwindIconButton;
