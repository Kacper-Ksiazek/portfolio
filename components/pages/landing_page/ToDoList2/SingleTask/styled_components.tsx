// Tools
import { styled } from "@mui/material";

export const UrgencyBar = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    background: theme.palette.secondary.main,
    zIndex: -1,
    width: "0%",
    "&.active": {
        width: "100%",
    },
}));

export const SingleTaskBase = styled("div")(({ theme }) => ({
    background: theme.palette.background.lightSectionBackground,
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
}));

export const Description = styled("h4")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    cursor: "default",
    userSelect: "none",
    margin: "0 0 6px 0",
}));
