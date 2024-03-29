// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    zIndex: "20",
    color: "#fff",
    width: "100%",
    maxWidth: "750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    userSelect: "none",
    height: "calc(100% - 200px)",
}));
