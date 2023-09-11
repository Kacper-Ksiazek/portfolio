// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { scaleToLeft } from "@/components/keyframes/outro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimple, scaleFromRight } from "@/components/keyframes/intro";
// Types
import type { SxPropsFn } from "@/@types/MUI";

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        ".single-task-wrapper": {
            width: "100%",
            position: "relative",
            "&:not(&:nth-of-type(1))": {
                marginTop: "10px",
            },
            "&::after": {
                content: "''",
                position: "absolute",
                ...theme.mixins.absolute_full,
                background: theme.palette.background.lightAnimationBar,
            },
            ...repeat(4, (index) => {
                const diff = index * 0.1;
                return {
                    ".single-task": {
                        animation: `${fadeSimple} .001s ${0.8 + diff}s both !important`,
                    },
                    "&::after": {
                        animation: chainAnimations([
                            [scaleFromRight, 0.3, 0.5 + diff],
                            [scaleToLeft, 0.3, 0.5],
                        ]),
                    },
                };
            }),
        },
        //
        "#add-new-task-wrapper": {
            animation: `${fadeSimple} .3s 1s both linear`,
        },
    };
};
