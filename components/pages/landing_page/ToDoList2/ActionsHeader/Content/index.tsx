// Types
import type { Stage } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import AddNewTask from "./AddNewTask";
import ProgressTracker from "./ProgressTracker";

interface ToDoListActionsContentProps {
    currentStage: Stage;
    isStageChanging: boolean;
}

const ToDoListActionsContent: FunctionComponent<ToDoListActionsContentProps> = (props) => {
    switch (props.currentStage) {
        case "ADD_NEW_TASK":
            return <AddNewTask />;
        case "EDIT_LABELS":
            return <></>;
        case "PROGRESS_TRACKER":
            return <ProgressTracker />;
    }
};

export default ToDoListActionsContent;
