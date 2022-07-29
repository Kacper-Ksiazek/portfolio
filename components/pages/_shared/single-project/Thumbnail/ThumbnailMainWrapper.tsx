// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    margin: "16px 0",
    width: "100%",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    boxSizing: "border-box",
    "&::before, &::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 5,
    },
}));
