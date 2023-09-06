// Tools
import { useSnackbar } from "@/hooks/useSnackbar";
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";

interface UseSingleTasksActionsResult {
    deleteTaskWithID: (id: Task["id"]) => () => void;
    editTaskWithID: (id: Task["id"]) => (cb: TaskEditCallback, skipSnackbar?: boolean) => void;
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

    function editTaskWithID(id: Task["id"]): (cb: TaskEditCallback, skipSnackbar?: boolean) => void {
        return (cb, skipSnackbar = false) => {
            try {
                taskListContext.edit(id, cb);

                if (skipSnackbar === false) {
                    displaySnackbar({
                        msg: "Task has been edited successfully",
                        severity: "success",
                    });
                }
            } catch (err) {
                if (skipSnackbar === false) {
                    displaySnackbar({
                        msg: "Task couldn't have been edited",
                        severity: "error",
                    });
                }
            }
        };
    }

    return {
        editTaskWithID,
        deleteTaskWithID,
    };
}
