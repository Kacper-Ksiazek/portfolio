// Types
import type { Difficulty } from "@/@types/pages/PicturesMatchingGame";

interface Option {
    type: Difficulty;
    label: string;
}

export const options: Option[] = [
    {
        type: "EASY",
        label: "Easy - 4 images",
    },
    {
        type: "MEDIUM",
        label: "Medium - 6 images",
    },
    {
        type: "HARD",
        label: "Hard - 12 images",
    },
    {
        type: "INSANE",
        label: "Insane - 20 images",
    },
];
