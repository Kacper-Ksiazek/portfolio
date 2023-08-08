// Tools
import { useState } from "react";
import { CSS_REFERENCES } from "./css_references";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody, Task } from "landing_page/ToDoList2/@types";
// Other components
import ConfirmationButton from "./ConfirmationButton";
import FormFieldsOrganizer from "./FormFieldsOrganizer";
// Styled components
import { StyledInput, StyledTimePicker } from "@/components/atoms/forms";
import { Paragraph } from "landing_page/ToDoList2/atoms";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";
import { DueDatePicker, LabelPicker, LocalizationInput } from "landing_page/ToDoList2/atoms/modifiers";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

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
            <Paragraph>Title</Paragraph>

            <FlexBox sx={{ gap: "6px", flexWrap: "wrap", width: "100%" }}>
                <span id={CSS_REFERENCES.TITLE_INPUT}>
                    <StyledInput
                        placeholder="What do you have to do?" //
                        value={newTaskBody.title}
                        onChange={(e) => updateNewTaskBody({ title: e.target.value })}
                    />
                </span>

                <StyledCheckbox
                    label="Urgent" //
                    value={newTaskBody.urgent}
                    updateValue={(val) => updateNewTaskBody({ urgent: val })}
                    id={CSS_REFERENCES.URGENCY_SWITCH}
                />
            </FlexBox>

            <Paragraph>Details</Paragraph>

            <span id={CSS_REFERENCES.DESCRIPTION} style={{ position: "relative" }}>
                <OptionalPropertIndicator />

                <StyledInput
                    placeholder="Emphasize relevant details in order not to forget them later on" //
                    value={newTaskBody.additionalInformation.description}
                    onChange={(e) => updateOptionalProperty("description", e.target.value)}
                    sx={{
                        input: {
                            paddingLeft: "16px !important",
                        },
                    }}
                />
            </span>

            <FormFieldsOrganizer id={CSS_REFERENCES.FORM_FIELDS.WRAPPER}>
                <span style={{ display: "flex" }}>
                    <LabelPicker
                        value={newTaskBody.labelID} //
                        updateValue={(labelID) => updateNewTaskBody({ labelID })}
                    />
                </span>

                <DueDatePicker
                    value={newTaskBody.additionalInformation.dueDate} //
                    updateValue={(dueDate) => updateOptionalProperty("dueDate", dueDate)}
                />

                <StyledTimePicker
                    value={newTaskBody.additionalInformation.dueTime} //
                    updateValue={(val) => updateOptionalProperty("dueTime", val)}
                />

                <LocalizationInput
                    value={newTaskBody.additionalInformation.localization} //
                    placeholder="Localization"
                    updateValue={(val) => updateOptionalProperty("localization", val)}
                />
            </FormFieldsOrganizer>

            <FlexBox sx={{ mb: "12px !important", gap: "6px", mt: "24px !important", width: "100%" }} id={CSS_REFERENCES.BUTTONS.WRAPPER}>
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

                <span style={{ flexGrow: 1 }}></span>

                <span
                    style={{
                        position: "relative", //
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "18px",
                        userSelect: "none",
                    }}
                >
                    <OptionalPropertIndicator sx={{ top: "50%", transform: "translateY(-50%)" }} />
                    <span style={{ opacity: 0.8 }}>- Optional property</span>
                </span>
            </FlexBox>
        </>
    );
};

export default AddNewTask;
