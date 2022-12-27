// Types
import { Difficulty } from "@/@types/pages/PicturesMatchingGame";

export interface StatisticsRecord {
    difficulty: Difficulty;
    games: {
        inTotal: number;
        won: number;
    };
    /** The time unit here is a second */
    totalTime: number;
}

export interface GamesHistoryRecord {
    index: number;
    difficulty: Difficulty;
    duration: {
        minutes: number;
        seconds: number;
    };
    date: string;
    accurancy: number;
}
