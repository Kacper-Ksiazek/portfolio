// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("section")(({ theme }) => ({
    width: "calc(100vw - 40px)",
    margin: "0 auto 60px auto",
    position: "relative",
    padding: "40px 64px",
    ["@media (max-width:1100px)"]: {
        padding: "40px 32px",
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    ["@media (max-width:600px)"]: {
        padding: "40px 20px",
    },
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 20px)",
        padding: "40px 10px",
    },
}));
