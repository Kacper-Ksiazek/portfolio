// Tools
import { taskDataContext } from ".";
import { useTaskRemover } from "./hooks/useTaskRemover";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";

interface TaskDataProviderContext {
    data: Task;

    remove: () => void;
    update: (cb: TaskEditCallback, skipSnackbar?: boolean) => void;

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
