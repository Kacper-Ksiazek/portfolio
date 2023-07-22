import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";
import { LabelPicker, DueDatePicker } from "landing_page/ToDoList2/atoms/modifiers";

const EditMode: FunctionComponent = () => {
    const editModeContext = useEditModeContext();

    return (
        <FlexBox>
            <StyledCheckbox
                label="Urgent" //
                value={editModeContext.newState.urgent}
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                small
            />
            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                updateValue={(val) => editModeContext.updateNewState({ dueDate: val })}
                small
            />
            <LabelPicker
                value={editModeContext.newState.labelID} //
                updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                small
            />
        </FlexBox>
    );
};

export default EditMode;
