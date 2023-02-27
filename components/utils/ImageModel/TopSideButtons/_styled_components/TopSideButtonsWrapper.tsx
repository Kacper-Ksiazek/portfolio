// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    top: "0px",
    right: "0",
    ["@media (max-width:900px)"]: {
        top: "20px",
    },
}));
