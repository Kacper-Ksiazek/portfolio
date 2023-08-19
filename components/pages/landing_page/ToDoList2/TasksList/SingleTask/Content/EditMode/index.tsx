// Tools
import { CSS_REFERENCES } from "./edit_mode_css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as TaskFields from "./TaskFields";
// Styled components

const EditMode: FunctionComponent = () => {
    return (
        <>
            <TaskFields.Title className={CSS_REFERENCES.TITLE} />

            <TaskFields.UrgencySwitch className={CSS_REFERENCES.URGENCY_SWITCH} />
            <TaskFields.LabelPicker className={CSS_REFERENCES.LABEL_PICKER} />
            <TaskFields.DueDatePicker className={CSS_REFERENCES.DUE_DATE} />
            <TaskFields.DueTimePicker className={CSS_REFERENCES.DUE_TIME} />
            <TaskFields.LocalizationInput className={CSS_REFERENCES.LOCALIZATION} />

            <TaskFields.Description className={CSS_REFERENCES.DESCRIPTION} />
        </>
    );
};

export default EditMode;
