// Tools
import { forwardRef } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { Label } from "landing_page/ToDoList2/@types";
// Other components
import Progress from "../../Progress";
import * as ActionsButtons from "../../ActionsButtons";
import ConfirmationModal from "@/components/atoms/ConfirmationModal";
// Styled components
import LabelIndex from "../../LabelIndex";
import LabelBase from "landing_page/ToDoList2/atoms/LabelBase";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface DeleteLabelModalProps {
    label: Label;
}

const DeleteLabelModal = forwardRef<HTMLButtonElement, DeleteLabelModalProps>((props, buttonRef) => {
    return (
        <ConfirmationModal
            ref={buttonRef}
            title="Delete label"
            actionButton={{
                disabled: false,
                onClick: () => {},
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
