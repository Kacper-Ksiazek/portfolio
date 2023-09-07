// Tools
import { useMemo } from "react";
import { useTasksListContext, useLabelsContext } from "../../../hooks";
// Types
import type { LabelID, LabelsCollection } from "landing_page/ToDoList/2023/@types/Labels";
import type { TaskCounts, TaskCountsCollection, TaskCountsCollectionEntranceTuple } from "landing_page/ToDoList/2023/@types/Counters";

function TaskCounterFactory(labels: LabelsCollection): TaskCountsCollection {
    const labelsIDs = Object.keys(labels);

    return new Map<LabelID, TaskCounts>(
        labelsIDs.map((id): TaskCountsCollectionEntranceTuple => {
            return [id, { completed: 0, inTotal: 0 }];
        })
    );
}

export function useTasksCounter(): TaskCountsCollection {
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

    return counter;
}
