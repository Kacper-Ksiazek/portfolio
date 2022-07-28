// Tools
import { styled, alpha } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    background: theme.palette.text.primary,
    color: "#fff",
    marginLeft: "10px",
    height: "28px",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.text.primary}`,
    transition: "all .3s",
    padding: "3px 5px",
    "&:hover, &:focus": {
        color: theme.palette.text.primary,
        background: "#fff",
    },
    "&.Mui-disabled": {
        border: `1px solid ${theme.palette.text.primary}`,
        background: alpha(theme.palette.text.primary, 0.4),
        color: theme.palette.text.primary,
    },
}));
