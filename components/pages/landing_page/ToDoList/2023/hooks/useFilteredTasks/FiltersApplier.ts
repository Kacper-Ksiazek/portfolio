// Types
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";
import type { TasksFilters } from "landing_page/ToDoList/2023/@types/Filters";

export class FiltersApplier {
    private filters: TasksFilters;
    private tasks: Task[];
    private _result: Task[] = [];

    public constructor(params: { filters: TasksFilters; tasks: Task[] }) {
        this.filters = params.filters;
        this.tasks = params.tasks;
    }

    public get result() {
        this.filter();
        this.sort();

        return this._result;
    }

    private filter() {
        const { withParticularLabel, completion, urgencyFilter } = this.filters;

        this._result = this.tasks.filter((target) => {
            // Apply particular label filter
            if (withParticularLabel !== "_ALL" && withParticularLabel !== target.labelID) return false;
            // Check completion
            if (completion !== "_ALL" && (completion === "NOT_COMPLETED_ONLY") === target.isCompleted) return false;

            // Check whether it is urgent only
            if (urgencyFilter === "URGENT_ONLY" && target.urgent === false) return false;

            return true;
        });
    }

    private sort() {
        const { sort, urgencyFilter } = this.filters;

        let result = this._result;
        if (sort === "OLDEST") result = result.sort((a, b) => a.createdAt - b.createdAt);
        else result = result.sort((a, b) => b.createdAt - a.createdAt);

        if (urgencyFilter === "URGENT_FIRST") {
            result = result.sort((el) => (el.urgent ? -1 : 1));
        }

        this._result = result;
    }
}
