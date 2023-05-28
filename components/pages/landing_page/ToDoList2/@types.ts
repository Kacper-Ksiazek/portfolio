import type { LabelID } from "./context/LabelsContext/@types";

export type ColorInHEX = `#${string & { length: 6 }}`;

export interface Label {
    name: string;
    color: ColorInHEX;
}

export interface Task {
    id: number;
    description: string;
    urgent: boolean;
    dueDate: string | null;
    labelID: LabelID;
    isCompleted: boolean;
    /** Simply Date.now() */
    createdAt: number;
}

export interface Filters {
    sort: "NEWEST" | "OLDEST";
    withParticularLabel: LabelID | "_ALL";
    completion: "_ALL" | "COMPLETED_ONLY" | "NOT_COMPLETED_ONLY";
    urgencyFilter: "URGENT_FIRST" | "URGENT_ONLY" | "_DEFAULT";
}

export type TaskWithoutID = Omit<Task, "id">;

export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;
