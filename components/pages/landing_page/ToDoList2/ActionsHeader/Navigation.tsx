// Types
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
import type { FunctionComponent, Dispatch, SetStateAction, ReactNode } from "react";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

interface ToDoListActionsNavigationProps {
    disableNavigation: boolean;
    currentStage: ActionHeaderSection;
    updateCurrentStage: Dispatch<SetStateAction<ActionHeaderSection>>;

    children: ReactNode;
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
            rightSideChildren={props.children}
            disableNavigation={props.disableNavigation}
            //
            sx={{ mb: "8px" }}
        />
    );
};

export default ToDoListActionsNavigation;
