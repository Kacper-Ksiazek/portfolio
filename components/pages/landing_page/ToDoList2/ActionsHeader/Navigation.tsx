// Types
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

interface ToDoListActionsNavigationProps {
    currentStage: ActionHeaderSection;
    updateCurrentStage: Dispatch<SetStateAction<ActionHeaderSection>>;
}

const ToDoListActionsNavigation: FunctionComponent<ToDoListActionsNavigationProps> = (props) => {
    return (
        <NavigationBetweenSections
            sections={
                [
                    {
                        label: "Progress Tracker", //
                        value: "PROGRESS_TRACKER",
                    },
                    {
                        label: "Add new task",
                        value: "ADD_NEW_TASK",
                    },
                    {
                        label: "Edit labels",
                        value: "EDIT_LABELS",
                    },
                ] as { label: string; value: ActionHeaderSection }[]
            } //
            currentSection={props.currentStage}
            onChoose={props.updateCurrentStage}
            sx={{ mb: "16px" }}
        />
    );
};

export default ToDoListActionsNavigation;
