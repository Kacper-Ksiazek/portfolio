// Types
import type { Dispatch } from "react";

export interface LabelsFilters {
    order: "NEWEST" | "OLDEST" | "FREQUENTLY_USED" | "RARELY_USED";
    displayNotUsedLabelsOnly: boolean;
    urgentModeAlternativeAppearance: boolean;
}

export type UpdateEditLabelsFilters = Dispatch<Partial<LabelsFilters>>;
