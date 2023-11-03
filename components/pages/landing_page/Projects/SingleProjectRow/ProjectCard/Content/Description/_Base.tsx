// Tools
import { styled, alpha, keyframes } from "@mui/material";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { Order } from "./@types";
import type { TextStage } from "./hooks/useExpansiveText/@types";
// Keyframes
import { scaleToBottom, scaleToLeft, scaleToRight } from "@/components/keyframes/outro";
import { scaleFromBottom, scaleFromLeft, scaleFromRight } from "@/components/keyframes/intro";

type AnimationSelector = `&.${TextStage}`;
type Keyframe = ReturnType<typeof keyframes>;

interface AnimationsSet {
    intro: Keyframe;
    outro: Keyframe;
}

const ANIMATIONS: Record<Order, Record<TextStage, AnimationsSet>> = {
    odd: {
        collapse: {
            intro: scaleFromRight,
            outro: scaleToBottom,
        },
        expand: {
            intro: scaleFromBottom,
            outro: scaleToRight,
        },
    },
    even: {
        collapse: {
            intro: scaleFromLeft,
            outro: scaleToBottom,
        },
        expand: {
            intro: scaleFromBottom,
            outro: scaleToLeft,
        },
    },
};

export const ProjectDescriptionBase = styled("p", {
    shouldForwardProp: (prop) => prop !== "order",
})<{ order: Order }>(({ theme, ...props }) => {
    const { collapse, expand } = ANIMATIONS[props.order];

    return {
        cursor: "default",
        fontSize: "16px",
        marginTop: "8px",
        lineHeight: 1.5,
        color: alpha(theme.palette.text.primary, 0.8),
        flexGrow: 1,
        "@media (max-width:1000px)": {
            fontSize: "18px",
        },

        "@media (min-width:1001px)": {
            ["&.expand" as AnimationSelector]: {
                "&::after": {
                    animation:
                        chainAnimations([
                            [expand.intro, 0.3, 0.1],
                            [expand.outro, 0.3, 0.2],
                        ]) + " !important",
                },
                //
            },

            ["&.collapse" as AnimationSelector]: {
                "&::after": {
                    animation:
                        chainAnimations([
                            [collapse.intro, 0.3],
                            [collapse.outro, 0.3, 0.1],
                        ]) + " !important",
                },
            },
        },
    };
});
