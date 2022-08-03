// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("section")(({ theme }) => ({
    width: "calc(100vw - 40px)",
    margin: "0 auto 60px auto",
    position: "relative",
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 20px)",
    },
}));
