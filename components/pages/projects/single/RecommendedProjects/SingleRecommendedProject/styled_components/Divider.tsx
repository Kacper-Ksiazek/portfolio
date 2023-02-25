// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "-21px",
    transform: "translateY(-50%)",
    width: "2px",
    height: "80%",
    background: alpha(theme.palette.text.primary, 0.05),
    "@media (max-width:680px)": {
        display: "none",
    },
}));
