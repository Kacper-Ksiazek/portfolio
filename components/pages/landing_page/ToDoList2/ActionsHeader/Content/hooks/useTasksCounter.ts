// Tools
import { useCallback, useMemo } from "react";
import { useTasksListContext, useLabelsContext } from "../../../hooks";
// Types
import { LabelID, Labels } from "../../../context/LabelsContext/@types";
import type { TasksCounter, SingleTaskCounts, CountTasksWithLabel, MapEntranceTuple } from "../../@types";

function TaskCounterFactory(labels: Labels): TasksCounter {
    const labelsIDs = Object.keys(labels);

    return new Map<LabelID, SingleTaskCounts>(
        labelsIDs.map((id): MapEntranceTuple => {
            return [id, { completed: 0, inTotal: 0 }];
        })
    );
}

interface UseTasksCounter {
    counter: TasksCounter;
    countTasksWithLabel: CountTasksWithLabel;
}

export function useTasksCounter(): UseTasksCounter {
    const { tasks } = useTasksListContext();
    const { labels } = useLabelsContext();

    const counter = useMemo<TasksCounter>(() => {
        const counter = TaskCounterFactory(labels);

        tasks.forEach(({ labelID, isCompleted }) => {
            const present = counter.get(labelID) as SingleTaskCounts;
            counter.set(labelID, {
                completed: present.completed + Number(isCompleted),
                inTotal: present.inTotal + 1,
            });
        });

        return counter;
    }, [labels, tasks]);

    const countTasksWithLabel = useCallback<CountTasksWithLabel>(
        (labelID: LabelID) => {
            if (counter.has(labelID)) return counter.get(labelID) as SingleTaskCounts;

            throw new Error(`Trying to get counts of non existing label with id equal to **${labelID}**`);
        },
        [counter]
    );

    return { counter, countTasksWithLabel };
}
