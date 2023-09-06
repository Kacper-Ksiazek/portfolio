// Tools
import { useCallback } from "react";
import { useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { NewTaskBody } from "landing_page/ToDoList2/@types/Tasks";

interface UseAddTaskButtonOnClickProps {
    disableOnClick: boolean;
    newTaskBody: NewTaskBody;

    resetNewTaskBody: () => void;
    foldActionsHeaderPanel: (() => void) | null;
}

export function useAddTaskButtonOnClick(params: UseAddTaskButtonOnClickProps): () => void {
    const tasksListContext = useTasksListContext();
    const { disableOnClick, foldActionsHeaderPanel, newTaskBody, resetNewTaskBody } = params;

    return useCallback(() => {
        if (disableOnClick === true) return;

        tasksListContext.add({
            ...newTaskBody,
            isCompleted: false,
            createdAt: Date.now(),
        });

        if (typeof foldActionsHeaderPanel === "function") {
            if (window) {
                scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: window.scrollY + 150,
                });
            }
            foldActionsHeaderPanel();
        } else {
            if (window) {
                scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: window.scrollY + 350,
                });
            }
        }
        setTimeout(() => {
            resetNewTaskBody();
        }, 300);
    }, [disableOnClick, foldActionsHeaderPanel, newTaskBody, resetNewTaskBody, tasksListContext]);
}
