// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    width: "80px",
    height: "46px",
    transform: "translateY(-50%)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}));
