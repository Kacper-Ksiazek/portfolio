// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDescription(val: string) {
        updateNewTaskBody("description", val);
    }

    return (
        <span id={id} style={{ position: "relative" }}>
            <OptionalPropertIndicator />

            <StyledInput
                placeholder="Emphasize relevant details in order not to forget them later on" //
                value={newTaskBody.description}
                onChange={(e) => updateDescription(e.target.value)}
                sx={{
                    input: {
                        paddingLeft: "16px !important",
                    },
                }}
            />
        </span>
    );
};

export default TaskTitleInput;
