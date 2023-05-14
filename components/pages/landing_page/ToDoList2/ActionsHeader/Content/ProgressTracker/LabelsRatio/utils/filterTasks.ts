// Types
import type { Task } from "landing_page/ToDoList2/@types";

export function filterTasks(tasks: Task[], where: Partial<Task>): Task[] {
    const filteringRequirements = new Map(
        Array.from(
            Object.keys(where).map((key) => {
                return [key, where[key as keyof typeof where]];
            })
        )
    );

    return tasks.filter((el) => {
        for (const [property, value] of filteringRequirements.entries()) {
            if (el[property as keyof typeof el] !== value) return false;
        }
        return true;
    });
}
