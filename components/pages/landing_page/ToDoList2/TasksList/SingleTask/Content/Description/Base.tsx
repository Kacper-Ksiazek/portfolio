// Tools
import { styled } from "@mui/material";

export default styled("div")(({ theme }) => ({
    cursor: "default",
    userSelect: "none",
    margin: "0 0 6px 0",
    position: "relative",
    transition: "color .3s",
    minHeight: "28px",
    width: "100%",
    display: "flex",
    "&::before": {
        content: "''",
        transform: "scaleX(0)",
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "3px",
        background: theme.palette.primary.main,
        left: 0,
        transition: "transform .3s",
        transformOrigin: "left",
    },
    h4: {
        fontSize: "20px",
        margin: 0,
        fontWeight: "400",
    },
    ".MuiFormControl-root": {
        width: "calc(100% - 56px)",
        input: {
            padding: "4px 12px",
            width: "100%",
            fontSize: "16px",
        },
    },
}));
