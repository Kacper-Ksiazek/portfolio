export interface Task {
    id: number;
    description: string;
    urgent: boolean;
    dueDate: string | null;
    label: string;
    isCompleted: boolean;
    /** Simply Date.now() */
    createdAt: number;
}

export interface Filters {
    sort: "NEWEST" | "OLDEST";
    withParticularLabel: string | "_ALL";
    completion: "_ALL" | "COMPLETED_ONLY" | "INCOMPLETE_ONLY";
    urgencyFilter: "URGENT_FIRST" | "URGENT_ONLY" | "_DEFAULT";
}

export type TaskWithoutID = Omit<Task, "id">;

export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;
