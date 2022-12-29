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
        console.log(gameplay);

        setStatistics(({ general: currentGeneral, history: currentHistory }) => {
            return {
                history: [
                    {
                        won: gameplay.isOver,
                        duration,
                        difficulty,
                        date: utils.getCurrentDate(),
                        index: utils.computeIndex(currentHistory),
                        accurancy: utils.computeAccuracy(gameplay.moves),
                    },
                    ...currentHistory,
                ],
                general: {
                    ...currentGeneral,
                    TOTAL: utils.updateGeneralStatsRecord({ record: currentGeneral.TOTAL, duration }),
                    [difficulty]: utils.updateGeneralStatsRecord({
                        record: currentGeneral[difficulty], //
                        duration,
                        lost: gameplay.isOver === false,
                    }),
                },
            };
        });
    };

    return [statistics, saveGame];
};
