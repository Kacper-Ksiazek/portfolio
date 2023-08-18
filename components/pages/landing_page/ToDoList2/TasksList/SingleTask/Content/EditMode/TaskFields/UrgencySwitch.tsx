// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

const EditTaskUrgencySwitchInput: FunctionComponent<{ id?: string }> = ({ id }) => {
    const editModeContext = useEditModeContext();

    return (
        <span>
            <StyledCheckbox
                label="Urgent" //
                value={editModeContext.newState.urgent}
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                componentThemeID="TRANSPARENT_WHITE"
                small
            />
        </span>
    );
};

export default EditTaskUrgencySwitchInput;
