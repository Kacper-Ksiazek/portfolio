// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as NewTaskData from "./NewTaskData";
import HidePanelCheckbox from "./HidePanelCheckbox";
import { AddNewTaskContextProvider } from "./context";
import ConfirmationButton from "./ConfirmationButton";
import { AdditionalInformationWrapper, FooterActionsWrapper, TitleAndUrgencySwitchWrapper } from "./Wrappers";
// Styled components
import { Paragraph } from "landing_page/ToDoList2/atoms";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

interface AddNewTaskProps {
    foldActionsHeaderPanel: () => void;
}

const AddNewTask: FunctionComponent<AddNewTaskProps> = (props) => {
    return (
        <AddNewTaskContextProvider>
            <Paragraph>Title</Paragraph>

            <TitleAndUrgencySwitchWrapper>
                <NewTaskData.TaskTitleInput id={CSS_REFERENCES.TITLE_INPUT} />
                <NewTaskData.UrgencySwitch id={CSS_REFERENCES.URGENCY_SWITCH} />
            </TitleAndUrgencySwitchWrapper>

            <Paragraph>Details</Paragraph>

            <NewTaskData.TaskDescriptionInput id={CSS_REFERENCES.DESCRIPTION_INPUT} />

            <AdditionalInformationWrapper id={CSS_REFERENCES.ADDITIONAL_INFORMATION_WRAPPER}>
                <NewTaskData.LabelPicker id={CSS_REFERENCES.LABEL_PICKER} />
                <NewTaskData.DueDatePicker id={CSS_REFERENCES.DUE_DATE_PICKER} />
                <NewTaskData.DueTimePicker id={CSS_REFERENCES.DUE_TIME_PICKER} />
                <NewTaskData.LocalizationInput id={CSS_REFERENCES.LOCALIZATION_INPUT} />
            </AdditionalInformationWrapper>

            <FooterActionsWrapper>
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
            </FooterActionsWrapper>
        </AddNewTaskContextProvider>
    );
};

export default AddNewTask;
