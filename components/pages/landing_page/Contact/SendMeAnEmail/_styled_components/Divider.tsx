// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "140px",
    height: "1px",
    background: alpha(theme.palette.text.primary, 0.1),
    margin: "10px auto",
}));
