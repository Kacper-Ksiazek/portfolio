// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("p")(({ theme }) => ({
    position: "relative",
    fontSize: "18px",
    margin: "32px 0 8px 0",
    maxWidth: "840px",
    width: "100%",
    color: alpha("#fff", 0.8),
    strong: {
        color: theme.palette.primary.main,
    },
}));
