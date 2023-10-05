// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "landing_page/Projects/SingleProjectRow/css_references";

export const TimelineCore = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "0%",
    width: "10px",
    left: "50%",
    height: "101%",
    transform: "translateX(-50%)",
    "&::before": {
        content: "''",
        width: "100%",
        position: "absolute",
        height: "100%",
        background: theme.palette.secondary.main,
    },
    "&.first-project": {
        "&::before": {
            bottom: "0",
            height: "50%",
        },
    },
    "&.last-project": {
        "&::before": {
            height: "50%",
        },
    },
}));

export const Connection = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    width: "70px",
    height: "10px",
    transform: "translateY(-50%)",
    "&.year-indicating-timeline": {
        top: "calc(50% + 160px)",
        transform: "translateY(calc(-50% - 90px))",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        background: theme.palette.secondary.main,
    },
    "&.even": {
        left: "-70px",
        "&::before": {
            right: 0,
        },
    },
    "&.odd": {
        right: "-70px",
        "&::before": {
            left: 0,
        },
    },
}));

export const Dot = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "5px",
    background: theme.palette.primary.main,
    width: "24px",
    height: "24px",
    // Left side
    "&.odd": {
        [`&.${CSS_REFERENCES.TIMELINE.LEFT_DOT}`]: {
            left: "-17px",
        },
        [`&.${CSS_REFERENCES.TIMELINE.RIGHT_DOT}`]: {
            right: "0",
        },
    },
    // Right side
    "&.even": {
        [`&.${CSS_REFERENCES.TIMELINE.LEFT_DOT}`]: {
            left: "0",
        },
        [`&.${CSS_REFERENCES.TIMELINE.RIGHT_DOT}`]: {
            right: "-17px",
        },
    },
}));
