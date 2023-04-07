// Tools
import { styled } from "@mui/material";
import { CLASSES } from "@/components/pages/landing_page/ToDoList2/css_references";
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import DueDatePicker from "./DueDatePicker";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import { useLabelsContext } from "../../../hooks";

const LabelsAndDueTimeBase = styled("div")(({ theme }) => ({
    height: "28px",
    position: "relative",
    width: "100%",
    ".MuiSelect-select": {
        width: "86px",
        paddingTop: "4px !important",
        paddingBottom: "4px !important",
        fontSize: "14px",
    },
    ".due-date-picker": {
        margin: "0 4px",
        // display: "none",
        ".MuiInputBase-input": {
            width: "112px",
            height: "32px",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "14px !important",
        },
        svg: {
            fontSize: "20px",
        },
    },
}));

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
