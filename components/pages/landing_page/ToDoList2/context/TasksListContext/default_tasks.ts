// Types
import type { Task } from "../../@types";

export const DEFAULT_TASKS: Task[] = [
    {
        id: 1,
        label: "Household",
        description: "Do groceries for the rest of the week",
        urgent: false,
        dueDate: null,
        isCompleted: true,
    },
    {
        id: 2,
        label: "Career",
        description: "Add this long awaited feature to my portfolio",
        urgent: false,
        dueDate: null,
        isCompleted: false,
    },
    {
        id: 3,
        label: "Family-and-friends",
        description: "Call Grandma and wish her a Happy Grandma's Day",
        dueDate: "21/01/2024",
        urgent: true,
        isCompleted: false,
    },
    {
        id: 4,
        label: "University",
        description: "Complete linear algebra assigments",
        urgent: false,
        dueDate: null,
        isCompleted: true,
    },
    {
        id: 5,
        label: "University",
        description: "Hand in the fourth Procedural Programming project",
        dueDate: "12/06/2023",
        urgent: false,
        isCompleted: false,
    },
    {
        id: 6,
        label: "Self-growth",
        description: "Prepare notes on recently discovered vocabulary",
        dueDate: null,
        urgent: true,
        isCompleted: false,
    },
];
