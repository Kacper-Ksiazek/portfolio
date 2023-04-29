// Types
import type { Stage } from "./@types";
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

interface ToDoListActionsNavigationProps {
    currentStage: Stage;
    updateCurrentStage: Dispatch<SetStateAction<Stage>>;
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
                ] as { label: string; value: Stage }[]
            } //
            currentSection={props.currentStage}
            onChoose={props.updateCurrentStage}
            sx={{ mb: "24px" }}
        />
    );
};

export default ToDoListActionsNavigation;
