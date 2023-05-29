// Tools
import { useMemo } from "react";
import { useLabelsContext, useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ConfirmationButtonProps {
    newTaskBody: NewTaskBody;
    resetNewTaskBody: () => void;
}

const ConfirmationButton: FunctionComponent<ConfirmationButtonProps> = (props) => {
    const { labels } = useLabelsContext();
    const tasksListContext = useTasksListContext();

    const disableAddButton = useMemo<boolean>(() => {
        const { description, dueDate, labelID } = props.newTaskBody;

        if (description.length < 3 || description.length > 64) return true;
        else if (dueDate !== null && typeof dueDate != "string") return true;
        else if (Object.keys(labels).includes(labelID) === false) return true;

        return false;
    }, [labels, props.newTaskBody]);

    function addTask() {
        if (disableAddButton) return;

        tasksListContext.add({
            ...props.newTaskBody,
            isCompleted: false,
            createdAt: Date.now(),
        });

        props.resetNewTaskBody();
    }

    return (
        <div>
            <StyledButton
                sx={{
                    px: "24px", //
                    height: "42px",
                }}
                color="primary"
                onClick={addTask}
                disabled={disableAddButton}
            >
                Add
            </StyledButton>
        </div>
    );
};

export default ConfirmationButton;
