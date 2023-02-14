// Tools
import { useReducer } from "react";

export function useSimpleReducer<T>(defaultState: T) {
    return useReducer((state: T, newState: Partial<T>) => {
        return {
            ...state,
            ...newState,
        };
    }, defaultState);
}
