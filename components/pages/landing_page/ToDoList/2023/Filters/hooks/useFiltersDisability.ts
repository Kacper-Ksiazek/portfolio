// Tools
import { useMemo } from "react";
// Types
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";
import type { TasksFilters } from "landing_page/ToDoList/2023/@types/Filters";

export function useFiltersDisability(filteredTasks: Task[], completionFilter: TasksFilters["completion"]): boolean {
    return useMemo<boolean>(() => {
        if (completionFilter !== "_ALL") return false;
        if (filteredTasks.length < 2) return true;

        const first = filteredTasks[0].isCompleted;

        for (const el of filteredTasks) {
            if (el.isCompleted !== first) return false;
        }

        return true;
    }, [filteredTasks, completionFilter]);
}
