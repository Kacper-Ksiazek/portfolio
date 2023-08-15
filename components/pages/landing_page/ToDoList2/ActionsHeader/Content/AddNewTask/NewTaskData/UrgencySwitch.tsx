// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

const TaskUrgencySwitch: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateUrgency(val: boolean) {
        updateNewTaskBody("urgent", val);
    }

    return (
        <StyledCheckbox
            label="Urgent" //
            value={newTaskBody.urgent}
            updateValue={(val) => updateUrgency(val)}
            id={id}
        />
    );
};

export default TaskUrgencySwitch;
