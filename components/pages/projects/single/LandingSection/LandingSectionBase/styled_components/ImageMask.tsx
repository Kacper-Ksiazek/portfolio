// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: alpha(theme.palette.background.paper, 0.65),
    zIndex: 7,
    transition: "opacity 1s",
}));
