// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    "@media (max-width:1000px)": {
        display: "none",
    },
}));
