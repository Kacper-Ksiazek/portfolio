// Tools
import { useContext } from "react";
import { TasksCounterContext } from "../context/TaskCounterContext";

export function useTaskCounterContext() {
    return useContext(TasksCounterContext);
}
