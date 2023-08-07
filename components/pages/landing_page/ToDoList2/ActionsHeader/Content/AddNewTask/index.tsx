// Tools
import { useState } from "react";
import { CSS_REFERENCES } from "./css_references";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody, Task } from "landing_page/ToDoList2/@types";
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
    title: "",
    urgent: false,
    additionalInformation: {
        description: null,
        dueDate: null,
        dueTime: null,
        localization: null,
    },
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

    function updateOptionalProperty(property: keyof Task["additionalInformation"], value: Task["additionalInformation"][typeof property]) {
        updateNewTaskBody({
            additionalInformation: {
                ...newTaskBody.additionalInformation,
                [property]: value,
            },
        });
    }
    return (
        <>
            <Paragraph>Description</Paragraph>

            <TaskTitleInput
                value={newTaskBody.title} //
                setValue={(val) => updateNewTaskBody({ title: val })}
            />

            <Paragraph>Details</Paragraph>

            <FormFieldsOrganizer id={CSS_REFERENCES.FORM_FIELDS.WRAPPER}>
                <StyledCheckbox
                    label="Urgent" //
                    value={newTaskBody.urgent}
                    updateValue={(val) => updateNewTaskBody({ urgent: val })}
                    id={CSS_REFERENCES.FORM_FIELDS.URGENCY_SWITCH}
                />
                <DueDatePicker
                    value={newTaskBody.additionalInformation.dueDate} //
                    updateValue={(dueDate) => updateOptionalProperty("dueDate", dueDate)}
                />
                <LabelPicker
                    value={newTaskBody.labelID} //
                    updateValue={(labelID) => updateNewTaskBody({ labelID })}
                />
            </FormFieldsOrganizer>

            <FlexBox sx={{ mb: "12px !important" }} id={CSS_REFERENCES.BUTTONS.WRAPPER}>
                <ConfirmationButton
                    newTaskBody={newTaskBody} //
                    id={CSS_REFERENCES.BUTTONS.ADD_NEW_TASK}
                    foldActionsHeaderPanel={hideThisPanelAfterAdding ? props.foldActionsHeaderPanel : null}
                    //
                    resetNewTaskBody={() => updateNewTaskBody(EMPTY_NEW_TASK_BODY)}
                />

                <StyledCheckbox
                    label="Hide this panel" //
                    value={hideThisPanelAfterAdding}
                    id={CSS_REFERENCES.BUTTONS.HIDE_PANEL}
                    //
                    updateValue={(val) => setHideThisPanelAfterAdding(val)}
                />
            </FlexBox>
        </>
    );
};

export default AddNewTask;
