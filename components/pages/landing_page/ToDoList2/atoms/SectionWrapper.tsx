// Tools
import { styled } from "@mui/material";

export default styled("div")(({ theme }) => ({
    background: theme.palette.background.default,
    borderRadius: "4px",
    padding: "12px",
    boxSizing: "border-box",
    width: "100%",
    "&:not(&:nth-of-type(1))": {
        marginTop: "12px",
    },
}));
