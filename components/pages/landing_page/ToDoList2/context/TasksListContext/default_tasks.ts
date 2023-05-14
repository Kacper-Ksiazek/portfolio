// Types
import type { Task } from "../../@types";

export const DEFAULT_TASKS: Task[] = [
    {
        id: 1,
        labelID: "1",
        description: "Do groceries for the rest of the week",
        urgent: false,
        dueDate: null,
        isCompleted: true,
        createdAt: 1681578091291,
    },
    {
        id: 2,
        labelID: "3",
        description: "Add this long awaited feature to my portfolio",
        urgent: false,
        dueDate: null,
        isCompleted: false,
        createdAt: 1681578091292,
    },
    {
        id: 3,
        labelID: "5",
        description: "Call Grandma and wish her a Happy Grandma's Day",
        dueDate: "21/01/2024",
        urgent: true,
        isCompleted: false,
        createdAt: 1681578091293,
    },
    {
        id: 4,
        labelID: "1",
        description: "Complete linear algebra assigments",
        urgent: false,
        dueDate: null,
        isCompleted: true,
        createdAt: 1681578091294,
    },
    {
        id: 5,
        labelID: "1",
        description: "Hand in the fourth Procedural Programming project",
        dueDate: "12/06/2023",
        urgent: false,
        isCompleted: false,
        createdAt: 1681578091295,
    },
    {
        id: 6,
        labelID: "4",
        description: "Prepare notes on recently discovered vocabulary",
        dueDate: null,
        urgent: true,
        isCompleted: false,
        createdAt: 1681578091296,
    },
];
