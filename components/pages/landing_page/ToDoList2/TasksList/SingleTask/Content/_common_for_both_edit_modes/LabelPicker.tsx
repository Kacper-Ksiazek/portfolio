// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelPicker from "@/components/pages/landing_page/ToDoList2/atoms/modifiers/LabelPicker";

interface EditTaskLabelPickerInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskLabelPickerInput: FunctionComponent<EditTaskLabelPickerInputProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <span style={{ display: "flex", minWidth: "264px" }} className={props.className}>
            <LabelPicker
                value={editModeContext.newState.labelID} //
                updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small={props.small}
            />
        </span>
    );
};

export default EditTaskLabelPickerInput;
