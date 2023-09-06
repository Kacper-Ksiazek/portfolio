// Tools
import { createContext } from "react";
import { useTasksCounter } from "./useTasksCounter";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { TaskCountsCollection } from "landing_page/ToDoList2/@types/Counters";

interface I_TaskCounterContext {
    counter: TaskCountsCollection;
}

export const TasksCounterContext = createContext<I_TaskCounterContext>({} as any);

export const TasksCounterContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const counter = useTasksCounter();

    return (
        <TasksCounterContext.Provider
            value={{
                counter,
            }}
        >
            {children}
        </TasksCounterContext.Provider>
    );
};
