// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    visibility: "hidden",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    fontFamily: "Montserrat Alternates",
    fontSize: "18px",
    userSelect: "none",
    zIndex: 1,
    svg: {
        marginLeft: "4px",
    },
}));
