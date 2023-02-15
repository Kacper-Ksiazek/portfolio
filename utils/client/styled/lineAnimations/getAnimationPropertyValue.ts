// Tools
import { getAnimation } from "./_keyframes";
import { establishDurations } from "./generateStaticLineAnimations/_utils";
// Types
import type { ParamsWithCommonDuration, ParamsWithoutCommonDuration, AnimationDurations } from "./@types";

/** Returns **animation** CSS property alongside with it's value */
export function getAnimationPropertyValue(params: ParamsWithCommonDuration | ParamsWithoutCommonDuration, _durations?: AnimationDurations): string {
    const durations = _durations ? _durations : establishDurations(params);

    const initialDelay: number = params.initialDelay ?? 0;
    const startDelay = initialDelay + (params.start.delay ?? 0);
    const endDelay = startDelay + durations.start + (params.end.delay ?? 0);

    return [
        `${getAnimation("FROM", params.start.direction)} ${durations.start}s ${startDelay}s linear both`, //
        `${getAnimation("TO", params.end.direction)} ${durations.end}s ${endDelay}s linear forwards`, //
    ].join(", ");
}
