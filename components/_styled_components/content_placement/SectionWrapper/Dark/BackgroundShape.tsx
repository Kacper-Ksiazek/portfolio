// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "350px",
    height: "150%",
    background: alpha(theme.palette.primary.main, 0.2),
    "&:nth-of-type(1)": {
        marginRight: "120px",
    },
}));
