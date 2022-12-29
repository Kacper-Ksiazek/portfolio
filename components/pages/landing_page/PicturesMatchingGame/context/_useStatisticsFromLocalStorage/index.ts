// Types
import * as utils from "./utils";
import { initialValue } from "./initialValue";
import { useLocalStorage } from "@/hooks/useLocalStorage";
//
import type { UseStatisticsFromLocalStorageResult, SaveGame } from "./@types";
import type { Statistics } from "@/@types/pages/PicturesMatchingGame/context";

export const useStatisticsFromLocalStorage = (): UseStatisticsFromLocalStorageResult => {
    const [statistics, setStatistics] = useLocalStorage<Statistics>("pictures-matching-games-stats", initialValue);

    const saveGame: SaveGame = (params) => {
        const { difficulty, gameplay } = params;
        const duration = utils.computeDuration(gameplay.time);
        const accuracy = utils.computeAccuracy(gameplay.moves);

        setStatistics(({ general: currentGeneral, history: currentHistory }) => {
            return {
                history: [
                    {
                        won: gameplay.isOver,
                        duration,
                        accuracy,
                        difficulty,
                        date: utils.getCurrentDate(),
                        index: utils.computeIndex(currentHistory),
                    },
                    ...currentHistory,
                ],
                general: {
                    ...currentGeneral,
                    TOTAL: utils.updateGeneralStatsRecord({
                        record: currentGeneral.TOTAL, //
                        duration,
                        accuracy,
                    }),
                    [difficulty]: utils.updateGeneralStatsRecord({
                        record: currentGeneral[difficulty], //
                        duration,
                        lost: gameplay.isOver === false,
                        accuracy,
                    }),
                },
            };
        });
    };

    return [statistics, saveGame];
};
