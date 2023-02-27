// Tools
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeFromLeft } from "@/components/keyframes/intro";
import { fadeFromBottom } from "@/components/keyframes/intro";
// Types
import type { SxProps } from "@mui/material";

export const toDoListIntroAnimations: SxProps = {
    ".single-task.show-intro-animation": {
        "&.show-intro-animation": {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .5s 1.3s backwards`,
                "button.task-management": {
                    "&:nth-of-type(1)": {
                        animation: `${fadeSimple} .3s 1.7s backwards`,
                    },
                    "&:nth-of-type(2)": {
                        animation: `${fadeSimple} .3s 1.8s backwards`,
                    },
                },
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .5s 1.5s backwards`,
                "button.task-management": {
                    "&:nth-of-type(1)": {
                        animation: `${fadeSimple} .3s 1.9s backwards`,
                    },
                    "&:nth-of-type(2)": {
                        animation: `${fadeSimple} .3s 2s backwards`,
                    },
                },
            },
            "&:nth-of-type(3)": {
                animation: `${fadeFromLeft} .5s 1.7s backwards`,
                "button.task-management": {
                    "&:nth-of-type(1)": {
                        animation: `${fadeSimple} .3s 2.1s backwards`,
                    },
                    "&:nth-of-type(2)": {
                        animation: `${fadeSimple} .3s 2.2s backwards`,
                    },
                },
            },
        },
    },
    footer: {
        input: {
            animation: `${fadeFromBottom} .3s 1.9s backwards`,
        },
        button: {
            animation: `${fadeFromLeft} .3s 2.1s backwards`,
        },
    },
};
