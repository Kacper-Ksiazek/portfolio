// Tools
// --
// Types
import type { FunctionComponent } from "react";
// Other components
import * as Actions from "./Actions";
import { Title, UrgencySwitch, LabelPicker, Description, DueDatePicker, DueTimePicker, LocalizationInput } from "./TaskFields";
// Styled components

const EditMode: FunctionComponent = () => {
    return (
        <>
            <Title />

            <UrgencySwitch />
            <LabelPicker />
            <DueDatePicker />
            <DueTimePicker />

            <LocalizationInput />

            <Description />

            <Actions.SaveChanges />
            <Actions.Discard />
        </>
    );
};

export default EditMode;
