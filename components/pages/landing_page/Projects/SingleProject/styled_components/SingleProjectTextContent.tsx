// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    width: "calc(100% - 250px)",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 2,
}));
