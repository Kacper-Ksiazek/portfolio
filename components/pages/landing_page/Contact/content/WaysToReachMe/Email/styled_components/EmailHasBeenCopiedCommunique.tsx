// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "32px",
    height: "32px",
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
    svg: {
        color: "#fff",
    },
}));
