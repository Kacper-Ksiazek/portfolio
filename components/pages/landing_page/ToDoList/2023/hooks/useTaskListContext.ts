// Tools
import { useContext } from "react";
import { taskListContext } from "../context/TasksListContext";

export function useTasksListContext() {
    return useContext(taskListContext);
}
