// Tools
import { createContext } from "react";
// Types
import type { Task, TaskWithoutID } from "../../@types";
import type { FunctionComponent, ReactNode } from "react";

interface SingleTaskContext {
    data: Task;
    edit: (val: Partial<TaskWithoutID>) => void;
}

export const singleTaskContext = createContext<SingleTaskContext>({} as any);

export const SingleTaskContextProvider: FunctionComponent<{ children: ReactNode } & SingleTaskContext> = (props) => {
    return (
        <singleTaskContext.Provider
            value={{
                data: props.data, //
                edit: props.edit,
            }}
        >
            {props.children}
        </singleTaskContext.Provider>
    );
};
