// Tools
import { keyframes } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Keyframes
import { scaleToBottom, scaleToTop } from "@/components/keyframes/outro";
import { fadeSimple, scaleFromRight } from "@/components/keyframes/intro";
// Selectors
import { SELECTORS as FILTERS } from "./css_references";
// Types
import { SxPropsFn } from "@/@types/MUI";

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        [FILTERS.MAIN_WRAPPER]: {
            animation: `${scaleFromRight} .5s .1s both linear`,

            [FILTERS.INTRO_ANIMATION_ELEMENT]: {
                position: "relative",
                "&::after": {
                    content: "''",
                    ...theme.mixins.absolute_full,
                    background: theme.palette.background.darkAnimationBar,
                    borderRadius: "3px",
                },
                ...repeat(4, (index) => {
                    const outro: ReturnType<typeof keyframes> = index % 2 ? scaleToTop : scaleToBottom;
                    const deltaTime: number = index * 0.1;

                    return {
                        "&::after": {
                            animation: chainAnimations([
                                [scaleFromRight, 0.3, 1.1 - deltaTime],
                                [outro, 0.2, 0.3],
                            ]),
                        },
                        "&>*": {
                            animation: `${fadeSimple} .001s ${1.5 - deltaTime}s both`,
                        },
                    };
                }),
            },
            [FILTERS.AMOUNT_OF_TASKS]: {
                animation: `${fadeSimple} .3s 2s both linear`,
            },
        },
    };
};
