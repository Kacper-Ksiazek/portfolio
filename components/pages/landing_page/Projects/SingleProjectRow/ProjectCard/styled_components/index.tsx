// Tools
import { styled } from "@mui/material";
import { CSS_CLASSES } from "../../_css_references";

import SingleProjectBase from "./Base";

export { SingleProjectBase };

export const IntroBar = styled("span")(({ theme }) => ({
    position: "absolute",

    [`&.${CSS_CLASSES.INTRO_BAR_ANIMATIONS.PRIMARY}`]: {
        background: theme.palette.primary.main,
        zIndex: 11,
    },

    [`&.${CSS_CLASSES.INTRO_BAR_ANIMATIONS.SECONDARY}`]: {
        background: theme.palette.secondary.main,
        zIndex: 10,
    },
}));
