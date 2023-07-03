// Tools
import { useState } from "react";
import { CSS_CLASSES } from "../../css_references";
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
import { Paragraph } from "landing_page/ToDoList2/atoms";
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
            <Paragraph>Description</Paragraph>

            <TaskTitleInput
                value={newTaskBody.description} //
                setValue={(val) => updateNewTaskBody({ description: val })}
            />

            <Paragraph>Details</Paragraph>

            <FormFieldsOrganizer className={CSS_CLASSES.FORM_FIELDS.WRAPPER}>
                <StyledCheckbox
                    label="Urgent" //
                    value={newTaskBody.urgent}
                    updateValue={(val) => updateNewTaskBody({ urgent: val })}
                    className={CSS_CLASSES.FORM_FIELDS.URGENCY_SWITCH}
                />
                <DueDatePicker
                    value={newTaskBody.dueDate} //
                    updateValue={(dueDate) => updateNewTaskBody({ dueDate })}
                />
                <LabelPicker
                    value={newTaskBody.labelID} //
                    updateValue={(labelID) => updateNewTaskBody({ labelID })}
                />
            </FormFieldsOrganizer>

            <FlexBox sx={{ mb: "12px !important" }} className={CSS_CLASSES.BUTTONS.WRAPPER}>
                <ConfirmationButton
                    newTaskBody={newTaskBody} //
                    className={CSS_CLASSES.BUTTONS.ADD_NEW_TASK}
                    foldActionsHeaderPanel={hideThisPanelAfterAdding ? props.foldActionsHeaderPanel : null}
                    //
                    resetNewTaskBody={() => updateNewTaskBody(EMPTY_NEW_TASK_BODY)}
                />

                <StyledCheckbox
                    label="Hide this panel" //
                    value={hideThisPanelAfterAdding}
                    className={CSS_CLASSES.BUTTONS.HIDE_PANEL}
                    //
                    updateValue={(val) => setHideThisPanelAfterAdding(val)}
                />
            </FlexBox>
        </>
    );
};

export default AddNewTask;
