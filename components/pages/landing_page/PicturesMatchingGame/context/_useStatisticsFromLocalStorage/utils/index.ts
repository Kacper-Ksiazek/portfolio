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
    const ensureTwoDigits = (n: number): string | number => (String(n).length == 2 ? n : `0${n}`);
    const date = new Date();

    return `${ensureTwoDigits(date.getDate())}.${ensureTwoDigits(date.getMonth() + 1)}.${date.getFullYear()}`;
};

export const computeIndex = (gamesHistory: Statistics["history"]): GamesHistoryRecord["index"] => {
    if (gamesHistory.length) return gamesHistory[0].index + 1;
    return 1;
};

export const computeDuration = (time: Gameplay["time"]): GamesHistoryRecord["duration"] => time.minutes * 60 + time.seconds;
