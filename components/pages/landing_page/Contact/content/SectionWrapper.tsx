// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("section")(({ theme }) => ({
    width: "100%",
    cursor: "default",
    position: "relative",
    alignSelf: "flex-start",
    maxWidth: "750px",
    boxSizing: "border-box",
    paddingTop: "24px",
    overflow: "hidden",
    "@media (max-width:1000px)": {
        maxWidth: "none",
        width: "100%",
        flexGrow: 1,
    },
}));
