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
    ".due-date-picker": {
        margin: "0 4px",
        ".MuiInputBase-input": {
            width: "112px",
            height: "32px",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "14px !important",
        },
        svg: {
            fontSize: "20px",
        },
    },
}));
