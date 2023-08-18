// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const EditTaskDueTimePickerInput: FunctionComponent<{ id?: string; isInvalid?: boolean }> = ({ id, isInvalid }) => {
    const editModeContext = useEditModeContext();

    return (
        <span>
            <LocalizationInput
                value={editModeContext.newState.localization ?? ""} //
                placeholder="Localization"
                updateValue={(val) => editModeContext.updateNewState(val === "" ? null : (val as any))}
                small
            />
        </span>
    );
};

export default EditTaskDueTimePickerInput;
