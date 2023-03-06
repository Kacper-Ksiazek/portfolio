// Tools
import { styled, alpha } from "@mui/material";
import { scaleToLeft } from "@/components/keyframes/outro";
import { scaleFromLeft } from "@/components/keyframes/intro";
// Styled components
export default styled("button")(({ theme }) => ({
    display: "flex",
    cursor: "pointer",
    padding: "0",
    boxSizing: "border-box",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "128px",
    zIndex: 1,
    transition: "background .2s",

    "&:not(&.active-theme)": {
        overflow: "hidden",
        border: `1px solid ${theme.palette.text.primary}`,
        "&::before": {
            content: "''",
            ...theme.mixins.absolute_full,
            background: theme.palette.primary.main,
            transition: "opacity .3s",
            animation: `${scaleToLeft} .2s linear both`,
        },

        ".icon-wrapper svg, .theme-name": {
            color: alpha(theme.palette.text.primary, 0.7),
            transition: "color .3s",
        },

        "&:hover": {
            ".icon-wrapper svg, .theme-name": {
                color: "#fff",
            },
            "&::before": {
                animation: `${scaleFromLeft} .2s linear both`,
            },
        },
    },
    "&.active-theme": {
        ".theme-name": {
            color: theme.palette.text.primary,
        },
    },
    "&.unfolded": {
        background: theme.palette.primary.main,
        ".theme-name": {
            color: "#fff !important",
        },
    },
    "&.theme-option": {
        background: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default,
    },

    "@media (max-width:1000px)": {
        width: "110px",
        height: "48px",
        position: "absolute",
        bottom: "100px",
        left: "calc(50% - 55px)",
        margin: "0",
        "span.icon-wrapper": {
            width: "72px",
            svg: {
                fontSize: "2rem",
            },
        },
    },
}));
