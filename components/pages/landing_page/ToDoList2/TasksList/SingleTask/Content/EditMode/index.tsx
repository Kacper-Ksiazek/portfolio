// Types
import type { FunctionComponent } from "react";
// Other components
import * as Actions from "./Actions";
import { Title, UrgencySwitch, LabelPicker, Description, DueDatePicker, DueTimePicker, LocalizationInput } from "./TaskFields";
// Styled components
import { TaskTitleBase } from "../ViewMode/TaskTitle";

const EditMode: FunctionComponent = () => {
    return (
        <>
            <TaskTitleBase sx={{ mb: "4px" }}>
                <h4>Edit mode</h4>
            </TaskTitleBase>

            <Title small />

            <UrgencySwitch small />
            <LabelPicker small />
            <DueDatePicker small />
            <DueTimePicker small />

            <LocalizationInput />

            <Description small />

            <Actions.SaveChanges />
            <Actions.Discard />
        </>
    );
};

export default EditMode;
