// Tools
import { styled } from "@mui/system";

export const Header = styled("h4")(({ theme }) => ({
    margin: 0,
    fontSize: "24px",
    fontFamily: "Montserrat Alternates",
}));

export const Type = styled("span")(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.primary.main,
    marginBottom: "6px",
}));

export const Date = styled("span")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
    svg: {
        fontSize: "16px",
        marginRight: "3px",
        opacity: 0.7,
    },
}));
export const Description = styled("p")(({ theme }) => ({
    margin: 0,
    fontSize: "18px",
}));
