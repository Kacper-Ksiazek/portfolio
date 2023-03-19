// Tools
import { styled } from "@mui/material";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    background: theme.palette.primary.main,
    alignSelf: "flex-start",
    padding: "12px 32px",
    fontFamily: "Montserrat Alternates",
    overflow: "hidden",
    height: "42px",
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

    "&::after, &::before": {
        content: "''",
        ...theme.mixins.absolute_full,
    },

    "&::after": {
        background: theme.palette.secondary.main,
        transform: "translateX(calc(100% + 10px))",
        transition: "transform .15s linear",
    },
    "&::before": {
        background: "#000",
        transform: "translateX(calc(100% + 10px))",
        transition: "transform .15s .1s linear",
    },
    "span.text": {
        position: "reltive",
        zIndex: 2,
    },

    "@media (max-width:500px)": {
        width: "100%",
    },
}));
