// Tools
import { CSS_REFERENCES as EDIT_MODE_CSS_REFERENCES } from "./edit_mode_css_references";
import { CSS_REFERENCES as TASK_CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as TaskFields from "./TaskFields";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";

const EditMode: FunctionComponent = () => {
    return (
        <>
            <TaskFields.Title className={EDIT_MODE_CSS_REFERENCES.TITLE} />
            <TaskFields.Description className={EDIT_MODE_CSS_REFERENCES.DESCRIPTION} />

            <FlexBox className={TASK_CSS_REFERENCES.CONTENT.PIECE_OF_CONTENT_WRAPPER}>
                <TaskFields.UrgencySwitch className={EDIT_MODE_CSS_REFERENCES.URGENCY_SWITCH} />
                <TaskFields.LabelPicker className={EDIT_MODE_CSS_REFERENCES.LABEL_PICKER} />
                <TaskFields.DueDatePicker className={EDIT_MODE_CSS_REFERENCES.DUE_DATE} />
                <TaskFields.DueTimePicker className={EDIT_MODE_CSS_REFERENCES.DUE_TIME} />
                <TaskFields.LocalizationInput className={EDIT_MODE_CSS_REFERENCES.LOCALIZATION} />
            </FlexBox>
        </>
    );
};

export default EditMode;
