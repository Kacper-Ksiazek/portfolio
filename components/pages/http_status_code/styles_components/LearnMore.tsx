// Tools
import { alpha, styled } from "@mui/material";
// Styled components
export default styled("a")(({ theme }) => ({
    position: "absolute",
    bottom: "48px",
    left: "50%",
    cursor: "pointer",
    textDecoration: "none",
    transform: "translateX(-50%)",
    color: alpha(theme.palette.text.primary, 0.8),
    transition: "color .24s ease-in-out",

    strong: {
        color: theme.palette.primary.main,
    },
    "&:hover": {
        color: theme.palette.text.primary,
    },
}));
