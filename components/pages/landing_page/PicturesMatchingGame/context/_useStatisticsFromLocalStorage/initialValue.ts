import type { Statistics } from "@/@types/pages/PicturesMatchingGame/context";

export const initialValue: Statistics = Object.seal({
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
});
