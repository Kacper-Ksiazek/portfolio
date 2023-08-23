// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

interface EditTaskUrgencySwitchInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskUrgencySwitchInput: FunctionComponent<EditTaskUrgencySwitchInputProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <span className={props.className}>
            <StyledCheckbox
                label="Urgent" //
                value={editModeContext.newState.urgent}
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small={props.small}
            />
        </span>
    );
};

export default EditTaskUrgencySwitchInput;
