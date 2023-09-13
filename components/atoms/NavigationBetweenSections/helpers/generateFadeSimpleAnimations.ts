import { Styles } from "@/@types/MUI";
import { SELECTORS } from "../css_references";
import { repeat } from "@/utils/client/styled/repeat";
import { fadeSimple } from "@/components/keyframes/intro";

export function generateFadeSimpleAnimations(n: number): Styles {
    return {
        [SELECTORS.STEP_WRAPPER]: repeat(5, (index) => ({
            animation: `${fadeSimple} .2s ${0.6 + index * 0.1}s both linear`,
        })),
    };
}
