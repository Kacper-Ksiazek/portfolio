// Types
import type { Difficulty } from "@/@types/pages/PicturesMatchingGame";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";

export const options: OptionWithAlias<Difficulty>[] = [
    {
        value: "EASY",
        alias: "Easy - 4 images",
    },
    {
        value: "MEDIUM",
        alias: "Medium - 6 images",
    },
    {
        value: "HARD",
        alias: "Hard - 12 images",
    },
    {
        value: "INSANE",
        alias: "Insane - 20 images",
    },
];
