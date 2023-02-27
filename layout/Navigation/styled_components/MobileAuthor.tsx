// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "Montserrat Alternates",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    ["@media (min-width:1001px)"]: {
        display: "none",
    },
    "#mobile-menu-bottom-card-name": {
        fontSize: "18px",
        marginBottom: "4px",
    },
    "#mobile-menu-bottom-card-year": {
        fontSize: "14px",
    },
}));
