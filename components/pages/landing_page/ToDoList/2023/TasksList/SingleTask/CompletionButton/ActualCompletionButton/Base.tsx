// Tools
import { styled, alpha } from "@mui/material";
// Styled components
export default styled("button")(({ theme }) => ({
    border: "2px solid",
    width: "46px",
    height: "46px",
    ...theme.mixins.flex_center,
    borderRadius: "5px",
    background: alpha("#000", theme.palette.mode === "dark" ? 0.4 : 0.16),
    color: alpha("#fff", 0.4),
    position: "relative",
    transition: "all .3s",
    svg: {
        fontSize: "34px",
        opacity: 0,
        transition: "opacity .3s",
        ...theme.mixins.absolute_center,
    },
    "&:not(&.in-edit-mode)": {
        cursor: "pointer",
        "&:focus, &:hover": {
            outline: "none",
            color: alpha("#fff", 0.6),
            background: alpha("#fff", 0.1),
        },
    },
    "&.in-edit-mode": {
        "svg.check-icon": {
            opacity: "0 !important",
        },
        "svg.edit-mode-icon": {
            opacity: "1 !important",
            transition: "opacity .3s .3s",
        },
    },
    "&.checked": {
        borderColor: theme.palette.success.main,
        background: `${alpha(theme.palette.success.main, 0.12)} !important`,
        "svg.check-icon": {
            color: theme.palette.success.main,
            opacity: "1 !important",
        },
    },
}));
