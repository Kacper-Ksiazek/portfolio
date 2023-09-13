import type { Dispatch } from "react";
import type { LabelID } from "./Labels";

export type SpecificLabelOnlyFilter = LabelID | "_ALL";

export interface TasksFilters {
    sort: "NEWEST" | "OLDEST";
    withParticularLabel: SpecificLabelOnlyFilter;
    completion: "_ALL" | "COMPLETED_ONLY" | "NOT_COMPLETED_ONLY";
    urgencyFilter: "URGENT_FIRST" | "URGENT_ONLY" | "_DEFAULT";
}

export type UpdateTasksFilters = Dispatch<Partial<TasksFilters>>;
