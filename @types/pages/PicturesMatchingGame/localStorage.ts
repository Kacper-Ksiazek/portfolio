// Types
import { Difficulty } from "@/@types/pages/PicturesMatchingGame";

export interface Statistics {
    history: GamesHistoryRecord[];
    general: Record<GeneralStatisticsRecordKey, GeneralStatisticsRecord>;
}

type GeneralStatisticsRecordKey = Difficulty | "TOTAL";
export interface GeneralStatisticsRecord {
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
    /** The time unit here is a second */
    duration: number;
    date: string;
    accurancy: number;
    won: boolean;
}
