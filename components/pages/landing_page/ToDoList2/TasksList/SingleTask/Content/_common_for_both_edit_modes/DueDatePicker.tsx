// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import DueDatePicker from "@/components/atoms/forms/StyledDatePicker";

interface EditTaskDueDatePickerInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskDueDatePickerInput: FunctionComponent<EditTaskDueDatePickerInputProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <span className={props.className}>
            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                updateValue={(dueDate) => editModeContext.updateNewState({ dueDate })}
                small={props.small}
            />
        </span>
    );
};

export default EditTaskDueDatePickerInput;
