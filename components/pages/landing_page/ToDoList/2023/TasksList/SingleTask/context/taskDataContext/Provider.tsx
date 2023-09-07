// Tools
import { taskDataContext } from ".";
import { useTaskRemover } from "./hooks/useTaskRemover";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Task, EditTask, RemoveTask } from "landing_page/ToDoList/2023/@types/Tasks";

interface TaskDataProviderContext {
    data: Task;

    update: EditTask;
    remove: RemoveTask;

    children: ReactNode;
}

const TaskDataContextProvider: FunctionComponent<TaskDataProviderContext> = (props) => {
    const { isTaskBeingRemoved, remove } = useTaskRemover(props.remove);

    return (
        <taskDataContext.Provider
            value={{
                originalTask: props.data,
                taskIsBeingRemoved: isTaskBeingRemoved,
                removeTask: remove,
                updateTask: props.update,
            }}
        >
            {props.children}
        </taskDataContext.Provider>
    );
};

export default TaskDataContextProvider;
