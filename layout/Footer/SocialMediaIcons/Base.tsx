// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./Icons/css_references";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    gap: "18px",
    a: {
        textDecoration: "none",
    },
    [SELECTORS.SOCIAL_MEDIA_ICON]: {
        ...theme.mixins.flex_center,
        cursor: "pointer",
        height: "56px",
        width: "56px",
        borderRadius: "3px",
        svg: {
            fontSize: "48px",
            color: "#fff",
            transition: "all .3s",
        },

        [`&:not(&${SELECTORS.ACTIVE_SOCIAL_MEDIA_ICON})`]: {
            svg: {
                opacity: 0.8,
                "&:hover, &.active": {
                    opacity: 1,
                    color: theme.palette.primary.main,
                    transform: "scale(1.1)",
                },
            },
        },

        [`&${SELECTORS.ACTIVE_SOCIAL_MEDIA_ICON}`]: {
            background: theme.palette.primary.main,
        },
    },
}));
