export type Orientation = "TO" | "FROM";

export type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export type AnimationName = `${Orientation}_${Direction}`;

export type Batch = {
    duration: number;
    delay?: number;
    direction: Direction;
};

export type BatchWithOptionalDuration = Omit<Batch, "duration"> & {
    duration?: number;
};

export interface ParamsWithCommonDuration {
    start: BatchWithOptionalDuration;
    end: BatchWithOptionalDuration;
    commonDuration: number;
    initialDelay?: number;
}

export interface ParamsWithoutCommonDuration {
    start: Batch;
    end: Batch;
    initialDelay?: number;
}

export interface AnimationDurations {
    start: number;
    end: number;
}
