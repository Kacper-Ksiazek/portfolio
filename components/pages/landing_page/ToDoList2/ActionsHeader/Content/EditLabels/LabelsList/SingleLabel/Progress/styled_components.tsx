// Tools
import { alpha, styled } from "@mui/material";

export const ProgressWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    span: {
        color: alpha("#fff", 0.8),
    },
    p: {
        textAlign: "right",
        width: "132px",
        margin: "0 0 0 12px",
        strong: {
            marginRight: "8px",
        },
    },
    "@media (max-width:670px)": {
        marginTop: "4px",
    },
}));

export const ThereAreNoTasks = styled("span")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    transform: "translateX(-4px)",
    svg: {
        marginRight: "4px",
    },
}));
