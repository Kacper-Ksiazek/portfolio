// Tools
import { forwardRef } from "react";
// Types
import type { Label } from "landing_page/ToDoList/2023/@types/Labels";
// Other components
import ConfirmationModal from "@/components/atoms/ConfirmationModal";
// Styled components
import LabelBase from "landing_page/ToDoList/2023/atoms/LabelBase";

interface DeleteLabelModalProps {
    label: Label;
    handleDeletion: () => void;
}

const DeleteLabelModal = forwardRef<HTMLButtonElement, DeleteLabelModalProps>((props, buttonRef) => {
    return (
        <ConfirmationModal
            ref={buttonRef}
            title="Delete label"
            actionButton={{
                disabled: false,
                onClick: props.handleDeletion,
                prompt: "Delete",
            }}
        >
            <p>Are you sure you want to remove following label?</p>

            <LabelBase
                color={props.label.color} //
                sx={{ alignSelf: "center", mt: "8px" }}
            >
                {props.label.name}
            </LabelBase>
        </ConfirmationModal>
    );
});

DeleteLabelModal.displayName = "DeleteLabelModal";
export default DeleteLabelModal;
