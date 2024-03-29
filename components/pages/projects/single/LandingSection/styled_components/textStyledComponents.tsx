// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export const MainHeader = styled("h1")(({ theme }) => ({
    fontSize: "64px",
    fontFamily: "Montserrat Alternates",
    margin: "4px 0 8px 0",
}));

export const Description = styled("p")(({ theme }) => ({
    fontSize: "22px",
    maxWidth: "1000px",
    margin: "32px 0 0 0",
    color: alpha("#fff", 0.8),
}));
