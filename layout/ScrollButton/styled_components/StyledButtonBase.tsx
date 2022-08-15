// Tools
import { styled } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 10,
    width: "50px",
    height: "50px",
    border: `1px solid ${theme.palette.background.default}`,
    backgroundColor: theme.palette.primary.main,
    transition: "background-color .3s, opacity .3s !important",
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
    borderRadius: "5px 20px 5px 20px",
    svg: {
        fontSize: "2rem",
        color: "#fff",
    },
    ["@media (max-width:1100px)"]: {
        borderRadius: "5px",
    },
}));
