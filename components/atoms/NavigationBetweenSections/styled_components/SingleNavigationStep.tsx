// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("div", {
    shouldForwardProp: (prop: string) => !["subtleBackground"].includes(prop),
})<{ subtleBackground: boolean }>(({ theme, ...props }) => ({
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    padding: "0 10px",
    transition: "background .2s",
    borderRadius: "3px",
    background: props.subtleBackground && theme.palette.mode === "dark" ? alpha(theme.palette.text.primary, 0.14) : "transparent",
    "&:before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.secondary.main,
        width: "100%",
        height: "100%",
        transition: "transform .2s, background .3s",
        transform: "translateY(00%)",
    },
    "&:nth-of-type(even)": {
        "&:before": {
            transform: "translateY(-100%)",
        },
    },
    "&:nth-of-type(odd)": {
        "&:before": {
            transform: "translateY(100%)",
        },
    },
    "span.text": {
        position: "relative",
        zIndex: 1,
        transition: "color .2s",
    },
    "&:hover": {
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            transform: "translateY(0%)",
        },
    },
    "&.selected": {
        background: theme.palette.primary.main,
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            background: theme.palette.primary.main,
        },
    },
}));
