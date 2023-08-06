// Tools
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Modal from "@/components/atoms/content_placement/Modal";

interface ModalWrapperProps {
    children: ReactNode;
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <Modal
            isOpen={editModeContext.isOpened}
            onClose={editModeContext.toggleIsOpened}
            title="Edit task"
            actionButton={{
                prompt: "Save",
                onClick: editModeContext.saveAndExit,
                disabled: false,
            }}
            sx={{
                "&>*": {
                    height: "42px !important",
                },
                gap: "6px",
            }}
        >
            {props.children}
        </Modal>
    );
};

export default ModalWrapper;
