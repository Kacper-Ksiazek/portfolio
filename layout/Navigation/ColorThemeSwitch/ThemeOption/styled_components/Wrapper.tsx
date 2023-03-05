// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    "&.menu-item": {
        marginTop: "16px",
        paddingLeft: "64px",
    },

    ".intro-animation-bar": {
        ...theme.mixins.absolute_full,
        background: "#F0EFF4",
        zIndex: 2,
        borderRadius: 5,
    },
}));
