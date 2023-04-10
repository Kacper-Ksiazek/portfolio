// Tools
import { useLabelsContext } from "../../../hooks";
import { useEditModeContext } from "../../hooks/useEditModeContext";
import { CLASSES } from "@/components/pages/landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import UrgencySwitch from "./UrgencySwitch";
import DueDatePicker from "./DueDatePicker";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
import LabelsAndDueTimeBase from "./Wrapper";
import StyledSelect from "@/components/atoms/forms/StyledSelect";

interface LabelsAndDueTimeProps {
    label: string;
    isUrgent: boolean;
}

const LabelsAndDueTime: FunctionComponent<LabelsAndDueTimeProps> = (props) => {
    const editModeContext = useEditModeContext();
    const { labels: availableLabels } = useLabelsContext();

    return (
        <LabelsAndDueTimeBase>
            <SmoothConditionalRender when={!editModeContext.isOpened}>
                <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
                    <Label indicateUrgency={props.isUrgent} />
                    <Label label={props.label} />
                </FlexBox>
            </SmoothConditionalRender>

            <SmoothConditionalRender when={editModeContext.isOpened}>
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
            </SmoothConditionalRender>
        </LabelsAndDueTimeBase>
    );
};

export default LabelsAndDueTime;
