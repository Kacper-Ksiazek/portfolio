// Tools
import { styled } from "@mui/material";
import introAnimation from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    border: `1px solid transparent`,
    padding: "4px 8px",
    borderRadius: "3px",
    position: "relative",
    overflow: "hidden",
    textDecoration: "none",
    boxSizing: "border-box",
    color: theme.palette.text.primary,
    "&>svg": {
        fontSize: "32px",
        color: theme.palette.primary.main,
        marginRight: "8px",
        transition: "margin-right .3s",
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "8px",
    },
    "&.clickable": {
        cursor: "pointer",
        ".right-pointing-arrow": {
            right: "24px",
            opacity: 0,
            transition: "all .3s",
        },
        "&:hover": {
            "&>svg": {
                marginRight: "12px",
            },
            ".right-pointing-arrow": {
                opacity: theme.palette.mode === "light" ? 0.15 : 0.5,
                right: "8px",
            },
        },
    },
    ...(introAnimation as any),
}));
