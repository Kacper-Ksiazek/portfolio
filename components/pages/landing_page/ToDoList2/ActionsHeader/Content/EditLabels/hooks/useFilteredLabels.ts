// Tools
import { useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useTaskCounterContext } from "../../hooks/useTaskCounterContext";
// Types
import type { LabelsFilters, UpdateEditLabelsFilters } from "../@types";
import type { LabelWithAssociatedCounts } from "landing_page/ToDoList2/@types/Counters";

interface UseFilteredLabels {
    labels: LabelWithAssociatedCounts[];
    filters: LabelsFilters;
    updateFilters: UpdateEditLabelsFilters;
}

export function useFilteredLabels(): UseFilteredLabels {
    const { counter } = useTaskCounterContext();

    const [filters, updateFilters] = useSimpleReducer<LabelsFilters>({
        displayNotUsedLabelsOnly: false,
        order: "NEWEST",
        urgentModeAlternativeAppearance: false,
    });

    const labels = useMemo<UseFilteredLabels["labels"]>(() => {
        return (
            [...counter.entries()]
                // Convert labels into proper syntax
                .map(([id, amountOfTasks], index) => {
                    return { id, amountOfTasks };
                })
                // Not used only
                .filter((el): boolean => {
                    if (filters.displayNotUsedLabelsOnly) return el.amountOfTasks.inTotal === 0;
                    return true;
                })
                //
                .sort((a, b) => {
                    switch (filters.order) {
                        case "FREQUENTLY_USED":
                            return b.amountOfTasks.inTotal - a.amountOfTasks.inTotal;
                        case "RARELY_USED":
                            return a.amountOfTasks.inTotal - b.amountOfTasks.inTotal;
                        case "NEWEST":
                            return Number(b.id) - Number(a.id);
                        case "OLDEST":
                            return Number(a.id) - Number(b.id);
                    }
                })
        );
    }, [counter, filters.displayNotUsedLabelsOnly, filters.order]);
    //

    return { filters, labels, updateFilters };
}
