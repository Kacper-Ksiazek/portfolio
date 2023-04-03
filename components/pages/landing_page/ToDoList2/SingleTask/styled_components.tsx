// Tools
import { styled, alpha } from "@mui/material";
import { SELECTORS, SINGLE_TASK_STAGES } from "../css_references";

export const Background = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    background: theme.palette.secondary.main,
    zIndex: -1,
    transform: "scaleX(0)",
    transition: "transform .3s",
    transformOrigin: "left",
    "&.active": {
        transform: "scaleX(1)",
    },
}));

export const SingleTaskBase = styled("div")(({ theme }) => ({
    background: theme.palette.background.default,
    width: "720px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "8px 12px",
    borderRadius: "5px",
    position: "relative",
    paddingRight: "40px",
    zIndex: 1,
    backdropFilter: "blur(3px)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "24px",
    },

    [`&.${SINGLE_TASK_STAGES.CHECKED}`]: {
        background: theme.palette.background.lightSectionBackground,
        [SELECTORS.SINGLE_TASK.CHECK_ICON]: {
            svg: {
                opacity: 1,
            },
        },
        [SELECTORS.SINGLE_TASK.DESCRIPTION]: {
            "&::after": {
                transform: "scaleX(1)",
            },
        },
        [SELECTORS.SINGLE_TASK.BACKGROUND]: {
            transform: "scaleX(0)",
        },
        [SELECTORS.SINGLE_TASK.LABEL]: {
            background: "none",
            opacity: 0.3,
            color: "#fff",
            border: "2px solid #fff",
        },
        color: alpha("#fff", 0.3),
    },
}));

export const Description = styled("h4")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    cursor: "default",
    userSelect: "none",
    margin: "0 0 6px 0",
    position: "relative",
    transition: "color .3s",
    "&::after": {
        content: "''",
        transform: "scaleX(0)",
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "3px",
        background: theme.palette.primary.main,
        left: 0,
        transition: "transform .3s",
        transformOrigin: "left",
    },
}));
