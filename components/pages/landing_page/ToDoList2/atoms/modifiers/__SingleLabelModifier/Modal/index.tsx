// Tools
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { useModalControl, useNewLabelReducer, useValidator } from "./hooks";
// Types
import type { Color } from "./@types";
import type { FunctionComponent } from "react";
// Material UI Components
import Modal from "@mui/material/Modal";
// Other components
import ErrorMessage from "./ErrorMessage";
// Styled components
import ModalContentWrapper from "./ModalContentWrapper";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { StyledInput, StyledButton, StyledColorPicker } from "@/components/atoms/forms";

interface SingleLabelModifierModalProps {
    title: string;
    isOpen: boolean;
    actionButtonPrompt: string;

    handleAction: (color: Color) => void;
    onClose: () => void;
}

const SingleLabelModifierModal: FunctionComponent<SingleLabelModifierModalProps> = (props) => {
    const [shouldDisplayModal, closeModal] = useModalControl(props.onClose);
    const [newLabel, updateNewLabel] = useNewLabelReducer();

    const validationResult = useValidator(newLabel);

    function onActionButtonClick() {
        if (validationResult.field !== null) return;

        props.handleAction(newLabel);
        closeModal();
    }

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
            <ModalContentWrapper>
                <h3>{props.title}</h3>

                <FlexBox>
                    <StyledInput
                        value={newLabel.name} //
                        placeholder="Enter label's name..."
                        className="label-name"
                        error={validationResult.field === "name_input" && newLabel.name.length > 0}
                        onChange={(e) => updateNewLabel({ name: e.target.value })}
                    />
                    <StyledColorPicker
                        value={newLabel.color} //
                        onChange={(e) => updateNewLabel({ color: e.target.value as any })}
                        error={validationResult.field === "color_picker"}
                    />
                </FlexBox>

                <ErrorMessage validationResult={validationResult} />

                <FlexBox>
                    <StyledButton color="error" onClick={closeModal}>
                        Cancel
                    </StyledButton>
                    <StyledButton
                        color="primary" //
                        onClick={onActionButtonClick}
                        disabled={validationResult.code !== "NONE"}
                    >
                        {props.actionButtonPrompt}
                    </StyledButton>
                </FlexBox>
            </ModalContentWrapper>
        </Modal>
    );
};

export default SingleLabelModifierModal;
