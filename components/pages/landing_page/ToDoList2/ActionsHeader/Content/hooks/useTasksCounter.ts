// Tools
import { useMemo } from "react";
import { useTasksListContext, useLabelsContext } from "../../../hooks";
// Types
import type { LabelID, Labels, TaskCounts, TaskCountsCollection, TaskCountsCollectionEntranceTuple } from "landing_page/ToDoList2/@types";

function TaskCounterFactory(labels: Labels): TaskCountsCollection {
    const labelsIDs = Object.keys(labels);

    return new Map<LabelID, TaskCounts>(
        labelsIDs.map((id): TaskCountsCollectionEntranceTuple => {
            return [id, { completed: 0, inTotal: 0 }];
        })
    );
}

interface UseTasksCounter {
    counter: TaskCountsCollection;
}

export function useTasksCounter(): UseTasksCounter {
    const { tasks } = useTasksListContext();
    const { labels } = useLabelsContext();

    const counter = useMemo<TaskCountsCollection>(() => {
        const counter = TaskCounterFactory(labels);

        tasks.forEach(({ labelID, isCompleted }) => {
            const present = counter.get(labelID) as TaskCounts;
            counter.set(labelID, {
                completed: present.completed + Number(isCompleted),
                inTotal: present.inTotal + 1,
            });
        });

        return counter;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [labels, tasks, Object.keys(labels).length]);

    return { counter };
}
