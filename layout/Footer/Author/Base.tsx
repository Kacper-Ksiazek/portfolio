// Tools
import { alpha, styled } from "@mui/material";
import { SELECTORS } from "../css_references";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    [SELECTORS.AUTHOR_NAME]: {
        margin: "0",
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "Montserrat Alternates",
        ["@media (max-width:800px)"]: {
            margin: 0,
        },
        ["@media (max-width:500px)"]: {
            fontSize: "18px",
        },
    },
    [SELECTORS.YEARS]: {
        fontSize: "14px",
        fontWeight: 300,
        color: alpha("#fff", 0.8),
    },
}));
