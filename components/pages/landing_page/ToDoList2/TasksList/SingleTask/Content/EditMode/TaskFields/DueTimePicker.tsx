// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledTimePicker from "@/components/atoms/forms/StyledTimePicker";

const EditTaskDueTimePickerInput: FunctionComponent<{ id?: string }> = ({ id }) => {
    const editModeContext = useEditModeContext();

    return (
        <span>
            <StyledTimePicker
                value={editModeContext.newState.dueTime} //
                updateValue={(val) => editModeContext.updateNewState({ dueTime: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small
            />
        </span>
    );
};

export default EditTaskDueTimePickerInput;
