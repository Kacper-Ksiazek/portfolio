// Tools
import { styled } from "@mui/material";

export default styled("section")(({ theme }) => ({
    width: "818px",
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    background: theme.palette.background.default,
    padding: "12px",
    boxSizing: "border-box",
    borderRadius: "5px",
    ".MuiOutlinedInput-root": {
        marginRight: "12px",
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
        ".MuiSelect-select": {
            paddingLeft: "8px",
        },
    },
}));
