// Tools
import { useState } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";
// Other components
import TaskTitleInput from "./TaskTitleInput";
import ConfirmationButton from "./ConfirmationButton";
import FormFieldsOrganizer from "./FormFieldsOrganizer";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";
import { DueDatePicker, LabelPicker } from "landing_page/ToDoList2/atoms/modifiers";

const EMPTY_NEW_TASK_BODY: Omit<NewTaskBody, "labelID"> = {
    description: "",
    dueDate: null,
    urgent: false,
};

interface AddNewTaskProps {
    foldActionsHeaderPanel: () => void;
}

const AddNewTask: FunctionComponent<AddNewTaskProps> = (props) => {
    const { labels } = useLabelsContext();
    const [hideThisPanelAfterAdding, setHideThisPanelAfterAdding] = useState<boolean>(true);

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
                <StyledCheckbox
                    label="Urgent" //
                    value={newTaskBody.urgent}
                    updateValue={(val) => updateNewTaskBody({ urgent: val })}
                />
                <DueDatePicker value={newTaskBody.dueDate} updateValue={(dueDate) => updateNewTaskBody({ dueDate })} />
                <LabelPicker value={newTaskBody.labelID} updateValue={(labelID) => updateNewTaskBody({ labelID })} />
            </FormFieldsOrganizer>

            <span style={{ flexGrow: 1 }} />

            <FlexBox>
                <ConfirmationButton
                    newTaskBody={newTaskBody} //
                    foldActionsHeaderPanel={hideThisPanelAfterAdding ? props.foldActionsHeaderPanel : null}
                    resetNewTaskBody={() => updateNewTaskBody(EMPTY_NEW_TASK_BODY)}
                />

                <StyledCheckbox
                    label="Hide this panel" //
                    value={hideThisPanelAfterAdding}
                    updateValue={(val) => setHideThisPanelAfterAdding(val)}
                />
            </FlexBox>
        </>
    );
};

export default AddNewTask;
