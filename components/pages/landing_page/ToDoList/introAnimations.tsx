// Tools
import { fadeFromLeft } from "@/components/keyframes/intro";
import { fadeFromBottom } from "@/components/keyframes/intro";
// Types
import type { SxProps } from "@mui/material";

export const toDoListIntroAnimations: SxProps = {
    footer: {
        input: {
            animation: `${fadeFromBottom} .3s 1.9s backwards`,
        },
        button: {
            animation: `${fadeFromLeft} .3s 2.1s backwards`,
        },
    },
};
