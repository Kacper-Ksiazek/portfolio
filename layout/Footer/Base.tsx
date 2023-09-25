// Tools
import { styled } from "@mui/material";

export default styled("footer")(({ theme }) => ({
    background: theme.palette.background.paper,
    width: "calc(100vw - 40px)",
    borderRadius: "20px",
    margin: "0 auto 20px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 0",
    userSelect: "none",
    "@media (max-width:1550px)": {
        width: "calc(100vw - 20px)",
        margin: "0 auto 10px auto",
    },
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 0px)",
        margin: "0 auto 0px auto",
        borderRadius: "0px",
    },
}));
