// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import StyledTimePicker from "@/components/atoms/forms/StyledTimePicker";

const TaskDueTimePicker: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDueTime(val: string | null) {
        updateNewTaskBody("dueTime", val);
    }

    return (
        <StyledTimePicker
            id={id}
            value={newTaskBody.dueTime} //
            updateValue={(val) => updateDueTime(val)}
        />
    );
};

export default TaskDueTimePicker;
