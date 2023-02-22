// Tools
import { styled } from "@mui/system";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    background: theme.palette.primary.main,
    alignSelf: "flex-start",
    padding: "12px 32px",
    fontFamily: "Montserrat Alternates",
    overflow: "hidden",
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

    "@media (max-width:500px)": {
        width: "100%",
    },
}));
