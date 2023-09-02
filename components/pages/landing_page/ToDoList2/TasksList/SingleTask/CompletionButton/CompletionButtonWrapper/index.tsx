// Tools
import { CSS_REFERENCES } from "../../css_references";
import { useTaskDataContext, useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import FancyShape from "./FancyShape";

interface CompletionButtonWrapperProps {
    /** Slot for **ActulatCompletionButton** */
    children: ReactNode;
}

const CompletionButtonWrapper: FunctionComponent<CompletionButtonWrapperProps> = (props) => {
    const { originalTask } = useTaskDataContext();
    const { isOpened: isEditModeOpened } = useEditModeContext();

    const isUrgent: boolean = originalTask.urgent;
    const isCompleted: boolean = originalTask.isCompleted;
    const hasDescription: boolean = originalTask.description !== null;

    return (
        <div
            className={CSS_REFERENCES.COMPLETION_BUTTON}
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
                />
            )}

            {props.children}
        </div>
    );
};

export default CompletionButtonWrapper;
