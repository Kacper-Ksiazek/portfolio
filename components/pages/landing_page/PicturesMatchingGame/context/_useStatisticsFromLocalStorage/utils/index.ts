// Tools
import { updateGeneralStatsRecord } from "./updateGeneralStatsRecord";
// Types
import type { Gameplay, Statistics } from "@/@types/pages/PicturesMatchingGame/context";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";

export { updateGeneralStatsRecord };

export function computeAccuracy(moves: Gameplay["moves"]): GamesHistoryRecord["accuracy"] {
    const { inTotal, mistakes } = moves;

    return inTotal ? Number((((inTotal - mistakes) * 100) / inTotal).toFixed(2)) : 0;
}

/**
 * Returns today's date in **DD.MM.YYYY** format
 */
export function getCurrentDate(): GamesHistoryRecord["date"] {
    const ensureTwoDigits = (n: number): string | number => (String(n).length == 2 ? n : `0${n}`);
    const date = new Date();

    return `${ensureTwoDigits(date.getDate())}.${ensureTwoDigits(date.getMonth() + 1)}.${date.getFullYear()}`;
}

export function computeIndex(gamesHistory: Statistics["history"]): GamesHistoryRecord["index"] {
    if (gamesHistory.length) return gamesHistory[0].index + 1;
    return 1;
}
/**
 * Returns the duration of a gameplay in seconds
 */
export function computeDuration(time: Gameplay["time"]): GamesHistoryRecord["duration"] {
    return Math.floor((time.end - time.start) / 1000) % 60;
}
