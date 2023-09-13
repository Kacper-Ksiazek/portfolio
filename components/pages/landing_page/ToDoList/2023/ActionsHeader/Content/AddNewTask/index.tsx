// Tools
import { CSS_REFERENCES } from "./css_references";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useAddNewTaskContext } from "./hooks/useAddNewTaskContext";
import { useTaskValidator } from "landing_page/ToDoList/2023/validators/useTaskValidator";
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
import Header from "@/components/pages/landing_page/ToDoList/2023/atoms/Header";

interface AddNewTaskProps {
    foldActionsHeaderPanel: () => void;
}

const AddNewTask: FunctionComponent<AddNewTaskProps> = (props) => {
    const { width } = useWindowSizes();

    const { newTaskBody } = useAddNewTaskContext();
    const validationResult = useTaskValidator(newTaskBody);

    const alternativeUrgencySwitchPlacement: boolean = width <= 1000;

    return (
        <>
            <Header>Title</Header>

            <TitleAndUrgencySwitchWrapper>
                <NewTaskData.TaskTitleInput id={CSS_REFERENCES.TITLE_INPUT} isInvalid={validationResult.titleIsInvalid} />
                {alternativeUrgencySwitchPlacement === false && <NewTaskData.UrgencySwitch id={CSS_REFERENCES.URGENCY_SWITCH} />}
            </TitleAndUrgencySwitchWrapper>

            <Header>Details</Header>

            <NewTaskData.TaskDescriptionInput id={CSS_REFERENCES.DESCRIPTION_INPUT} isInvalid={validationResult.descriptionIsInvalid} />

            <AdditionalInformationWrapper id={CSS_REFERENCES.ADDITIONAL_INFORMATION_WRAPPER}>
                {alternativeUrgencySwitchPlacement === true && <NewTaskData.UrgencySwitch id={CSS_REFERENCES.URGENCY_SWITCH} />}

                <NewTaskData.LabelPicker id={CSS_REFERENCES.LABEL_PICKER} isInvalid={validationResult.labelIDIsInvalid} />
                <NewTaskData.DueDatePicker id={CSS_REFERENCES.DUE_DATE_PICKER} />
                <NewTaskData.DueTimePicker id={CSS_REFERENCES.DUE_TIME_PICKER} />
                <NewTaskData.LocalizationInput id={CSS_REFERENCES.LOCALIZATION_INPUT} isInvalid={validationResult.localizationIsInvalid} />
            </AdditionalInformationWrapper>

            <FooterActionsWrapper>
                <ConfirmationButton
                    id={CSS_REFERENCES.BUTTONS.ADD_NEW_TASK} //
                    disabled={validationResult.everythingIsValid === false}
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
