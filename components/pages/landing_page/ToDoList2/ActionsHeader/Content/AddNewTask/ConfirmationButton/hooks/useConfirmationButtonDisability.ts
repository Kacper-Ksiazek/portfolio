// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { NewTaskBody } from "landing_page/ToDoList2/@types";

export function useConfirmationButtonDisability(newTaskBody: NewTaskBody): boolean {
    const { labels } = useLabelsContext();

    return useMemo<boolean>(() => {
        const { description, dueDate, labelID } = newTaskBody;

        if (description.length < 3 || description.length > 64) return true;
        else if (dueDate !== null && typeof dueDate != "string") return true;
        else if (Object.keys(labels).includes(labelID) === false) return true;

        return false;
    }, [labels, newTaskBody]);
}
