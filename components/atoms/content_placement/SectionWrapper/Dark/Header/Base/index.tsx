// Tools
import { styled } from "@mui/system";
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
        fontWeight: 700,
        margin: "0 0 5px 0",
    },

    h4: {
        fontWeight: 500,
        margin: 0,
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Montserrat Alternates",
    },

    ["@media (max-width:500px)"]: {
        paddingTop: "32px",
    },
}));
