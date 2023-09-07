import type { MutableRefObject } from "react";
import type { Label, LabelID, LabelsCollection } from "./Labels";
import type { Task, TaskWithoutID, TaskEditCallback } from "./Tasks";

export interface LabelsContext {
    labels: LabelsCollection;
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

export interface TasksListContext {
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
