// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro/fade";
// Styled components
export default styled("h1")(({ theme }) => ({
    margin: 0,
    fontSize: "256px",
    fontFamily: "Montserrat Alternates",
    color: theme.palette.primary.main,
    fontWeight: 900,
    letterSpacing: "6px",
    lineHeight: "200px",
    animation: `${fadeSimple} .3s .3s linear both`,
    "@media (max-width:1000px)": {
        fontSize: "200px",
        lineHeight: "150px",
    },
    "@media (max-width:500px)": {
        fontSize: "160px",
        lineHeight: "130px",
    },
    "@media (max-width:380px)": {
        fontSize: "144px",
        lineHeight: "100px",
    },
}));
