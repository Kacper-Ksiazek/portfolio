// Tools
import { styled } from "@mui/material";

export const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    alignItems: "flex-start",
}));

export const Label = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: theme.palette.primary.main,
    },
}));

export const Header = styled("h2")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: 700,
    margin: "4px 0 16px 0",
    lineHeight: "50px",
    position: "relative",
    boxSizing: "border-box",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: "#000",
    },
}));
