import type { LabelID } from "./Labels";

export type TaskCounts = {
    inTotal: number;
    completed: number;
};

export type TaskCountsCollection = Map<LabelID, TaskCounts>;

export type TaskCountsCollectionEntranceTuple = [LabelID, TaskCounts];

export interface LabelWithAssociatedCounts {
    id: LabelID;
    amountOfTasks: TaskCounts;
}
