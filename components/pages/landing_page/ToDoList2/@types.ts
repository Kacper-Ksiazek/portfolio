// Types
import type { MutableRefObject } from "react";

export type ColorInHEX = `#${string}`;

// Stages
export type ActionHeaderSection = "PROGRESS_TRACKER" | "ADD_NEW_TASK" | "EDIT_LABELS";

// Labels

export interface Label {
    name: string;
    color: ColorInHEX;
}

export type LabelID = string;

export type Labels = Record<LabelID, Label>;

export interface LabelWithAssociatedCounts {
    id: LabelID;
    amountOfTasks: TaskCounts;
}

export interface EditLabelsFilters {
    order: "NEWEST" | "OLDEST" | "FREQUENTLY_USED" | "RARELY_USED";
    displayNotUsedLabelsOnly: boolean;
    urgentModeAlternativeAppearance: boolean;
}

export interface LabelsContext {
    labels: Labels;
    _colorsInUse: Label["color"][];
    _labelNamesInUse: Label["name"][];
    _hasFullyLoaded: boolean;
    getLabelWithID: (id: LabelID) => Label;
}

export interface LabelsUpdatersContext {
    /** Add one new label */
    add: (params: Label) => LabelID;
    /** Update one particular, already existing label*/
    update: (id: LabelID, data: Partial<Label>) => void;
    /** Remove either one or many labels */
    remove: (labelToBeRemoved: LabelID | LabelID[]) => void;

    resetToDefault: () => void;
}

// Tasks

export interface Task {
    id: number;
    title: string;
    urgent: boolean;
    labelID: LabelID;
    isCompleted: boolean;

    // Additional information
    dueDate: string | null;
    dueTime: string | null;
    description: string | null;
    localization: string | null;

    /** Simply Date.now() */
    createdAt: number;
}

export interface I_TasksListContext {
    tasks: Task[];
    tasksWrapperRef: MutableRefObject<HTMLElement | null>;
    /**
     * Remove task with a given ID
     */
    remove: (id: Task["id"]) => void;
    /**
     *  Add a new task
     */
    add: (val: TaskWithoutID) => void;
    /**
     * Edit a task with a given ID
     * @param id Id of a task to be edited
     * @param val Callback that returns a new value of a task
     */
    edit: (id: Task["id"], val: TaskEditCallback) => void;

    resetToDefault: () => void;
}

export type TaskWithoutID = Omit<Task, "id">;

export type NewTaskBody = Omit<TaskWithoutID, "createdAt" | "isCompleted">;

export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;

export type TaskCounts = {
    inTotal: number;
    completed: number;
};

export type TaskCountsCollection = Map<LabelID, TaskCounts>;

export type TaskCountsCollectionEntranceTuple = [LabelID, TaskCounts];

export type LabelFilter = LabelID | "_ALL";

export interface TasksFilters {
    sort: "NEWEST" | "OLDEST";
    withParticularLabel: LabelFilter;
    completion: "_ALL" | "COMPLETED_ONLY" | "NOT_COMPLETED_ONLY";
    urgencyFilter: "URGENT_FIRST" | "URGENT_ONLY" | "_DEFAULT";
}
