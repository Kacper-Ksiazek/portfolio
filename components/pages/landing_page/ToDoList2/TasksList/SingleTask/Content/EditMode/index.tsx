// Tools
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as TaskFields from "./TaskFields";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";

const EditMode: FunctionComponent = () => {
    return (
        <>
            <TaskFields.Title />
            <TaskFields.Description />

            <FlexBox className={CSS_REFERENCES.CONTENT.PIECE_OF_CONTENT_WRAPPER}>
                <TaskFields.UrgencySwitch />
                <TaskFields.LabelPicker />
                <TaskFields.DueDatePicker />
                <TaskFields.DueTimePicker />
                <TaskFields.LocalizationInput />
            </FlexBox>
        </>
    );
};

export default EditMode;
