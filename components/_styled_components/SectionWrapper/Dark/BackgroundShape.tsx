// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "500px",
    height: "340px",
    marginLeft: "100px",
    background: alpha(theme.palette.primary.main, 0.2),
    "&.left": {
        transform: "rotate(-70deg)",
    },
    "&.right": {
        transform: "rotate(70deg)",
    },
    "&:nth-of-type(1)": {
        marginLeft: 0,
    },
}));
