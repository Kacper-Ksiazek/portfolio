// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelPicker from "landing_page/ToDoList/2023/atoms/modifiers/LabelPicker";

const TaskLabelPicker: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLabelID(val: string) {
        updateNewTaskBody("labelID", val);
    }

    return (
        <span id={props.id} style={{ display: "flex" }}>
            <LabelPicker
                value={newTaskBody.labelID} //
                error={props.isInvalid}
                updateValue={(labelID) => updateLabelID(labelID)}
            />
        </span>
    );
};

export default TaskLabelPicker;
