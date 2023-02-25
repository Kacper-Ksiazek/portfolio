// Tools
import { styled } from "@mui/material";
// Styled components
import ContentWrapper from "../../_ContentWrapper";

export default styled(ContentWrapper)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    boxSizing: "border-box",
    paddingTop: "48px",
    "@media (max-width:900px)": {
        paddingTop: "64px",
    },
    "@media (max-width:500px)": {
        paddingTop: "32px",
    },
}));
