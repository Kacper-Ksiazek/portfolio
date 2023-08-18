// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelPicker from "@/components/pages/landing_page/ToDoList2/atoms/modifiers/LabelPicker";

const EditTaskLabelPickerInput: FunctionComponent<{ id?: string }> = ({ id }) => {
    const editModeContext = useEditModeContext();

    return (
        <span style={{ display: "flex" }}>
            <LabelPicker
                value={editModeContext.newState.labelID} //
                updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small
            />
        </span>
    );
};

export default EditTaskLabelPickerInput;
