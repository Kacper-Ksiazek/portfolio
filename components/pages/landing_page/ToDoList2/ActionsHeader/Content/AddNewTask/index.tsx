// Tools
import { CSS_REFERENCES } from "./css_references";
import { useNewTaskValidator } from "./hooks/useNewTaskValidator";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as NewTaskData from "./NewTaskData";
import HidePanelCheckbox from "./HidePanelCheckbox";
import { AddNewTaskContextProvider } from "./context";
import ConfirmationButton from "./ConfirmationButton";
import OptionalPropertyExplanation from "./OptionalPropertyExplanation";
import { AdditionalInformationWrapper, FooterActionsWrapper, TitleAndUrgencySwitchWrapper } from "./Wrappers";
// Styled components
import Paragraph from "landing_page/ToDoList2/atoms/Paragraph";

interface AddNewTaskProps {
    foldActionsHeaderPanel: () => void;
}

const AddNewTask: FunctionComponent<AddNewTaskProps> = (props) => {
    const { descriptionIsNotValid, labelIDIsNotValid, localizationIsNotValid, titleIsNotValid } = useNewTaskValidator();

    const disableAddNewTaskButton: boolean = descriptionIsNotValid || labelIDIsNotValid || localizationIsNotValid || titleIsNotValid;

    return (
        <>
            <Paragraph>Title</Paragraph>

            <TitleAndUrgencySwitchWrapper>
                <NewTaskData.TaskTitleInput id={CSS_REFERENCES.TITLE_INPUT} isInvalid={titleIsNotValid} />
                <NewTaskData.UrgencySwitch id={CSS_REFERENCES.URGENCY_SWITCH} />
            </TitleAndUrgencySwitchWrapper>

            <Paragraph>Details</Paragraph>

            <NewTaskData.TaskDescriptionInput id={CSS_REFERENCES.DESCRIPTION_INPUT} isInvalid={descriptionIsNotValid} />

            <AdditionalInformationWrapper id={CSS_REFERENCES.ADDITIONAL_INFORMATION_WRAPPER}>
                <NewTaskData.LabelPicker id={CSS_REFERENCES.LABEL_PICKER} />
                <NewTaskData.DueDatePicker id={CSS_REFERENCES.DUE_DATE_PICKER} />
                <NewTaskData.DueTimePicker id={CSS_REFERENCES.DUE_TIME_PICKER} />
                <NewTaskData.LocalizationInput id={CSS_REFERENCES.LOCALIZATION_INPUT} isInvalid={localizationIsNotValid} />
            </AdditionalInformationWrapper>

            <FooterActionsWrapper>
                <ConfirmationButton
                    id={CSS_REFERENCES.BUTTONS.ADD_NEW_TASK} //
                    disabled={disableAddNewTaskButton}
                    foldActionsHeaderPanel={props.foldActionsHeaderPanel}
                />

                <HidePanelCheckbox id={CSS_REFERENCES.BUTTONS.HIDE_PANEL} />

                <OptionalPropertyExplanation id={CSS_REFERENCES.OPTIONAL_PROPERTY_EXPLANATION} />
            </FooterActionsWrapper>
        </>
    );
};

const AddNewTaskWithContext: FunctionComponent<AddNewTaskProps> = (props) => {
    return (
        <AddNewTaskContextProvider>
            <AddNewTask {...props} />
        </AddNewTaskContextProvider>
    );
};

export default AddNewTaskWithContext;
