// Tools
import { styled } from "@mui/system";
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

export const PrimaryStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.primary.main,
}));
