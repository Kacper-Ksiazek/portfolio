// Tools
import { styled, alpha, keyframes } from "@mui/material";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { Order } from "./@types";
import type { TextExpandAnimation } from "./hooks/useExpansiveText";
// Keyframes
import { scaleToBottom, scaleToLeft, scaleToRight } from "@/components/keyframes/outro";
import { scaleFromBottom, scaleFromLeft, scaleFromRight } from "@/components/keyframes/intro";

type AnimationSelector = `&.${Exclude<TextExpandAnimation, "none">}`;
type Keyframe = ReturnType<typeof keyframes>;

interface AnimationsSet {
    intro: Keyframe;
    outro: Keyframe;
}

const ANIMATIONS: Record<Order, Record<Exclude<TextExpandAnimation, "none">, AnimationsSet>> = {
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
    };
});
