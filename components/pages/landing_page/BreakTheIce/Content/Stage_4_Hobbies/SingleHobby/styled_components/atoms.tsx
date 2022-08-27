// Tools
import { styled } from "@mui/system";

export const Label = styled("span")(({ theme }) => ({
    margin: "0 0 5px 0",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 500,
    svg: {
        marginRight: "3px",
    },
}));

export const Header = styled("h4")(({ theme }) => ({
    margin: "8px 0 4px 0 ",
    fontFamily: "Montserrat Alternates",
    fontSize: "22px",
}));

export const Description = styled("p")(({ theme }) => ({
    margin: "0",
    fontSize: "16px",
}));

export const Reference = styled("a")(({ theme }) => ({
    position: "absolute",
    bottom: "5px",
    right: "5px",
    zIndex: 2,
    cursor: "pointer",
    svg: {
        color: theme.palette.primary.main,
    },
}));
