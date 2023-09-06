// Tools
import { useNewLabelReducer, useValidator } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { ValidationResultCode } from "./@types";
import type { Label } from "landing_page/ToDoList2/@types/Labels";
// Other components
import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";
import Modal from "@/components/atoms/content_placement/Modal";
// Styled components
import FormFieldsWrapper from "./FormFieldsWrapper";
import { StyledInput, StyledColorPicker } from "@/components/atoms/forms";

interface SingleLabelModifierModalProps {
    title: string;
    isOpen: boolean;
    labelToBeEdited?: Label;
    actionButtonPrompt: string;
    noErrorsMessage: string;

    handleAction: (label: Label) => void;
    onClose: () => void;
}

const SingleLabelModifierModal: FunctionComponent<SingleLabelModifierModalProps> = (props) => {
    const [newLabel, updateNewLabel] = useNewLabelReducer(props.labelToBeEdited ?? null);
    const validationResult = useValidator(newLabel, props.labelToBeEdited ?? null);

    const newLabelNameHasBeenProvided: boolean = newLabel.name.length > 0;

    function onActionButtonClick() {
        props.handleAction(newLabel);
    }

    return (
        <Modal
            isOpen={props.isOpen} //
            title={props.title}
            onClose={props.onClose}
            actionButton={{
                disabled: validationResult.field !== null,
                onClick: onActionButtonClick,
                prompt: props.actionButtonPrompt,
            }}
        >
            <FormFieldsWrapper>
                <StyledInput
                    value={newLabel.name} //
                    placeholder="Enter label's name..."
                    className="label-name"
                    error={validationResult.field === "name_input" && newLabelNameHasBeenProvided}
                    onChange={(e) => updateNewLabel({ name: e.target.value })}
                />
                <StyledColorPicker
                    value={newLabel.color} //
                    onChange={(e) => updateNewLabel({ color: e.target.value as any })}
                    error={validationResult.field === "color_picker"}
                />
            </FormFieldsWrapper>

            <ErrorMessage
                validationResult={validationResult} //
                noErrorsMessage={props.noErrorsMessage}
            />

            <Preview
                color={newLabel.color} //
                name={newLabel.name}
                validationError={!(["NONE", "NOTHNIG_TO_UPDATE"] as ValidationResultCode[]).includes(validationResult.code) && newLabelNameHasBeenProvided}
            />
        </Modal>
    );
};

export default SingleLabelModifierModal;
