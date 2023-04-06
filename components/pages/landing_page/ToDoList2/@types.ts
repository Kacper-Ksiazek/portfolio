export interface Task {
    id: number;
    description: string;
    urgent: boolean;
    dueDate: Date | null;
    label: string;
    isCompleted: boolean;
}

export type TaskWithoutID = Omit<Task, "id">;

export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;
