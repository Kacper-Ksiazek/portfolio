// Tools
import { styled } from "@mui/material";
import { getKeyframes, getStylesBasedOnColor } from "./utils";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { ForefrontRectangleColor } from "./@types";
// Styled components
import RectangleBase from "../_RectangleBase";

interface LineProps {
    color: ForefrontRectangleColor;
}

export default styled(RectangleBase, {
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
