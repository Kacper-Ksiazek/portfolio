// Types
import type { NewTaskBody } from "landing_page/ToDoList2/@types/Tasks";

export const EMPTY_NEW_TASK_BODY: Omit<NewTaskBody, "labelID"> = {
    title: "",
    urgent: false,
    description: null,
    dueDate: null,
    dueTime: null,
    localization: null,
};
