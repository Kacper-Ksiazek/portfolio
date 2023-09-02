// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
// Styled components
import CompletionButtonBase from "./Base";

interface ActualCompletionButtonProps {
    isCompleted: boolean;
    toggleCompletion: () => void;
}

const ActualCompletionButton: FunctionComponent<ActualCompletionButtonProps> = (props) => {
    const { isOpened: isInEditMode } = useEditModeContext();

    const classNames: string = [
        props.isCompleted ? "checked" : "", //
        isInEditMode ? "in-edit-mode" : "",
    ].join(" ");

    return (
        <CompletionButtonBase
            onClick={props.toggleCompletion} //
            className={classNames}
            disabled={isInEditMode}
        >
            <CheckRounded className="check-icon" />
            <ModeEditOutlineOutlined className="edit-mode-icon" />
        </CompletionButtonBase>
    );
};

export default ActualCompletionButton;
