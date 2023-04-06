// Tools
import { createContext } from "react";
import { DEFAULT_TASKS } from "./default_tasks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { Task, TaskEditCallback, TaskWithoutID } from "../../@types";
import type { FunctionComponent, ReactNode } from "react";

type ID = Task["id"];

export interface I_TasksListContext {
    tasks: Task[];

    remove: (id: ID) => void;
    add: (val: TaskWithoutID) => void;
    edit: (id: ID, val: TaskEditCallback) => void;
}

export const taskListContext = createContext<I_TasksListContext>({} as any);

export const TaskListContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>("to-do-list-tasks", DEFAULT_TASKS);

    function remove(idToBeRemoved: ID) {
        setTasks((tasks) => tasks.filter((el) => el.id != idToBeRemoved));
    }

    function add(newTask: Omit<TaskWithoutID, "isCompleted">) {
        setTasks((tasks) => {
            return [
                ...tasks,
                {
                    ...newTask,
                    id: Date.now(),
                    isCompleted: false,
                },
            ];
        });
    }

    function edit(idToBeEdited: ID, cb: TaskEditCallback) {
        setTasks((tasks) =>
            tasks.map((currentValue) => {
                if (currentValue.id === idToBeEdited)
                    return {
                        ...currentValue,
                        ...cb(currentValue),
                    };
                return currentValue;
            })
        );
    }

    return (
        <taskListContext.Provider
            value={{
                tasks,
                add,
                edit,
                remove,
            }}
        >
            {children}
        </taskListContext.Provider>
    );
};
