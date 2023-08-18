// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import DueDatePicker from "@/components/atoms/forms/StyledDatePicker";

const EditTaskDueDatePickerInput: FunctionComponent<{ id?: string }> = ({ id }) => {
    const editModeContext = useEditModeContext();

    return (
        <span>
            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                updateValue={(dueDate) => editModeContext.updateNewState({ dueDate })}
                componentThemeID="TRANSPARENT_WHITE"
                small
            />
        </span>
    );
};

export default EditTaskDueDatePickerInput;
