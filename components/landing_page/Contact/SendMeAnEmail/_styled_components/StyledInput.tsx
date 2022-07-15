// Tools
import { styled, alpha } from "@mui/system";
// Material UI Components
import TextField from "@mui/material/TextField";
// Styled components
export default styled(TextField)(({ theme }) => ({
    ".MuiOutlinedInput-root": {
        background: "#fff",
    },
    textarea: {
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
        },
    },
}));
