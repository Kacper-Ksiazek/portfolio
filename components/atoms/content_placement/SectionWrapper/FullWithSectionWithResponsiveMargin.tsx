// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("section")(({ theme }) => ({
    width: "calc(100vw - 40px)",
    margin: "0 auto",
    "@media (max-width:1540px)": {
        width: "calc(100vw - 20px)",
    },
    "@media (max-width:500px)": {
        width: "calc(100vw - 0px)",
        borderRadius: "0px !important",
    },
}));
