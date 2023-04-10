// Tools
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
import { useEditModeContext } from "../../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import DueDatePicker from "./DueDatePicker";
import UrgencySwitch from "./UrgencySwitch";
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

const EditMode: FunctionComponent = () => {
    const editModeContext = useEditModeContext();
    const { labels: availableLabels } = useLabelsContext();

    return (
        <FlexBox>
            <UrgencySwitch
                value={editModeContext.newState.urgent}
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                //
            />
            <StyledSelect
                value={editModeContext.newState.label} //
                options={availableLabels}
                onChange={(e) => editModeContext.updateNewState({ label: e.target.value })}
            />

            <DueDatePicker
                newValue={editModeContext.newState.dueDate} //
                updateNewValue={(val) => editModeContext.updateNewState({ dueDate: val })}
            />
        </FlexBox>
    );
};

export default EditMode;
