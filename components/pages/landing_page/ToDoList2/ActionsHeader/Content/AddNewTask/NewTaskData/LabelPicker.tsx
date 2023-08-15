// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelPicker from "landing_page/ToDoList2/atoms/modifiers/LabelPicker";

const TaskLabelPicker: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLabelID(val: string) {
        updateNewTaskBody("labelID", val);
    }

    return (
        <span id={id} style={{ display: "flex" }}>
            <LabelPicker
                value={newTaskBody.labelID} //
                updateValue={(labelID) => updateLabelID(labelID)}
            />
        </span>
    );
};

export default TaskLabelPicker;
