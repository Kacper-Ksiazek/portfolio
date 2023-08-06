// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "&>*": {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "8px",
        },
    },
    ".label-picker-select": {
        ".label-picker-adornment": {
            animationDelay: ".3s",
        },
    },
}));
