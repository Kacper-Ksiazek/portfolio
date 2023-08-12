// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLocalization(val: string | null) {
        updateNewTaskBody("localization", val);
    }

    return (
        <span id={id}>
            <LocalizationInput
                value={newTaskBody.localization} //
                placeholder="Localization"
                updateValue={(val) => updateLocalization(val)}
            />
        </span>
    );
};

export default TaskTitleInput;
