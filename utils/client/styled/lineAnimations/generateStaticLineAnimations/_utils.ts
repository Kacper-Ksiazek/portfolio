// Types
import type { ParamsWithCommonDuration, ParamsWithoutCommonDuration, AnimationDurations } from "../@types";

export function checkWhetherThereIsACommonDuration(val: any): val is ParamsWithCommonDuration {
    return val instanceof Object && val.hasOwnProperty("commonDuration");
}

export function establishDurations(params: ParamsWithCommonDuration | ParamsWithoutCommonDuration): AnimationDurations {
    if (checkWhetherThereIsACommonDuration(params)) {
        const { start, end, commonDuration } = params;

        return {
            start: start.duration ? start.duration : commonDuration,
            end: end.duration ? end.duration : commonDuration,
        };
    } else
        return {
            start: params.start.duration,
            end: params.end.duration,
        };
}
