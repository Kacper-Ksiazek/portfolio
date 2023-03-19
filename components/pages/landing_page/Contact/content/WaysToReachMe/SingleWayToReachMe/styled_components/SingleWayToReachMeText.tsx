// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    "&.clickable": {
        color: alpha(theme.palette.text.primary, 0.8),
    },
}));
