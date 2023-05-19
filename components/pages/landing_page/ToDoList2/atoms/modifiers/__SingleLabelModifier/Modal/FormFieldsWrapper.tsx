// Tools
import { styled } from "@mui/material";
// Other components
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    ".MuiFormControl-root": {
        "&.label-name": {
            flexGrow: 1,
            input: {
                height: "42px",
            },
        },
        ".MuiOutlinedInput-root": {
            height: "42px",
        },
        "&.color-picker": {
            width: "42px",
            marginLeft: "8px",
            input: {
                width: "32px",
                height: "34px",
                padding: 0,
                margin: "0 auto",
            },
            fieldset: {
                borderRadius: "3px",
            },
        },
    },
}));
