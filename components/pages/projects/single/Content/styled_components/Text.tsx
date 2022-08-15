// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
// Styled components
export const Paragraph = styled("p")(({ theme }) => ({
    fontSize: "18px",
    margin: 0,
    cursor: "default",
}));
export const Header = styled("h3")(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    margin: "20px 0 10px 0",
    cursor: "default",
}));

export const ShortDescription = styled(Paragraph)(({ theme }) => ({
    animation: `${fadeFromLeft} .3s 1s both linear`,
    ["@media (max-width:1000px)"]: {
        marginTop: "16px",
    },
    ["@media (max-width:600px)"]: {
        marginTop: "32px",
    },
}));
