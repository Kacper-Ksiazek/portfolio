// Tools
import { useMemo } from "react";
// Types
import type { LabelID, TaskCountsCollection, TaskCounts } from "landing_page/ToDoList2/@types";

function unusedLabelFilter(singleMapEntry: [any, TaskCounts]): boolean {
    return singleMapEntry[1].inTotal == 0;
}

export function useUnusedLabels(counter: TaskCountsCollection): LabelID[] {
    return useMemo<LabelID[]>(() => {
        return [...counter.entries()]
            .filter(unusedLabelFilter) //
            .map(([labelId, counts]) => {
                return labelId;
            });
    }, [counter]);
}
