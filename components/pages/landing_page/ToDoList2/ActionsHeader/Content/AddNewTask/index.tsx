// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as NewTaskData from "./NewTaskData";
import HidePanelCheckbox from "./HidePanelCheckbox";
import { AddNewTaskContextProvider } from "./context";
import ConfirmationButton from "./ConfirmationButton";
import FormFieldsOrganizer from "./FormFieldsOrganizer";
// Styled components
import { Paragraph } from "landing_page/ToDoList2/atoms";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

interface AddNewTaskProps {
    foldActionsHeaderPanel: () => void;
}

const AddNewTask: FunctionComponent<AddNewTaskProps> = (props) => {
    return (
        <AddNewTaskContextProvider>
            <Paragraph>Title</Paragraph>

            <FlexBox sx={{ gap: "6px", flexWrap: "wrap", width: "100%" }}>
                <NewTaskData.TaskTitleInput id={CSS_REFERENCES.TITLE_INPUT} />
                <NewTaskData.UrgencySwitch id={CSS_REFERENCES.URGENCY_SWITCH} />
            </FlexBox>

            <Paragraph>Details</Paragraph>

            <NewTaskData.TaskDescriptionInput id={CSS_REFERENCES.DESCRIPTION_INPUT} />

            <FormFieldsOrganizer id={CSS_REFERENCES.ADDITIONAL_INFORMATION_WRAPPER}>
                <NewTaskData.LabelPicker />
                <NewTaskData.DueDatePicker id={CSS_REFERENCES.DUE_DATE_PICKER} />
                <NewTaskData.DueTimePicker id={CSS_REFERENCES.DUE_TIME_PICKER} />
                <NewTaskData.LocalizationInput id={CSS_REFERENCES.LOCALIZATION_INPUT} />
            </FormFieldsOrganizer>

            <FlexBox sx={{ mb: "12px !important", gap: "6px", mt: "24px !important", width: "100%" }} id={CSS_REFERENCES.BUTTONS.WRAPPER}>
                <ConfirmationButton
                    id={CSS_REFERENCES.BUTTONS.ADD_NEW_TASK} //
                    foldActionsHeaderPanel={props.foldActionsHeaderPanel}
                />

                <HidePanelCheckbox id={CSS_REFERENCES.BUTTONS.HIDE_PANEL} />

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
        </AddNewTaskContextProvider>
    );
};

export default AddNewTask;
