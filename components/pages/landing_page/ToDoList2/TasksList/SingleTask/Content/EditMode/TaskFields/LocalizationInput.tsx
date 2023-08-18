// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const EditTaskDueTimePickerInput: FunctionComponent<{ className?: string; isInvalid?: boolean }> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <span className={props.className}>
            <LocalizationInput
                value={editModeContext.newState.localization ?? ""} //
                placeholder="Localization"
                updateValue={(val) => editModeContext.updateNewState(val === "" ? null : (val as any))}
                error={props.isInvalid}
                small
            />
        </span>
    );
};

export default EditTaskDueTimePickerInput;
