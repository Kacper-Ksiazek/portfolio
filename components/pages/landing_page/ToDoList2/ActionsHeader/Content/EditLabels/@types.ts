// Types
import type { Dispatch } from "react";
import type { LabelID } from "landing_page/ToDoList2/context/LabelsContext/@types";
import type { SingleTaskCounts } from "landing_page/ToDoList2/ActionsHeader/@types";

export interface FilteredLabel {
    id: LabelID;

    amountOfTasks: SingleTaskCounts;
}

export interface LabelsFilters {
    order: "NEWEST" | "OLDEST" | "FREQUENTLY_USED" | "RARELY_USED";
    displayNotUsedLabelsOnly: boolean;
    urgentModeAlternativeAppearance: boolean;
}

export type UpdateFilters = Dispatch<Partial<LabelsFilters>>;

export interface UseFilteredLabels {
    labels: FilteredLabel[];
    filters: LabelsFilters;
    updateFilters: UpdateFilters;
}
