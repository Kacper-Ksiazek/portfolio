// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { DESCRIPTION_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Other components
import LengthIndicatorWrapper from "./_LengthIndicatorWrapper";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import OptionalPropertyIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

const TaskTaskDescriptionInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDescription(val: string | null) {
        updateNewTaskBody("description", val);
    }

    return (
        <LengthIndicatorWrapper
            id={props.id} //
            length={newTaskBody.description?.length ?? 0}
            restrictions={DESCRIPTION_RESTRICTIONS}
            width="66px"
        >
            <OptionalPropertyIndicator />

            <StyledInput
                placeholder="Provide more context or instructions for this task (optional)" //
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
        </LengthIndicatorWrapper>
    );
};

export default TaskTaskDescriptionInput;
