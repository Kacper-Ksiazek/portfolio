// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro/fade";
// Styled components
export default styled("a")(({ theme }) => ({
    position: "absolute",
    bottom: "48px",
    left: "50%",
    cursor: "pointer",
    textDecoration: "none",
    transform: "translateX(-50%)",
    color: alpha(theme.palette.text.primary, 0.8),
    transition: "color .24s ease-in-out",
    animation: `${fadeSimple} .3s 2s linear both`,

    strong: {
        color: theme.palette.primary.main,
    },

    "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-4px",
        left: "50%",
        width: "48px",
        height: "1px",
        background: theme.palette.text.primary,
        transform: "translateX(-50%)",
        transition: "width .3s",
    },

    "&:hover": {
        color: theme.palette.text.primary,
        "&::before": {
            width: "75%",
        },
    },
}));
