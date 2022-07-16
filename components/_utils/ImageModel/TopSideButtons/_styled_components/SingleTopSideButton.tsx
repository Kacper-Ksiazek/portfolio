// Tools
import { styled } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    background: theme.palette.primary.main,
    width: "40px",
    height: "40px",
    borderRadius: "3px",
    color: "#fff",
    transition: "background .3s",
    "&:hover": {
        background: theme.palette.primary.dark,
    },
    marginLeft: "10px",
    "&:nth-of-type(1)": {
        ["@media (max-width:1000px)"]: {
            display: "none",
        },
    },
}));
