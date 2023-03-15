// Tools
import { styled, alpha } from "@mui/material";

export default styled("span")(({ theme }) => ({
    fontSize: "160px",
    fontWeight: 900,
    color:
        theme.palette.mode === "light" //
            ? alpha(theme.palette.secondary.main, 0.05)
            : alpha("#fff", 0.05),
    letterSpacing: "10px",
    userSelect: "none",
    zIndex: -1,
    display: "block",
    "&.even": {
        marginLeft: "200px",
    },
    "&.odd": {
        marginRight: "200px",
    },
    ["@media (max-width:1400px)"]: {
        paddingTop: "48px",
        fontSize: "128px",
        lineHeight: "144px",
        "&.even": {
            marginLeft: "80px",
        },
        "&.odd": {
            marginRight: "80px",
        },
    },
    ["@media (max-width:1100px)"]: {
        paddingTop: "24px",
        "&.even": {
            marginLeft: "48px",
        },
        "&.odd": {
            marginRight: "48px",
        },
    },
    ["@media (max-width:1000px)"]: {
        marginBottom: "16px",
        paddingTop: "0",
        "&.even": {
            marginLeft: "0",
        },
        "&.odd": {
            marginRight: "0",
        },
    },
    ["@media (max-width:750px)"]: {
        textAlign: "center",
    },
}));
