import type { GeneralStatisticsRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";

interface UpdateGeneralStatsRecordParams {
    record: GeneralStatisticsRecord;
    duration: number;
    accuracy: number;
    lost?: boolean;
}

export const updateGeneralStatsRecord = (params: UpdateGeneralStatsRecordParams): GeneralStatisticsRecord => {
    const { lost, record, duration, accuracy } = params;

    return {
        games: {
            inTotal: record.games.inTotal + 1,
            won: record.games.won + (lost ? 0 : 1),
        },
        totalTime: record.totalTime + duration,
        totalAccuracy: record.totalAccuracy + accuracy,
    };
};
