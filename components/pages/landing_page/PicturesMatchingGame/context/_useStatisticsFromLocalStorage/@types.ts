import type { Difficulty } from "@/@types/pages/PicturesMatchingGame";
import type { Statistics, Gameplay } from "@/@types/pages/PicturesMatchingGame/context";

export type UseStatisticsFromLocalStorageResult = [Statistics, SaveGame];

export type SaveGame = (params: SaveGamaParams) => void;

interface SaveGamaParams {
    gameplay: Gameplay;
    difficulty: Difficulty;
}
