// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("main")(({ theme }) => ({
    marginTop: "20px",
    width: "100vw",
    left: "50%",
    transform: "translateX(-50%)",
    position: "relative",
    minHeight: "100vh",
    ["@media (max-width:500px)"]: {
        marginTop: "10px",
    },
}));
