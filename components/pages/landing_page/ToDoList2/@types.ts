export interface Task {
    id: number;
    description: string;
    urgent: boolean;
    dueDate: Date | null;
    label: string;
    isCompleted: boolean;
}
