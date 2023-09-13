// Tools
import { useRef, createContext } from "react";
import { getDefaultTasks } from "./default_tasks";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { localStorageValidator, scrollToTheListsTop } from "./utils";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Task, TaskEditCallback, TaskWithoutID } from "landing_page/ToDoList/2023/@types/Tasks";
import type { TasksListContext as I_TasksListContext } from "landing_page/ToDoList/2023/@types/Contexts";
import { get } from "http";

export const taskListContext = createContext<I_TasksListContext>({} as any);

export const TaskListContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const tasksWrapperRef = useRef<HTMLElement | null>(null);

    const { displaySnackbar } = useSnackbar();
    const [tasks, setTasks, isLoaded] = useLocalStorage<Task[]>("to-do-list-tasks", getDefaultTasks(), {
        validator: localStorageValidator,
    });

    function remove(idToBeRemoved: Task["id"]) {
        setTasks((tasks) => tasks.filter((el) => el.id != idToBeRemoved));
    }

    function add(newTask: Omit<TaskWithoutID, "isCompleted">) {
        scrollToTheListsTop(tasksWrapperRef.current);
        setTimeout(() => {
            displaySnackbar({
                msg: "Task has been created",
                severity: "success",
            });

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
        }, 300);
    }

    function edit(idToBeEdited: Task["id"], cb: TaskEditCallback) {
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

    function resetToDefault() {
        setTasks(getDefaultTasks());
    }

    return (
        <taskListContext.Provider
            key={isLoaded ? "LOCAL_STORAGE_LOADED" : "LOADING"}
            value={{
                tasks,
                tasksWrapperRef,

                add,
                edit,
                remove,
                resetToDefault,
            }}
        >
            {children}
        </taskListContext.Provider>
    );
};
