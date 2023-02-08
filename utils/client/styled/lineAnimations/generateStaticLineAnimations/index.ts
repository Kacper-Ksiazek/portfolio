// Tools
import { ANIMATIONS } from "../_keyframes";
import { establishDurations } from "./_utils";
import { getAnimationPropertyValue } from "../getAnimationPropertyValue";
// Types
import type { SxProps } from "@mui/material";
import type { ParamsWithCommonDuration, ParamsWithoutCommonDuration } from "../@types";

interface GenerateStaticLineAnimations {
    NOTPseudoElement?: boolean;
    color: string;
    sx?: SxProps;
    applyAnimationsInSeries?: {
        amountOfElements: number;
        delayBetweenAnimations: number;
    };
    animations: ParamsWithCommonDuration | ParamsWithoutCommonDuration;
}

export function generateStaticLineAnimations(params: GenerateStaticLineAnimations): SxProps {
    let result: SxProps = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: params.color,
        zIndex: "20",
        animation: getAnimationPropertyValue(params.animations),
    };

    const durations = establishDurations(params.animations);
    const startingAnimationDelay: number = params.animations.start.delay ?? 0;

    if (!params.NOTPseudoElement) {
        const delay = (params.animations.initialDelay ?? 0) + startingAnimationDelay + durations.start;

        result = {
            ">*": {
                animation: `${ANIMATIONS.CONTENT_APPEARING} 0.001s ${delay + 0.05}s both`,
            },
            "&::after": {
                content: "''",
                ...result,
            },
        };

        if (params.applyAnimationsInSeries) {
            delete (result as any)["&::after"].animation;
            delete (result as any)[">*"];

            const { amountOfElements, delayBetweenAnimations } = params.applyAnimationsInSeries;
            let delay: number = params.animations.initialDelay ?? 0;

            for (let i = 0; i < amountOfElements; i++) {
                (result as any)[`&:nth-of-type(${i + 1})`] = {
                    ">*": {
                        animation: `${ANIMATIONS.CONTENT_APPEARING} 0.001s ${delay + 0.05 + startingAnimationDelay + durations.start}s both`,
                    },
                    "&::after": {
                        animation: getAnimationPropertyValue({
                            ...params.animations,
                            initialDelay: delay,
                        }),
                    },
                };
                delay += delayBetweenAnimations;
            }
        }

        return result;
    }

    if (params.applyAnimationsInSeries) {
        delete (result as any).animation;

        const { amountOfElements, delayBetweenAnimations } = params.applyAnimationsInSeries;
        let delay: number = params.animations.initialDelay ?? 0;

        for (let i = 0; i < amountOfElements; i++) {
            (result as any)[`&:nth-of-type(${i + 1})`] = {
                ">*": {
                    animation: `${ANIMATIONS.CONTENT_APPEARING} 0.001s ${delay + 0.05 + startingAnimationDelay + durations.start}s both`,
                },
                animation: getAnimationPropertyValue({
                    ...params.animations,
                    initialDelay: delay,
                }),
            };
            delay += delayBetweenAnimations;
        }
    }

    return result;
}
