export interface PaginatedStaticContentReducerState {
    currentPage: number;
    pagesInTotal: number;

    perPage: number;
}

type GoToNextAction = {
    type: "NEXT";
};
type GoToPreviousAction = {
    type: "PREVIOUS";
};
type GoToParticularAction = {
    type: "PARTICULAR";
    payload: number;
};

type PaginatedStaticContentReducerAction = GoToParticularAction | GoToNextAction | GoToPreviousAction;

export const reducer = (state: PaginatedStaticContentReducerState, action: PaginatedStaticContentReducerAction): PaginatedStaticContentReducerState => {
    switch (action.type) {
        case "PREVIOUS": {
            const { currentPage } = state;

            return {
                ...state,
                currentPage: currentPage !== 1 ? currentPage - 1 : currentPage,
            };
        }

        case "NEXT": {
            const { currentPage } = state;

            return {
                ...state,
                currentPage: currentPage < state.pagesInTotal ? currentPage + 1 : currentPage,
            };
        }

        case "PARTICULAR": {
            return {
                ...state,
                currentPage: action.payload,
            };
        }
    }
};
