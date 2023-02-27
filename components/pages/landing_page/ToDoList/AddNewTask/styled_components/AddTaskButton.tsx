// Tools
import { styled, alpha } from "@mui/material";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";

export default styled(ButtonBase)(({ theme }) => ({
    padding: "5px 10px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "3px",
    boxSizing: "border-box",
    fontSize: "16px",
    transition: "all .3s",
    background: "#fff",
    color: "#000",
    width: "80px",
    marginLeft: "10px",
    "&:hover, &:focus": {
        background: theme.palette.primary.main,
        color: "#fff",
    },
    "&.Mui-disabled": {
        border: `1px solid ${theme.palette.text.primary}`,
        background: alpha(theme.palette.text.primary, 0.4),
        color: theme.palette.text.primary,
    },
    ["@media (max-width:600px)"]: {
        width: "100%",
        margin: 0,
    },
}));
