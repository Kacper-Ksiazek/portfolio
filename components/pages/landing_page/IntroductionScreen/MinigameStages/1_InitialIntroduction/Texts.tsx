// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export const ColoredHeader = styled("h3")(({ theme }) => ({
    fontSize: "30px",
    color: theme.palette.primary.main,
    letterSpacing: "3px",
    fontWeight: 600,
    margin: 0,
    textTransform: "uppercase",
}));

export const MainHeader = styled("h1")(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    fontSize: "72px",
    lineHeight: "90px",
    fontWeight: 700,
    margin: 0,
    textAlign: "center",
}));

export const Description = styled("p")(({ theme }) => ({
    fontSize: "24px",
    textAlign: "center",
    margin: "10px 0 20px 0",
    color: alpha("#fff", 0.8),
}));
