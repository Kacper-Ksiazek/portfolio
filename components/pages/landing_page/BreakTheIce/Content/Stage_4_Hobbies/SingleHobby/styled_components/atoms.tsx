// Tools
import { styled } from "@mui/material";

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
    fontSize: "18px",
}));

export const Reference = styled("a")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 2,
    cursor: "pointer",
    width: "36px",
    height: "36px",
    svg: {
        color: theme.palette.primary.main,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
    ".hover-controller": {
        position: "absolute",
        width: "100%",
        zIndex: 1,
        height: "100%",
        top: 0,
        left: 0,
    },
}));
