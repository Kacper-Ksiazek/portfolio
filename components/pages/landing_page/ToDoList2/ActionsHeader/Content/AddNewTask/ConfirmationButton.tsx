// Tools
import { useMemo } from "react";
import { useLabelsContext, useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ConfirmationButtonProps {
    newTaskBody: NewTaskBody;

    resetNewTaskBody: () => void;
    foldActionsHeaderPanel: (() => void) | null;
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

        if (typeof props.foldActionsHeaderPanel === "function") {
            if (window) {
                scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: window.scrollY + 150,
                });
            }
            props.foldActionsHeaderPanel();
        } else {
            if (window) {
                scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: window.scrollY + 350,
                });
            }
        }
        setTimeout(() => {
            props.resetNewTaskBody();
        }, 300);
    }

    return (
        <StyledButton
            sx={{
                px: "18px", //
                height: "42px",
                mr: "8px",
            }}
            color="primary"
            onClick={addTask}
            disabled={disableAddButton}
        >
            <AddRounded />
            Add new task
        </StyledButton>
    );
};

export default ConfirmationButton;
