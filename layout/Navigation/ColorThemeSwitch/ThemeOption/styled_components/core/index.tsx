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
        background: "#F0EFF4",
    },
}));

export const MiddleDot = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_center,
    width: "8px",
    height: "8px",
    background: "#F0EFF4",
    borderRadius: "3px",
}));

export const LinkToTheElement = styled(VerticallyCentredSpan)(({ theme }) => ({
    left: "0",
    height: "2px",
    width: "36px",
    background: "#F0EFF4",
}));

export const EdgeDot = styled("span")(({ theme }) => ({
    position: "absolute",
    height: "6px",
    width: "6px",
    background: "#F0EFF4",
    borderRadius: "2px",
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
