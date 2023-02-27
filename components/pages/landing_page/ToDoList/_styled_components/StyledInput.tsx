// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("input")(({ theme }) => ({
    padding: "5px 10px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "3px",
    boxSizing: "border-box",
    fontSize: "16px",
    transition: "all .3s",
    flexGrow: 1,
    "&::placeholder": {
        transition: "color .3s",
    },
    "&:focus": {
        background: theme.palette.primary.main,
        outline: "none",
        color: "#fff",
        "&::placeholder": {
            color: alpha("#fff", 0.6),
        },
    },
}));
