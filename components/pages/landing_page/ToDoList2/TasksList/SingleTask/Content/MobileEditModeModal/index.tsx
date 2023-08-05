// Tools
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Modal from "@/components/atoms/content_placement/Modal";

interface MobileEditModeModalProps {
    //
}

const MobileEditModeModal: FunctionComponent<MobileEditModeModalProps> = (props) => {
    const { isOpened, toggleIsOpened } = useEditModeContext();

    return (
        <Modal
            isOpen={isOpened}
            onClose={toggleIsOpened}
            title="Modal"
            actionButton={{
                prompt: "Essa",
                onClick: () => null,
                disabled: false,
            }}
        >
            <span></span>
        </Modal>
    );
};

export default MobileEditModeModal;
