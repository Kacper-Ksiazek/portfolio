// Tools
import { forwardRef } from "react";
// Types
import UnwindIconButton from "./UnwindIconButton";
// Material UI Icons
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

interface DefaultActionButtonProps {
    showUnwindButton: boolean;
    showDeleteButton: boolean;

    unwindMenuList: () => void;
    remove: () => void;
}

const DefaultActionButton = forwardRef<HTMLButtonElement, DefaultActionButtonProps>((props, ref) => {
    return (
        <>
            <UnwindIconButton
                ref={ref} //
                onClick={props.unwindMenuList}
                tooltip="More"
                active={props.showUnwindButton}
            >
                <MoreVertRounded />
            </UnwindIconButton>

            <UnwindIconButton
                onClick={props.remove} //
                tooltip="Delete"
                active={props.showDeleteButton}
            >
                <DeleteOutlineOutlined />
            </UnwindIconButton>
        </>
    );
});

DefaultActionButton.displayName = "DefaultActionButton";
export default DefaultActionButton;
