// Tools
import { useRef } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import ModalOpeningButton from "./ModalOpeningButton";
import ResetAffirmationModal from "./ResetAffirmationModal";

interface ResetButtonProps {
    disabled: boolean;
    handleReset: () => void;
}

const ResetButton: FunctionComponent<ResetButtonProps> = (props) => {
    const resetTasksButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <ModalOpeningButton disabled={props.disabled} ref={resetTasksButtonRef} />
            <ResetAffirmationModal ref={resetTasksButtonRef} handleReset={props.handleReset} />
        </>
    );
};

export default ResetButton;
