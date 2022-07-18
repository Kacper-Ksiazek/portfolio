// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
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
}));

export const MainHeader = styled("h1")(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    fontSize: "72px",
    lineHeight: "90px",
    fontWeight: 700,
    margin: 0,
    animation: `${fadeFromTop} .2s .1s linear both`,
}));

export const Description = styled("p")(({ theme }) => ({
    fontSize: "24px",
    textAlign: "center",
    margin: "10px 0 20px 0",
    animation: `${fadeFromTop} .2s .2s linear both`,
}));
