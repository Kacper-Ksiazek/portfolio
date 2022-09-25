// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
// Styled components
export const ColoredHeader = styled("h3")(({ theme }) => ({
    fontSize: "32px",
    color: theme.palette.primary.main,
    letterSpacing: "3px",
    fontWeight: 600,
    margin: 0,
    textTransform: "uppercase",
    "&:nth-of-type(1)": {
        animation: `${fadeFromTop} .2s linear both`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeFromTop} .2s .3s linear both`,
    },
    ["@media (max-width:1500px)"]: {
        fontSize: "28px",
    },
    ["@media (max-width:1000px)"]: {
        fontSize: "24px",
    },
    ["@media (max-width:370px)"]: {
        fontSize: "20px",
    },
}));

export const MainHeader = styled("h1")(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    fontSize: "72px",
    lineHeight: "90px",
    fontWeight: 700,
    margin: 0,
    animation: `${fadeFromTop} .2s .1s linear both`,
    textAlign: "center",
    ["@media (max-width:1500px)"]: {
        fontSize: "64px",
    },
    ["@media (max-width:1000px)"]: {
        fontSize: "56px",
        lineHeight: "72px",
    },
    ["@media (max-width:500px)"]: {
        fontSize: "48px",
        lineHeight: "64px",
    },
    ["@media (max-width:440px)"]: {
        fontSize: "44px",
        lineHeight: "60px",
    },
    ["@media (max-width:400px)"]: {
        fontSize: "40px",
        lineHeight: "56px",
    },
    ["@media (max-width:370px)"]: {
        fontSize: "36px",
        lineHeight: "50px",
    },
}));

export const Description = styled("p")(({ theme }) => ({
    fontSize: "24px",
    textAlign: "center",
    margin: "10px 0 20px 0",
    animation: `${fadeFromTop} .2s .2s linear both`,
    ["@media (max-width:1500px)"]: {
        fontSize: "20px",
        margin: "10px 0 20px 0",
    },
    ["@media (max-width:1000px)"]: {
        fontSize: "18px",
    },
    ["@media (max-width:370px)"]: {
        fontSize: "16px",
    },
}));
