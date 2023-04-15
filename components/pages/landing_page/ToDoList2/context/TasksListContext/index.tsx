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
    const [tasks, setTasks, isLoaded] = useLocalStorage<Task[]>("to-do-list-tasks", DEFAULT_TASKS, {
        validate: (dataFromLocalStorage: unknown) => {
            try {
                const expectedKeys = Object.keys(DEFAULT_TASKS[0]);

                for (const element of dataFromLocalStorage as unknown[]) {
                    const actualKeys = Object.keys(element as any);

                    if (actualKeys.length !== expectedKeys.length) throw new Error("The amount of keys of received object did not match the amount of keys of expected object.");
                    expectedKeys.forEach((key) => {
                        if (key in actualKeys === false) throw new Error(`Key ${key} is missing`);
                    });
                }
                //
                return true;
            } catch (_) {
                // When validation fails
                return false;
            }
        },
    });

    function remove(idToBeRemoved: ID) {
        setTasks((tasks) => tasks.filter((el) => el.id != idToBeRemoved));
    }

    function add(newTask: Omit<TaskWithoutID, "isCompleted">) {
        setTasks((tasks) => {
            const now = Date.now();

            return [
                ...tasks,
                {
                    ...newTask,
                    id: now,
                    isCompleted: false,
                    createdAt: now,
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
            key={isLoaded ? "LOCAL_STORAGE_LOADED" : "LOADING"}
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
