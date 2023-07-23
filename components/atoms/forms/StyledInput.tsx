// Tools
import { styled, alpha } from "@mui/material";
// Material UI Components
import TextField from "@mui/material/TextField";
// Styled components

export default styled(TextField)(({ theme }) => ({
    ".MuiOutlinedInput-root": {
        color: theme.palette.text.MUIFormElementText,
        fieldset: {
            borderColor: theme.palette.background.MUIFormElementsBorder,
            transition: "border-color .2s",
        },
    },
    textarea: {
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
        },
    },
    "&:hover": {
        ".MuiOutlinedInput-root": {
            fieldset: {
                borderColor: "#fff",
            },
        },
    },
}));
