// Tools
import { styled } from "@mui/material";

const VerticallyCentredSpan = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
}));

export const MainRoot = styled(VerticallyCentredSpan)(({ theme }) => ({
    width: "2px",
    height: "calc(100% + 16px)",
    left: "22px",
    "&::before": {
        content: '""',
        ...theme.mixins.absolute_full,
        background: theme.palette.mode === "dark" ? "#F0EFF4" : theme.palette.primary.main,
    },
}));

export const MiddleDot = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_center,
    width: "8px",
    height: "8px",
    background: theme.palette.mode === "dark" ? "#F0EFF4" : theme.palette.primary.main,
    borderRadius: "3px",
}));

export const LinkToTheElement = styled(VerticallyCentredSpan)(({ theme }) => ({
    left: "0",
    height: "2px",
    width: "36px",
    background: theme.palette.mode === "dark" ? "#F0EFF4" : theme.palette.primary.main,
    zIndex: -1,
}));

export const EdgeDot = styled("span")(({ theme }) => ({
    position: "absolute",
    height: "8px",
    width: "8px",
    background: theme.palette.mode === "dark" ? "#F0EFF4" : theme.palette.primary.main,
    borderRadius: "3px",
    "&.link-to-the-element-end-dot": {
        top: "50%",
        transform: "translateY(-50%)",
        right: "0",
    },
    "&.root_end, &.root_start": {
        left: "50%",
        transform: "translateX(-50%)",
    },
    "&.root_end": {
        bottom: 0,
    },
    "&.root_start": {
        top: 0,
    },
}));
