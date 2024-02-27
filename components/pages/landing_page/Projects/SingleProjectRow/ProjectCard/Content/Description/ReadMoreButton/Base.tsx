// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("strong")(({ theme }) => ({
    fontWeight: 700,
    marginLeft: "2px",
    position: "relative",
    color: theme.palette.text.primary,
    padding: "0 6px",
    overflow: "hidden",
    transition: "color .3s",
    "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "0%",
        height: "100%",
        left: 0,
        width: "100%",
        transform: "scaleY(0)",
        borderRadius: "1px",
    },
    "&::before": {
        background: theme.palette.secondary.main,
        transition: "transform .14s .14s ease-in-out",
    },
    "&::after": {
        background: theme.palette.primary.main,
        transition: "transform .14s ease-in-out",
    },
    span: {
        position: "relative",
        zIndex: 1,
    },
    "&:hover": {
        cursor: "pointer",
        color: "#fff",
        "&::before, &::after": {
            transform: "scaleY(1)",
        },
        "&::before": {
            transition: "transform .14s ease-in-out",
        },
        "&::after": {
            transition: "transform .14s .14s ease-in-out",
        },
    },
}));
