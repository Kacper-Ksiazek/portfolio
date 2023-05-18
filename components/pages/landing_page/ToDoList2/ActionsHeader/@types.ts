import { LabelID } from "../context/LabelsContext/@types";

export type Stage = "PROGRESS_TRACKER" | "ADD_NEW_TASK" | "EDIT_LABELS";

export interface SingleTaskCounts {
    inTotal: number;
    completed: number;
}

export type TasksCounter = Map<LabelID, SingleTaskCounts>;

export type CountTasksWithLabel = (labelid: LabelID) => SingleTaskCounts;

export type MapEntranceTuple = [LabelID, SingleTaskCounts];
