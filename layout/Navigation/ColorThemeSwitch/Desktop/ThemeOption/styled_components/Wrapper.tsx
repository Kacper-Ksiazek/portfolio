// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    ".button-wrapper": {
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
    },
    "&.menu-item": {
        marginTop: "16px",
        paddingLeft: "64px",
    },

    ".intro-animation-bar": {
        ...theme.mixins.absolute_full,
        background: theme.palette.mode === "dark" ? "#F0EFF4" : theme.palette.primary.main,
        zIndex: 2,
    },
}));
