// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    fontSize: "160px",
    fontWeight: 900,
    color: alpha(theme.palette.secondary.main, 0.05),
    letterSpacing: "10px",
    userSelect: "none",
    transform: "translateY(-50%)",
    zIndex: -1,
}));
