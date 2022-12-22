// Types
import type { PictureToMatchRaw } from "@/data/pictures_for_matching_game";

export { PictureToMatchRaw };

export interface PictureToMatch extends PictureToMatchRaw {
    id: number;
    unfold: boolean;
    isMatched: boolean;
}
export type UserChoiceAnimation = "INVALID_CHOICE" | "CORRECT_CHOICE";
export type AnimationToDisplay = UserChoiceAnimation | "INTRO" | null;

export type Difficulty = "EASY" | "MEDIUM" | "HARD" | "INSANE";
export type PictureMatchingGameplayStage = "SELECT_DIFFICULTY" | "GAMEPLAY" | "SUMMARY";
