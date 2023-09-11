// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import DueDatePicker from "@/components/atoms/forms/StyledDatePicker";

const TaskDueDatePicker: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDueDate(val: string | null) {
        updateNewTaskBody("dueDate", val);
    }

    return (
        <DueDatePicker
            id={id}
            value={newTaskBody.dueDate} //
            updateValue={(dueDate) => updateDueDate(dueDate)}
        />
    );
};

export default TaskDueDatePicker;
