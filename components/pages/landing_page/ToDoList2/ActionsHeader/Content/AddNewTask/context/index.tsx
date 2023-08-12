// Tools
import { createContext, useState } from "react";
import { EMPTY_NEW_TASK_BODY } from "./empty_task";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";
import type { I_AddNewTaskContext, UpdateNewTaskBodyFn } from "./@types";

export const addNewTaskContext = createContext<I_AddNewTaskContext>({} as any);

export const AddNewTaskContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { labels } = useLabelsContext();

    const [hideThisPanelAfterAdding, setHideThisPanelAfterAdding] = useState<boolean>(true);
    const [newTaskBody, _updateNewTaskBody] = useSimpleReducer<NewTaskBody>({
        ...EMPTY_NEW_TASK_BODY,
        labelID: Object.keys(labels)[0],
    });

    const updateNewTaskBody: UpdateNewTaskBodyFn = function (property, value) {
        return _updateNewTaskBody({ [property]: value });
    };

    function resetNewTaskBody() {
        _updateNewTaskBody(EMPTY_NEW_TASK_BODY);
    }

    return (
        <addNewTaskContext.Provider
            value={{
                newTaskBody,
                hideThisPanelAfterAdding,

                resetNewTaskBody,
                updateNewTaskBody,
                setHideThisPanelAfterAdding,
            }}
        >
            {props.children}
        </addNewTaskContext.Provider>
    );
};
