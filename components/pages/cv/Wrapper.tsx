// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("section")(({ theme }) => ({
    maxWidth: "1200px",
    margin: "112px auto 64px auto",
    gap: "36px",
    display: "grid",
    height: "80vh",
    gridTemplateColumns: "1fr 1fr",
    ".MuiButtonBase-root": {
        height: "50px",
        marginLeft: "0 !important",
    },
    h1: {
        fontSize: "42px",
        fontFamily: '"Montserrat Alternates", sans-serif',
        margin: "0 0 24px 0",
    },
    h3: {
        fontSize: "20px",
    },
    img: {
        objectFit: "contain",
    },
}));
