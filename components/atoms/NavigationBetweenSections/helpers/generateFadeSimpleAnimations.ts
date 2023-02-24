import { Styles } from "@/@types/MUI";
import { STEP_WRAPPER } from "../CSSClasses";
import { repeat } from "@/utils/client/styled/repeat";
import { fadeSimple } from "@/components/keyframes/intro";

export function generateFadeSimpleAnimations(n: number): Styles {
    return {
        [`.${STEP_WRAPPER}`]: repeat(5, (index) => ({
            animation: `${fadeSimple} .2s ${0.6 + index * 0.1}s both linear`,
        })),
    };
}
