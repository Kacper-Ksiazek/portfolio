// Tools
import { createContext } from "react";
import { DEFAULT_TASKS } from "./default_tasks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useLabelsContext } from "../../hooks/useLabelsContext";
// Types
import type { Task } from "../../@types";
import type { FunctionComponent, ReactNode } from "react";

type ID = Task["id"];
type TaskWithoutID = Omit<Task, "id">;

export interface I_TasksListContext {
    tasks: Task[];

    remove: (id: ID) => void;
    add: (val: TaskWithoutID) => void;
    edit: (id: ID, val: Partial<TaskWithoutID>) => void;
}

export const taskListContext = createContext<I_TasksListContext>({} as any);

export const TaskListContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>("to-do-list-tasks", DEFAULT_TASKS);
    const { labels: availableLabels } = useLabelsContext();

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

    function edit(idToBeEdited: ID, newValue: Partial<TaskWithoutID>) {
        if (newValue.hasOwnProperty("label" as keyof TaskWithoutID)) {
            if (!availableLabels.includes(newValue.label as string)) {
                throw new Error(`Unsupported label of **${newValue.label}** has been provided`);
            }
        }

        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === idToBeEdited)
                    return {
                        ...task,
                        ...newValue,
                    };
                return task;
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
