// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    height: "28px",
    position: "relative",
    width: "100%",
    ".MuiSelect-select": {
        width: "86px",
        paddingTop: "4px !important",
        paddingBottom: "4px !important",
        fontSize: "14px",
    },
    ".due-date-picker, .label-picker": {
        marginLeft: "2px",
    },
}));
