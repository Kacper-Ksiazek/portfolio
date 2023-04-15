// Types
import type { Task, Filters as I_Filters } from "../../@types";

export class FiltersApplier {
    private filters: I_Filters;
    private tasks: Task[];
    private _result: Task[] = [];

    public constructor(params: { filters: I_Filters; tasks: Task[] }) {
        this.filters = params.filters;
        this.tasks = params.tasks;
    }

    public get result() {
        this.filter();
        this.sort();

        return this._result;
    }

    private filter() {
        const { withParticularLabel, completedOnly, urgencyFilter } = this.filters;

        this._result = this.tasks.filter((target) => {
            // Apply particular label filter
            if (withParticularLabel !== "_ALL" && withParticularLabel !== target.label) return false;
            // Check completed only
            if (completedOnly && target.isCompleted === false) return false;
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
            console.log("objecdasdat");
            result = result.sort((el) => (el.urgent ? -1 : 1));
        }

        this._result = result;
    }
}
