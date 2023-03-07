// Tools
import { styled, ButtonBase } from "@mui/material";
import { scaleToRight } from "@/components/keyframes/outro";
import { scaleFromRight } from "@/components/keyframes/intro";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    height: "32px",
    width: "36px",
    background: `${theme.palette.error.main} !important`,
    overflow: "hidden",
    border: `1px solid ${theme.palette.error.main} !important`,
    svg: {
        color: "#fff",
        fontSize: "1.4rem",
        transition: "transform .3s, color .14s .05s linear",
    },
    "&:hover": {
        svg: {
            transform: "scale(1.2)",
            color: theme.palette.error.main,
        },
        "&::before": {
            animation: `${scaleFromRight} .16s linear both`,
        },
    },
    "&::before": {
        content: "''",
        ...theme.mixins.absolute_full,
        background: "#fff",
        animation: `${scaleToRight} .16s linear both`,
    },
}));
