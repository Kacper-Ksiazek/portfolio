// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    zIndex: "2",
    top: "10px",
    right: "0",
    ["@media (max-width:900px)"]: {
        top: "20px",
    },
}));
