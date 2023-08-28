// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { DESCRIPTION_RESTRICTIONS } from "landing_page/ToDoList2/validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";

const TaskTaskDescriptionInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDescription(val: string | null) {
        updateNewTaskBody("description", val);
    }

    return (
        <WrapperWithWitdthIndicator
            wrapperProps={{
                id: props.id,
            }}
            lengthIndicator={{
                currentLength: newTaskBody.description?.length ?? 0, //
                max: DESCRIPTION_RESTRICTIONS.max,
                min: DESCRIPTION_RESTRICTIONS.min,
                optional: true,
                width: "66px",
            }}
        >
            <OptionalPropertIndicator />

            <StyledInput
                placeholder="Provide more context or instructions for this task" //
                value={newTaskBody.description ?? ""}
                onChange={(e) => updateDescription(e.target.value === "" ? null : e.target.value)}
                multiline
                error={props.isInvalid}
                sx={{
                    ".MuiInputBase-multiline": {
                        padding: "8px 16px !important",
                    },
                }}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTaskDescriptionInput;
