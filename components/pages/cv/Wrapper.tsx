// Tools
import { styled } from "@mui/material";
// Styled components
import SectionWrapper from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
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
    "@media (max-height:800px)": {
        paddingTop: "24px",
    },
    "@media (max-height:700px)": {
        paddingTop: "8px",
    },

    "@media (max-width:1400px)": {
        "#cv-redirections, #cv-breadcrumbs": {
            display: "none",
        },
    },

    "@media (max-width:1000px)": {
        ".only-big-viewports": {
            display: "none",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
        height: "90vh",
        paddingTop: "0",
        maxWidth: "500px",
    },
}));
