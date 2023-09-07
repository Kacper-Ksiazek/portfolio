// Tools
import { useTaskDataContext, useEditModeContext } from "landing_page/ToDoList/2023/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import FancyShape from "./FancyShape";

interface CompletionButtonWrapperProps {
    /** Slot for **ActulatCompletionButton** */
    children: ReactNode;
}

const CompletionButtonWrapper: FunctionComponent<CompletionButtonWrapperProps> = (props) => {
    const { isOpened: isEditModeOpened } = useEditModeContext();
    const { originalTask, taskIsBeingRemoved } = useTaskDataContext();

    const isUrgent: boolean = originalTask.urgent;
    const isCompleted: boolean = originalTask.isCompleted;
    const hasDescription: boolean = originalTask.description !== null;

    return (
        <div
            style={{
                marginRight: "12px",
                alignSelf: "flex-start",
                marginTop: "4px",
            }}
        >
            {(hasDescription || isEditModeOpened) && (
                <FancyShape
                    urgent={isUrgent} //
                    completed={isCompleted}
                    inEditMode={isEditModeOpened}
                    taskIsBeingRemoved={taskIsBeingRemoved}
                />
            )}

            {props.children}
        </div>
    );
};

export default CompletionButtonWrapper;
