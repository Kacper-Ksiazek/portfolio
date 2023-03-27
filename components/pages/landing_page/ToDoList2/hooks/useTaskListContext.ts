// Tools
import { useContext } from "react";
import { taskListContext } from "../context/TasksListContext";

export function useTaskListContext() {
    return useContext(taskListContext);
}
