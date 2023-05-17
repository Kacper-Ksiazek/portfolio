// Tools
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { NewTaskBody } from "./@types";
import type { FunctionComponent } from "react";
// Other components
import TaskTitleInput from "./TaskTitleInput";
import ConfirmationButton from "./ConfirmationButton";
import FormFieldsOrganizer from "./FormFieldsOrganizer";
// Styled components
import { DueDatePicker, LabelPicker, UrgencySwitch } from "landing_page/ToDoList2/atoms/modifiers";

const EMPTY_NEW_TASK_BODY: Omit<NewTaskBody, "labelID"> = {
    description: "",
    dueDate: null,
    urgent: false,
};

const AddNewTask: FunctionComponent = () => {
    const { labels } = useLabelsContext();

    const [newTaskBody, updateNewTaskBody] = useSimpleReducer<NewTaskBody>({
        ...EMPTY_NEW_TASK_BODY,
        labelID: Object.keys(labels)[0],
    });

    return (
        <>
            <TaskTitleInput
                value={newTaskBody.description} //
                setValue={(val) => updateNewTaskBody({ description: val })}
            />

            <FormFieldsOrganizer>
                <UrgencySwitch value={newTaskBody.urgent} updateValue={(val) => updateNewTaskBody({ urgent: val })} />
                <DueDatePicker value={newTaskBody.dueDate} updateValue={(dueDate) => updateNewTaskBody({ dueDate })} />
                <LabelPicker value={newTaskBody.labelID} updateValue={(labelID) => updateNewTaskBody({ labelID })} />
            </FormFieldsOrganizer>

            <span style={{ flexGrow: 1 }} />

            <ConfirmationButton
                newTaskBody={newTaskBody} //
                resetNewTaskBody={() => updateNewTaskBody(EMPTY_NEW_TASK_BODY)}
            />
        </>
    );
};

export default AddNewTask;
