import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { LabelPicker, DueDatePicker, UrgencySwitch } from "landing_page/ToDoList2/atoms/modifiers";

const EditMode: FunctionComponent = () => {
    const editModeContext = useEditModeContext();

    return (
        <FlexBox>
            <UrgencySwitch
                value={editModeContext.newState.urgent} //
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                small
            />
            <LabelPicker
                value={editModeContext.newState.label} //
                updateValue={(val) => editModeContext.updateNewState({ label: val })}
                small
            />

            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                updateValue={(val) => editModeContext.updateNewState({ dueDate: val })}
                small
            />
        </FlexBox>
    );
};

export default EditMode;
