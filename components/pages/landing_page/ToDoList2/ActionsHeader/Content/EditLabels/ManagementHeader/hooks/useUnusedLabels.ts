// Tools
import { useMemo } from "react";
import { useTaskCounterContext } from "../../../hooks/useTaskCounterContext";
// Types
import type { LabelID } from "landing_page/ToDoList2/@types/Labels";
import type { TaskCounts } from "landing_page/ToDoList2/@types/Counters";

function unusedLabelFilter(singleMapEntry: [any, TaskCounts]): boolean {
    return singleMapEntry[1].inTotal == 0;
}

export function useUnusedLabels(): LabelID[] {
    const { counter } = useTaskCounterContext();

    return useMemo<LabelID[]>(() => {
        return [...counter.entries()]
            .filter(unusedLabelFilter) //
            .map(([labelId, counts]) => {
                return labelId;
            });
    }, [counter]);
}
