// Tools
import { styled } from "@mui/material";
import { getKeyframes } from "./_keyframes";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { Theme } from "@/@types/MUI";
// Styled components
import BackgroundShapeBase from "./_BackgroundShapeBase";

interface LineProps {
    color: "BLACK" | "SECONDARY";
}

type Styles = Record<
    LineProps["color"],
    {
        initialHeight: `${string}px`;
        backgroundColor: string;
        zIndex: number;
        delays: {
            intro: number;
            outro: number;
        };
    }
>;

function getStylesBasedOnColor(theme: Theme, color: LineProps["color"]): Styles["BLACK"] {
    switch (color) {
        case "BLACK":
            return {
                initialHeight: "100px",
                backgroundColor: "#000000",
                zIndex: 11,
                delays: {
                    intro: 0.6,
                    outro: 0.4,
                },
            };
        case "SECONDARY":
            return {
                initialHeight: "200px",
                backgroundColor: theme.palette.secondary.main,
                zIndex: 9,
                delays: {
                    intro: 0.3,
                    outro: 1,
                },
            };
    }
}

export default styled(BackgroundShapeBase, {
    shouldForwardProp: (prop: string) => {
        return !(["initialHeight", "backgroundColor", "zIndex", "delays"] as (keyof LineProps | string)[]).includes(prop);
    },
})<LineProps>(({ theme, ...props }) => {
    const { initialHeight, backgroundColor, zIndex, delays } = getStylesBasedOnColor(theme, props.color);
    const { introAnimationOne, outroAnimationOneHorizontal, outroAnimationOneVertical } = getKeyframes(initialHeight);

    return {
        background: backgroundColor,
        zIndex: zIndex,
        borderRadius: "5px",
        animation: chainAnimations([
            [introAnimationOne, 0.8, delays.intro],
            [outroAnimationOneHorizontal, 0.8, delays.outro],
        ]),
        "@media (min-width:1001px)": {
            animation: chainAnimations([
                [introAnimationOne, 0.8, delays.intro],
                [outroAnimationOneVertical, 0.8, delays.outro],
            ]),
        },
    };
});
