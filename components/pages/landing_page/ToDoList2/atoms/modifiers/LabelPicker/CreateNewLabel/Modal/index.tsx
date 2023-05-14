// Tools
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { useModalControl, useNewLabelReducer, useValidator } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Modal from "@mui/material/Modal";
// Other components
import ErrorMessage from "./ErrorMessage";
// Styled components
import ModalContentWrapper from "./ModalContentWrapper";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { StyledInput, StyledButton, StyledColorPicker } from "@/components/atoms/forms";
import { useLabelsUpdatersContext } from "@/components/pages/landing_page/ToDoList2/hooks";

interface CreateNewLabelModalProps {
    isOpen: boolean;

    onAdd: (newLabelID: string) => void;
    onClose: () => void;
}

const CreateNewLabelModal: FunctionComponent<CreateNewLabelModalProps> = (props) => {
    const labelsUpdatersContext = useLabelsUpdatersContext();

    const [shouldDisplayModal, closeModal] = useModalControl(props.onClose);
    const [newLabel, updateNewLabel] = useNewLabelReducer();

    const validationResult = useValidator(newLabel);

    function addLabel() {
        props.onAdd(
            labelsUpdatersContext.add({
                color: newLabel.color,
                name: newLabel.name,
            })
        );
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
                <h3>Create a new label</h3>

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
                        onClick={addLabel}
                        disabled={validationResult.code !== "NONE"}
                    >
                        Add
                    </StyledButton>
                </FlexBox>
            </ModalContentWrapper>
        </Modal>
    );
};

export default CreateNewLabelModal;
