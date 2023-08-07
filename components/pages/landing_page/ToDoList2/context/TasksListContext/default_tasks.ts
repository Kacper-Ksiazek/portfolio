// Types
import type { Task } from "../../@types";

export const DEFAULT_TASKS: Task[] = [
    {
        id: 1,
        labelID: "2",
        title: "Do groceries for the rest of the week",
        urgent: false,
        isCompleted: true,
        additionalInformation: {
            dueDate: null,
            dueTime: null,
            localization: "Kraków",
            description: null,
        },
        createdAt: 1681578091291,
    },
    {
        id: 2,
        labelID: "4",
        title: "Brainstorm ideas for a personal full-stack development project.",
        urgent: false,
        isCompleted: false,
        additionalInformation: {
            dueDate: "01/10/2023",
            dueTime: null,
            localization: null,
            description:
                "Capture my creative ideas for a web application or software project that incorporates front-end and back-end development. Add a checklist to outline the project's key features.",
        },
        createdAt: 1681578091292,
    },
    {
        id: 3,
        labelID: "5",
        title: "Call Grandma and wish her a Happy Grandma's Day",
        urgent: true,
        isCompleted: false,
        additionalInformation: {
            dueDate: "21/01/2024",
            dueTime: "16:00",
            localization: "Wadowice",
            description: null,
        },
        createdAt: 1681578091293,
    },
    {
        id: 4,
        labelID: "1",
        title: 'Investigate the concept of "Quantum Entanglement."',
        urgent: false,
        isCompleted: true,
        additionalInformation: {
            dueDate: "31/12/2030",
            dueTime: null,
            localization: "AGH",
            description: "Dig deeper into the intriguing concept of quantum entanglement, its applications, and its implications. Summarize your findings in the task for easy reference",
        },
        createdAt: 1681578091294,
    },
    {
        id: 5,
        labelID: "1",
        title: "Review essential data structures and algorithms.",
        urgent: false,
        isCompleted: false,
        additionalInformation: {
            dueDate: null,
            dueTime: null,
            localization: null,
            description: "Brush up on core data structures (e.g., arrays, linked lists) and algorithms (e.g., sorting, searching) used in full-stack development.",
        },
        createdAt: 1681578091295,
    },
    {
        id: 6,
        labelID: "4",
        title: "English Language Proficiency Test",
        urgent: true,
        isCompleted: false,
        additionalInformation: {
            dueDate: "24/01/2024",
            dueTime: "14:00",
            localization: "Kraków",
            description: "Prepare for and take an English language proficiency test (IELTS) to assess your language skills for academic or professional purposes.",
        },
        createdAt: 1681578091296,
    },
];
