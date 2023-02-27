// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    height: "100%",
    transition: "width .3s linear",
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    borderRadius: "4px",
}));
