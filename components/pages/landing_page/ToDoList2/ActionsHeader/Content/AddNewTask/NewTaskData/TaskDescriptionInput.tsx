// Tools
import { DESCRIPTION_RESTRICTIONS } from "../validators/length_restrictions";
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import WrapperWithWitdthIndicator from "./_WrapperWithLengthIndicator";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

const TaskTaskDescriptionInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDescription(val: string) {
        updateNewTaskBody("description", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={props.id}
            lengthIndicator={{
                currentLength: newTaskBody.description?.length ?? 0, //
                max: DESCRIPTION_RESTRICTIONS.max,
                min: DESCRIPTION_RESTRICTIONS.min,
                width: "66px",
            }}
        >
            <OptionalPropertIndicator />

            <StyledInput
                placeholder="Provide more context or instructions for this task" //
                value={newTaskBody.description ?? ""}
                onChange={(e) => updateDescription(e.target.value)}
                multiline
                error={props.isInvalid}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTaskDescriptionInput;
