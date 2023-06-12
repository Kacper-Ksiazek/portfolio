// Tools
import { forwardRef } from "react";
// Types
import type { LabelID } from "landing_page/ToDoList2/@types";
// Other components
import Communique from "./Communique";
import LabelsToDeleteList from "./ListOfLabelsToDelete";
import ConfirmationModal from "@/components/atoms/ConfirmationModal";

interface DeleteUnusedLabelsConfirmationModalProps {
    unusedLabels: LabelID[];
    handleDeletion: () => void;
}

const DeleteUnusedLabelsConfirmationModal = forwardRef<HTMLButtonElement, DeleteUnusedLabelsConfirmationModalProps>((props, ref) => {
    return (
        <ConfirmationModal
            ref={ref}
            title="Delete unused labels"
            actionButton={{
                disabled: false,
                prompt: "Remove",
                onClick: props.handleDeletion,
            }}
        >
            <>
                <Communique amountOfUnusedLabels={props.unusedLabels.length} />
                <LabelsToDeleteList idsOfLabelsToBeDeleted={props.unusedLabels} />
            </>
        </ConfirmationModal>
    );
});

DeleteUnusedLabelsConfirmationModal.displayName = "DeleteUnusedLabelsConfirmationModal";
export default DeleteUnusedLabelsConfirmationModal;
