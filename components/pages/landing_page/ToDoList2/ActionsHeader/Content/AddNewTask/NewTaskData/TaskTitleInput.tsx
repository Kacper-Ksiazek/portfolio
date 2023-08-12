// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateTitle(val: string) {
        updateNewTaskBody("title", val);
    }

    return (
        <span id={id}>
            <StyledInput
                placeholder="What do you have to do?" //
                value={newTaskBody.title}
                onChange={(e) => updateTitle(e.target.value)}
            />
        </span>
    );
};

export default TaskTitleInput;
