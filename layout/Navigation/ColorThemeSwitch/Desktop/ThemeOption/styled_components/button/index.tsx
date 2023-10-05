// Tools
import { styled } from "@mui/material";
import Base from "./Base";

export { Base };

export const IconWrapper = styled("span")(({ theme }) => ({
    borderRadius: "10px",
    height: "100%",
    width: "32px",
    boxSizing: "border-box",
    position: "relative",
    ...theme.mixins.flex_center,
    zIndex: 1,
    // background: theme.palette.text.primary,
    transition: "background .3s linear",
    svg: {
        transition: "color .3s linear",
        color: theme.palette.background.default,
        fontSize: "1.4rem",
    },
}));

export const ThemeName = styled("span")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexGrow: 1,
    color: "#fff",
    position: "relative",
    zIndex: 1,
    fontFamily: '"Montserrat Alternates", sans-serif',
    paddingLeft: "6px",
}));
