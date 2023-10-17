// Tools
import { styled } from "@mui/material";
import { introAnimations } from "./intro_animations";
// Selectors
import { SELECTORS as THUMBNAIL } from "components/atoms/single_project/Thumbnail/css_references";

// Styled components
export default styled("div")(({ theme }) => {
    return {
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        [THUMBNAIL.WRAPPER]: {
            "&::before, &::after": {
                content: "''",
                zIndex: 5,
                ...theme.mixins.absolute_full,
            },

            "&::after": {
                background: theme.palette.primary.main,
            },
            "&::before": {
                background: theme.palette.secondary.main,
            },
        },
        //
        //* Intro animations
        //
        visibility: "hidden",
        "&.active, &.initial-active": {
            ...introAnimations,
        },
    };
});
