// Tools
import { useEditModeContext, useTaskDataContext } from "landing_page/ToDoList/2023/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
// Styled components
import CompletionButtonBase from "./Base";

const ActualCompletionButton: FunctionComponent<{ introAnimationsHaveEnded?: boolean }> = (props) => {
    const { isOpened: isInEditMode } = useEditModeContext();
    const { originalTask, updateTask } = useTaskDataContext();

    const classNames: string = [
        props.introAnimationsHaveEnded && originalTask.isCompleted ? "checked" : "", //
        isInEditMode ? "in-edit-mode" : "",
    ].join(" ");

    /**
     * Actived when the user clicks on the completion button.
     * It toggles the completion state of the task.
     */
    function toggleCompletion() {
        updateTask((currentValue) => ({ isCompleted: !currentValue.isCompleted }), true);
    }

    return (
        <CompletionButtonBase
            onClick={toggleCompletion} //
            className={classNames}
            disabled={isInEditMode}
        >
            <CheckRounded className="check-icon" />
            <ModeEditOutlineOutlined className="edit-mode-icon" />
        </CompletionButtonBase>
    );
};

ActualCompletionButton.defaultProps = {
    introAnimationsHaveEnded: true,
};

export default ActualCompletionButton;
