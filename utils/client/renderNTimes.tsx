import type { ReactNode } from "react";

interface RenderNTimesParams {
    n: number;
    renderElement: (index: number) => ReactNode;
    startWith?: number;
}

export const renderNTimes = (params: RenderNTimesParams): ReactNode[] => {
    const { n, renderElement, startWith = 0 } = params;
    if (n < 0) throw new Error("N cannot be smaller than 0!");

    const result: ReactNode[] = [];

    for (let i: number = 0 + startWith; i < n + startWith; i++) {
        result.push(renderElement(i));
    }

    return result;
};
