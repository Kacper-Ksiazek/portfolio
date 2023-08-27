// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledTimePicker from "@/components/atoms/forms/StyledTimePicker";

interface EditTaskDueTimePickerInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskDueTimePickerInput: FunctionComponent<EditTaskDueTimePickerInputProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <span className={props.className}>
            <StyledTimePicker
                value={editModeContext.newState.dueTime} //
                updateValue={(val) => editModeContext.updateNewState({ dueTime: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small={props.small}
            />
        </span>
    );
};

export default EditTaskDueTimePickerInput;
