// Tools
import { useReducer } from "react";
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
// Types
import type { PictureToMatchRaw, PictureToMatch } from "@/@types/pages/PicturesMatchingGame";
import type { GameplayReducer, GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";

export const useGameplayReducer = () => useReducer(gameplayReducer, initialState);

export const initialState: GameplayReducer = {
    isExiting: false,
    _amountOfRemainingPictures: 0,
    _previouslyClickedPicture: null,
    animation: null,
    isOver: false,
    pictures: [],
    moves: {
        inTotal: 0,
        mistakes: 0,
    },
    time: {
        start: 0,
        end: 0,
        isCounting: false,
    },
};

export const gameplayReducer = (state: GameplayReducer, action: GameplayAction): GameplayReducer => {
    switch (action.type) {
        case "HANDLE_ON_CLICK": {
            if (state.animation !== null) return state;

            const clickedPicture = action.payload;
            const previouslyClickedPicture = state._previouslyClickedPicture;
            // There's a previously clicked picture
            if (previouslyClickedPicture !== null) {
                if (clickedPicture.id === previouslyClickedPicture.id) return state;
                //
                // User pick is correct
                //
                if (clickedPicture.url === previouslyClickedPicture.url) {
                    const _amountOfRemainingPictures = state._amountOfRemainingPictures - 1;
                    const isOver = _amountOfRemainingPictures === 0;

                    return {
                        ...state,
                        animation: "CORRECT_CHOICE",
                        pictures: updatePictures.bind(state.pictures)({
                            idsToModify: [clickedPicture.id, previouslyClickedPicture.id],
                            updateInto: { unfold: true, isMatched: true },
                        }),
                        _amountOfRemainingPictures,
                        _previouslyClickedPicture: null,
                        moves: {
                            inTotal: state.moves.inTotal + 1,
                            mistakes: state.moves.mistakes,
                        },
                        isOver,
                        time: {
                            ...state.time,
                        },
                    };
                }
                //
                // User pick is NOT correct
                //
                else {
                    return {
                        ...state,
                        pictures: updatePictures.bind(state.pictures)({
                            idsToModify: [clickedPicture.id],
                            updateInto: { unfold: true },
                        }),
                        animation: "INVALID_CHOICE",
                        moves: {
                            inTotal: state.moves.inTotal + 1,
                            mistakes: state.moves.mistakes + 1,
                        },
                        _previouslyClickedPicture: null,
                    };
                }
            }
            // There's no previously clicked picture
            else {
                return {
                    ...state,
                    pictures: updatePictures.bind(state.pictures)({
                        idsToModify: [clickedPicture.id],
                        updateInto: { unfold: true },
                    }),
                    _previouslyClickedPicture: action.payload,
                };
            }
        }

        case "START_NEW_GAME": {
            const pictures = _getRandomPictures((action.payload as any).amountOfPictures).map((el, index) => {
                return {
                    ...el,
                    id: index,
                    unfold: false,
                    isMatched: false,
                };
            });

            return {
                ...initialState,
                animation: "INTRO",
                pictures,
                _amountOfRemainingPictures: pictures.length / 2,
            };
        }

        case "END_ANIMATION": {
            return {
                ...state,
                animation: null,
                pictures: updatePictures.bind(state.pictures)({
                    where: {
                        unfold: true,
                        isMatched: false,
                    },
                    updateInto: {
                        unfold: false,
                    },
                }),
                time: {
                    ...state.time,
                },
            };
        }

        case "CLEAR_CURRENT_GAME": {
            return initialState;
        }

        case "START_EXITING": {
            return {
                ...state,
                isExiting: true,
            };
        }

        case "RECORD_TIME": {
            if (action.payload === "start" && state.time.isCounting) return state;

            return {
                ...state,
                time: {
                    start: action.payload === "start" ? Date.now() : state.time.start,
                    end: action.payload === "stop" ? Date.now() : state.time.end,
                    isCounting: action.payload === "start",
                },
            };
        }
    }
    return state;
};

const _getRandomPictures = (howMany: number): PictureToMatchRaw[] => {
    const _shuffle = (arr: any[]): any[] => arr.sort(() => 0.5 - Math.random());
    const fiveRandomImages: PictureToMatchRaw[] = _shuffle(ALL_AVAILABLE_IMAGES).slice(0, howMany);

    return _shuffle([...fiveRandomImages, ...fiveRandomImages]);
};

interface _UpdatePicturesParams {
    updateInto: Partial<PictureToMatch>;
}

interface UpdatePicturesParamsWithIds extends _UpdatePicturesParams {
    idsToModify: PictureToMatch["id"][];
}

interface UpdatePicturesParamsWithConditions extends _UpdatePicturesParams {
    where: Partial<PictureToMatch>;
}

type UpdatePicturesParams = UpdatePicturesParamsWithIds | UpdatePicturesParamsWithConditions;

function updatePictures(this: PictureToMatch[], _params: UpdatePicturesParams): PictureToMatch[] {
    //
    // Update pictures with certain id's
    //
    if (Object(_params).hasOwnProperty("idsToModify" as keyof UpdatePicturesParamsWithIds)) {
        const params = _params as UpdatePicturesParamsWithIds;
        return this.map((el) => {
            if (params.idsToModify.includes(el.id)) {
                return { ...el, ...params.updateInto };
            } else return el;
        });
    }
    //
    // Otherwise tacle only those matching received conditions
    //
    const params = _params as UpdatePicturesParamsWithConditions;
    return this.map((el) => {
        for (const key in params.where) {
            if (params.where[key as keyof PictureToMatch] !== el[key as keyof PictureToMatch]) {
                return el;
            }
        }
        return {
            ...el,
            ...params.updateInto,
        };
    });
}
