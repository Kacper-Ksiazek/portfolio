// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../../css_references";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",

    [`&.${CSS_REFERENCES.INTRO_BAR_ANIMATIONS.PRIMARY}`]: {
        background: theme.palette.primary.main,
        zIndex: 11,
    },

    [`&.${CSS_REFERENCES.INTRO_BAR_ANIMATIONS.SECONDARY}`]: {
        background: theme.palette.secondary.main,
        zIndex: 10,
    },
}));
