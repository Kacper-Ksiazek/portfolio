// Tools
import { useContext } from "react";
import { taskDataContext } from "../context/taskDataContext";

export function useTaskDataContext() {
    return useContext(taskDataContext);
}
