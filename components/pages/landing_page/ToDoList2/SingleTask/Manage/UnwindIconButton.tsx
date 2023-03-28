// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import IconButton from "@mui/material/IconButton";
// Material UI Icons
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
// Styled components
const UnwindIconButtonBase = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
    ...theme.mixins.flex_center,
    color: "#fff",
    cursor: "pointer",
    svg: {
        fontSize: "24px",
    },
}));
interface UnwindIconButtonProps {
    //
}

const UnwindIconButton: FunctionComponent<UnwindIconButtonProps> = (props) => {
    return (
        <UnwindIconButtonBase tabIndex={-1}>
            <MoreVertRounded />
        </UnwindIconButtonBase>
    );
};

export default UnwindIconButton;
