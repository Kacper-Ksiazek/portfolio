// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(100% - 120px - 20px)",
    display: "flex",
    flexDirection: "column",
    ["@media (max-width:1000px)"]: {
        width: "calc(100% - 120px - 50px)",
    },
    ["@media (max-width:800px)"]: {
        width: "calc(100% - 120px - 32px)",
    },
}));
