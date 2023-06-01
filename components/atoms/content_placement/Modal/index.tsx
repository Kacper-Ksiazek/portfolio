// Tools
import { useModalControl } from "./hooks/useModalControl";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { SxProps } from "@/@types/MUI";
import type { ActionButtonProps } from "./@types";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Modal from "@mui/material/Modal";
// Other components
import ModalActions from "./ModalActions";
// Styled components
import ModalContentWrapper from "./ModalContentWrapper";

export interface StyledModalProps {
    title: string;
    isOpen: boolean;
    children: ReactNode;

    actionButton: ActionButtonProps;

    sx?: SxProps;
    onClose: () => void;
}

const StyledModal: FunctionComponent<StyledModalProps> = (props) => {
    const [shouldDisplayModal, closeModal] = useModalControl(props.onClose);

    return (
        <Modal
            open={props.isOpen} //
            sx={(theme) => {
                return {
                    ...theme.mixins.flex_center,
                    ...(shouldDisplayModal === false ? { animation: `${fadeSimpleOUT} .24s linear both` } : {}),
                };
            }}
        >
            <ModalContentWrapper sx={props.sx}>
                <h3>{props.title}</h3>

                {props.children}

                <ModalActions
                    closeModal={closeModal} //
                    actionButton={props.actionButton}
                />
            </ModalContentWrapper>
        </Modal>
    );
};

export default StyledModal;
