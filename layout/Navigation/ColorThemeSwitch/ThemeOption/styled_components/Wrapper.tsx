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
        background: "#fff",
        zIndex: 2,
        borderRadius: 5,
    },
}));
