// Types
import { useLocalStorage } from "@/hooks/useLocalStorage";
//
import type { Statistics } from "@/@types/pages/PicturesMatchingGame/localStorage";

export const useStatisticsFromLocalStorage = () => useLocalStorage<Statistics>("pictures-matching-games-stats", initialValue);

const initialValue: Statistics = {
    general: {
        EASY: {
            games: {
                inTotal: 0,
                won: 0,
            },
            totalTime: 0,
        },
        MEDIUM: {
            games: {
                inTotal: 0,
                won: 0,
            },
            totalTime: 0,
        },
        HARD: {
            games: {
                inTotal: 0,
                won: 0,
            },
            totalTime: 0,
        },
        INSANE: {
            games: {
                inTotal: 0,
                won: 0,
            },
            totalTime: 0,
        },
        TOTAL: {
            games: {
                inTotal: 0,
                won: 0,
            },
            totalTime: 0,
        },
    },
    history: [],
};
