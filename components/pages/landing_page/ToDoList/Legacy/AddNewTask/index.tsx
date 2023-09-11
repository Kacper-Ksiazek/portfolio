// Tools
import { forwardRef, useState } from "react";
// Types
import type { ChangeEvent } from "react";
// Styled components
import StyledInput from "../_styled_components/StyledInput";
import AddTaskButton from "./styled_components/AddTaskButton";
import AddNewTaskBase from "./styled_components/AddNewTaskBase";

interface AddNewTaskProps {
    saveNewTask: (task: string) => void;
}

const AddNewTask = forwardRef<HTMLInputElement, AddNewTaskProps>((props, inputElementRef) => {
    const [newTask, setNewTask] = useState<string>("");

    const saveNewTask = () => {
        props.saveNewTask(newTask);
        setTimeout(() => {
            setNewTask("");
        }, 10);
    };

    return (
        <AddNewTaskBase id="add-new-task-wrapper">
            <StyledInput
                type="text" //
                placeholder="Type a new task here..."
                value={newTask}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
                ref={inputElementRef as any}
            />
            <AddTaskButton
                disabled={newTask.length < 5 || newTask.length > 100} //
                onClick={saveNewTask}
            >
                Add
            </AddTaskButton>
        </AddNewTaskBase>
    );
});
AddNewTask.displayName = "AddNewTask";

export default AddNewTask;
