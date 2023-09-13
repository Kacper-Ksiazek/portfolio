// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "24px",
    userSelect: "none",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    h2: {
        fontSize: "40px",
        lineHeight: "0.8",
        fontWeight: 700,
        margin: "0 0 12px 0",
    },

    h4: {
        fontWeight: 500,
        margin: 0,
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Montserrat Alternates",
        color: alpha("#fff", 0.8),
    },

    "@media (max-width:750px)": {
        h2: {
            lineHeight: "1",
        },
    },

    "@media (max-width:500px)": {
        paddingTop: "32px",
    },
}));
