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
    add: (params: Label) => LabelID;
    update: (id: LabelID, data: Partial<Label>) => void;
    remove: (labelToBeRemoved: LabelID | LabelID[]) => void;
}

// Tasks

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
export type TaskWithoutID = Omit<Task, "id">;

export type NewTaskBody = Omit<TaskWithoutID, "createdAt" | "isCompleted">;

export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;

export type TaskCounts = {
    inTotal: number;
    completed: number;
};

export type TaskCountsCollection = Map<LabelID, TaskCounts>;

export type TaskCountsCollectionEntranceTuple = [LabelID, TaskCounts];

export interface TasksFilters {
    sort: "NEWEST" | "OLDEST";
    withParticularLabel: LabelID | "_ALL";
    completion: "_ALL" | "COMPLETED_ONLY" | "NOT_COMPLETED_ONLY";
    urgencyFilter: "URGENT_FIRST" | "URGENT_ONLY" | "_DEFAULT";
}
