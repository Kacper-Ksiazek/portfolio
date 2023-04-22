// Tools
import { styled } from "@mui/material";

export default styled("section")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
    background: theme.palette.background.default,
    padding: "12px",
    boxSizing: "border-box",
    borderRadius: "5px",
    ".MuiOutlinedInput-root": {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "12px",
        },
        paddingLeft: "12px",
        "&.filter-select-label": {
            flexGrow: 1,
        },
        "&.filter-select-urgency": {
            width: "176px",
        },
        "&.filter-select-sort": {
            width: "144px",
        },
        "&.filter-select-completion": {
            width: "172px",
        },
        ".MuiSelect-select": {
            paddingLeft: "8px",
        },
    },
}));
