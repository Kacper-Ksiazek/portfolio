// Types
import type { NewTaskBody } from "landing_page/ToDoList/2023/@types/Tasks";

export interface I_AddNewTaskContext {
    newTaskBody: NewTaskBody;
    hideThisPanelAfterAdding: boolean;

    resetNewTaskBody: () => void;
    updateNewTaskBody: UpdateNewTaskBodyFn;
    setHideThisPanelAfterAdding: (val: boolean) => void;
}

export type UpdateNewTaskBodyFn = <T extends keyof NewTaskBody>(property: T, value: NewTaskBody[T]) => void;
