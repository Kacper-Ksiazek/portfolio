// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Keyframes
import { scaleToBottom } from "@/components/keyframes/outro";
import { fadeFromBottom, fadeSimple, scaleFromLeft } from "@/components/keyframes/intro";
// Selectors
import { SELECTORS as TASKS_LIST } from "./css_references";
import { SELECTORS as SINGLE_TASK } from "./SingleTask/css_references";
// Types
import { SxPropsFn } from "@/@types/MUI";

const SINGLE_TASK_CONTENT_ELEMENTS_INVOLVED_IN_ANIMATIONS: Selector = [
    SINGLE_TASK.CONTENT.VIEW_MODE.TITLE + "h4",
    SINGLE_TASK.CONTENT.VIEW_MODE.DESCRIPTION,
    SINGLE_TASK.CONTENT.VIEW_MODE.INFORMATION_WITH_ICON,
    SINGLE_TASK.CONTENT.VIEW_MODE.LABELS_WRAPPER,
].join(", ");

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        [TASKS_LIST.WRAPPER]: {
            [SINGLE_TASK.SINGLE_TASK_WRAPPER]: {
                ...repeat(4, (index) => {
                    const deltaTime: number = index * 0.1;

                    return {
                        animation: `${scaleFromLeft} .4s ${0.1 + deltaTime}s both linear`,

                        [SINGLE_TASK_CONTENT_ELEMENTS_INVOLVED_IN_ANIMATIONS]: {
                            "&::after": {
                                content: "''",
                                ...theme.mixins.absolute_full,
                                background: theme.palette.background.darkAnimationBar,
                                borderRadius: "3px",
                                zIndex: 1,
                                animation: chainAnimations([
                                    [scaleFromLeft, 0.3, 0.7 + deltaTime],
                                    [scaleToBottom, 0.2, 0.3],
                                ]),
                            },
                            "&>*": {
                                animation: `${fadeSimple} .001s ${1.1 + deltaTime}s both`,
                            },
                        },

                        [SINGLE_TASK.COMPLETION_BUTTON]: {
                            animation: `${fadeSimple} .3s ${2 + deltaTime}s both`,
                        },

                        [SINGLE_TASK.COMPLETION_BUTTON_FANCY_SHAPES]: {
                            animation: `${fadeFromBottom} .3s ${1.6 + deltaTime}s both`,
                        },

                        [SINGLE_TASK.MANAGE_BUTTONS_WRAPPER]: {
                            animation: `${fadeSimple} .3s ${1.8 + deltaTime}s both`,
                        },

                        [SINGLE_TASK.BACKGROUND]: {
                            animation: `${fadeSimple} .5s ${2 + deltaTime}s both`,
                        },
                    };
                }),
            },
        },
    };
};
