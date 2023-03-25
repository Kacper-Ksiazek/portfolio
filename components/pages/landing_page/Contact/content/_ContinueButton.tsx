// Tools
import { styled } from "@mui/material";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    alignSelf: "flex-start",
    padding: "12px 32px",
    fontFamily: "Montserrat Alternates",
    overflow: "hidden",
    height: "42px",
    fontSize: "18px",
    position: "relative",
    "&:not(&.Mui-disabled)": {
        background: `${theme.palette.primary.main} !important` as any,
        "span.text": {
            color: "#fff",
        },
    },
    "&:hover, &:focus": {
        "&::before": {
            transform: "scaleY(1)",
            width: "100%",
            transition: "transform .15s linear",
        },
    },

    "&::before": {
        content: "''",
        ...theme.mixins.absolute_full,
        right: "0",
        left: "auto",
        background: theme.palette.secondary.main,
        transform: "scaleY(0)",
        width: "0%",
        transition: "transform .001s .2s linear, width .15s linear",
    },

    "span.text": {
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
    },

    "@media (max-width:500px)": {
        width: "100%",
    },
}));
