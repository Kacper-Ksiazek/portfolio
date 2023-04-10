// Tools
import { styled } from "@mui/material";

export default styled("span")(({ theme }) => ({
    border: "2px solid",
    fontSize: "14px",
    padding: "2px 6px",
    borderRadius: "3px",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    transition: "all .3s",
    "&.urgency": {
        marginRight: "0px",
        width: 0,
        padding: "2px 0",
        transform: "scaleX(0)",
        transformOrigin: "left",
        borderColor: "transparent",
        background: theme.palette.primary.main,
        span: {
            opacity: 0,
            transition: "opacity .3s",
        },
        "&:not(&.active)": {
            border: "0px solid !important",
        },
        "&.active": {
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            transform: "scaleX(1)",
            width: "auto",
            marginRight: "8px",
            padding: "2px 6px",
            transition: "all .3s",
            span: {
                opacity: 1,
                transition: "opacity .3s .3s",
            },
        },
    },
}));
