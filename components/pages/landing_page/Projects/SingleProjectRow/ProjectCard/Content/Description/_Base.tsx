// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { TextExpandAnimation } from "./hooks/useExpansiveText";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { scaleFromBottom, scaleFromLeft, scaleFromRight } from "@/components/keyframes/intro";
import { fadeSimpleOUT, scaleToBottom, scaleToLeft, scaleToRight } from "@/components/keyframes/outro";

type AnimationSelector = `&.${Exclude<TextExpandAnimation, "none">}`;

export const ProjectDescriptionBase = styled("p")(({ theme }) => ({
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
                    [scaleFromBottom, 0.3, 0.1],
                    [scaleToRight, 0.3, 0.1],
                ]) + " !important",
        },
        //
    },

    ["&.collapse" as AnimationSelector]: {
        "&::after": {
            animation:
                chainAnimations([
                    [scaleFromRight, 0.3],
                    [scaleToBottom, 0.3, 0.1],
                ]) + " !important",
        },
    },
}));
