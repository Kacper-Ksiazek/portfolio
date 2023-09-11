// Tools
import { forwardRef } from "react";
// Other components
import ConfirmationModal from "@/components/atoms/ConfirmationModal";

interface ResetAffirmationModalProps {
    performReset: () => void;
}

const ResetAffirmationModal = forwardRef<HTMLButtonElement, ResetAffirmationModalProps>((props, resetTasksButtonRef) => {
    return (
        <ConfirmationModal
            title="Affirmation required"
            ref={resetTasksButtonRef}
            actionButton={{
                disabled: false,
                onClick: props.performReset,
                prompt: "Reset",
            }}
        >
            <p>Are you sure you want to reset tasks and labels to their default values?</p>
            <strong>This action is irreversible</strong>
        </ConfirmationModal>
    );
});

ResetAffirmationModal.displayName = "ResetAffirmationModal";

export default ResetAffirmationModal;
