// Tools
import { styled, alpha } from "@mui/system";
// Styled components
import ContentWrapper from "../_ContentWrapper";

export default styled(ContentWrapper)(({ theme }) => ({
    fontSize: "1000px",
    fontWeight: 900,
    position: "absolute",
    bottom: "0",
    color: alpha(theme.palette.secondary.main, 0.05),
    userSelect: "none",
    zIndex: 1,
    left: "50%",
    transform: "translateX(-50%)",
    lineHeight: "800px",
}));
