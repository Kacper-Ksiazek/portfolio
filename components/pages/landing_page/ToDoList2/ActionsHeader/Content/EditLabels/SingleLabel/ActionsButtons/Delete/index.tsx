// Tools
import { useRef } from "react";
// Types
import type { FunctionComponent } from "react";
import type { Label } from "landing_page/ToDoList2/@types";
// Other components
import DeleteLabelModal from "./DeleteLabelModal";
import ModalOpeningButton from "landing_page/ToDoList2/atoms/modal_actions/__SingleLabelModifier/ModalOpeningButton";
// Material UI Icons
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

interface DeleteLabelProps {
    label: Label;
}

const DeleteLabel: FunctionComponent<DeleteLabelProps> = (props) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            <ModalOpeningButton
                size="42px" //
                tooltip="Remove this label"
                ref={buttonRef}
            >
                <>
                    <DeleteOutlineOutlined />
                    Delete
                </>
            </ModalOpeningButton>

            <DeleteLabelModal
                ref={buttonRef} //
                label={props.label}
            />
        </>
    );
};

export default DeleteLabel;
