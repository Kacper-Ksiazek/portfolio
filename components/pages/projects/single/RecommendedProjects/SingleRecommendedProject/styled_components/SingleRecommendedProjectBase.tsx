// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    visibility: "hidden",
    "&:not(&:nth-of-type(1))": {
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "-21px",
            transform: "translateY(-50%)",
            width: "2px",
            height: "80%",
            background: alpha("#000", 0.1),
        },
    },
    ".thumbnail-wrapper": {
        height: "270px",
        width: "100%",
        overflow: "hidden",
    },
}));
