// Tools
import { updateGeneralStatsRecord } from "./updateGeneralStatsRecord";
// Types
import type { Gameplay, Statistics } from "@/@types/pages/PicturesMatchingGame/context";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";

export { updateGeneralStatsRecord };

export const computeAccuracy = (moves: Gameplay["moves"]): GamesHistoryRecord["accuracy"] => {
    const { inTotal, mistakes } = moves;

    return inTotal ? Number((((inTotal - mistakes) * 100) / inTotal).toFixed(2)) : 0;
};

export const getCurrentDate = (): GamesHistoryRecord["date"] => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const computeIndex = (history: Statistics["history"]): GamesHistoryRecord["index"] => {
    if (history[history.length - 1]) return history[history.length - 1].index + 1;
    return 1;
};

export const computeDuration = (time: Gameplay["time"]): GamesHistoryRecord["duration"] => time.minutes * 60 + time.seconds;
