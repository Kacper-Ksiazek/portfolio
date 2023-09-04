// Tools
import { useSnackbar } from "@/hooks/useSnackbar";
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";

interface UseSingleTasksActionsResult {
    editTaskWithID: (id: Task["id"]) => (cb: TaskEditCallback) => void;
    deleteTaskWithID: (id: Task["id"]) => () => void;
}

export function useSingleTasksActions(): UseSingleTasksActionsResult {
    const { displaySnackbar } = useSnackbar();
    const taskListContext = useTasksListContext();

    function deleteTaskWithID(id: Task["id"]): () => void {
        return () => {
            try {
                taskListContext.remove(id);

                displaySnackbar({
                    msg: "Task has been removed successfully",
                    severity: "success",
                });
            } catch (err) {
                displaySnackbar({
                    msg: "Task couldn't have been removed",
                    severity: "error",
                });
            }
        };
    }

    function editTaskWithID(id: Task["id"]): (cb: TaskEditCallback) => void {
        return (cb) => {
            try {
                taskListContext.edit(id, cb);

                displaySnackbar({
                    msg: "Task has been edited successfully",
                    severity: "success",
                });
            } catch (err) {
                displaySnackbar({
                    msg: "Task couldn't have been edited",
                    severity: "error",
                });
            }
        };
    }

    return {
        editTaskWithID,
        deleteTaskWithID,
    };
}
