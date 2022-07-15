// Tools
import { styled, alpha } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    background: theme.palette.primary.main,
    alignSelf: "flex-start",
    padding: "12px 32px",
    fontSize: "16px",
    borderRadius: "3px",
    fontFamily: "Montserrat Alternates",
    color: "#fff",
    overflow: "hidden",
    transition: "all .3s",
    "&:hover, &:focus": {
        "&::after, &::before": {
            transform: "translateX(0)",
        },
        "&::after": {
            transition: "transform .15s .1s linear",
        },
        "&::before": {
            transition: "transform .15s  linear",
        },
    },
    "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: theme.palette.secondary.main,
        transform: "translateX(calc(100% + 10px))",
        transition: "transform .15s linear",
    },
    "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000",
        transform: "translateX(calc(100% + 10px))",
        transition: "transform .15s .1s linear",
    },
    "span.text": {
        position: "reltive",
        zIndex: 2,
    },
    "&.Mui-disabled": {
        background: alpha(theme.palette.text.primary, 0.4),
        color: theme.palette.text.primary,
    },
}));
