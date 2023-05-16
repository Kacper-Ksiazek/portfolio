// Types
import type { TaskWithoutID } from "landing_page/ToDoList2/@types";

export type NewTaskBody = Omit<TaskWithoutID, "createdAt" | "isCompleted">;
