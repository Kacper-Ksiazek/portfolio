// Types
import type { Task } from "../../@types";

export const DEFAULT_TASKS: Task[] = [
    {
        id: 1,
        label: "University",
        description: "Complete linear algebra assigments",
        urgent: false,
        dueDate: null,
        isCompleted: false,
    },
    {
        id: 2,
        label: "Household",
        description: "Do groceries for the rest of the week",
        urgent: false,
        dueDate: null,
        isCompleted: false,
    },
    {
        id: 3,
        label: "Career",
        description: "Add this long awaited feature to my portfolio",
        urgent: false,
        dueDate: null,
        isCompleted: false,
    },
    {
        id: 4,
        label: "University",
        description: "Hand in the fourth Procedural Programming project",
        dueDate: null,
        urgent: true,
        isCompleted: false,
    },
];
