// Tools
import { styled, alpha } from "@mui/material";

export default styled("span")(({ theme }) => ({
    background:
        theme.palette.mode === "light" //
            ? alpha("#000", 0.12)
            : alpha("#fff", 0.3),
    height: "2px",
    width: "86px",
    margin: "0 12px",
    "@media (max-width:1000px)": {
        width: "auto",
        flexGrow: 1,
    },
}));
