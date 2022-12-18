// Tools
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
// Types
import type { PictureToMatchRaw, PictureToMatch } from "@/@types/pages/PicturesMatchingGame";
import type { GameplayReducer, GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";

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
                    return {
                        ...state,
                        animation: "CORRECT_CHOICE",
                        pictures: updatePictures.bind(state.pictures)({
                            idsToModify: [clickedPicture.id, previouslyClickedPicture.id],
                            updateInto: { unfold: true, isMatched: true },
                        }),
                        _amountOfRemainingPictures,
                        _previouslyClickedPicture: null,
                        isOver: _amountOfRemainingPictures === 0,
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
                        turn: state.turn + 1,
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
                    turn: state.turn + 1,
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
                turn: 0,
                isOver: false,
                animation: "INTRO",
                pictures,
                //
                _previouslyClickedPicture: null,
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
