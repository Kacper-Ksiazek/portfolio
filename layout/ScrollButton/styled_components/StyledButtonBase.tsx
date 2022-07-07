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
    backgroundColor: theme.palette.primary.main,
    transition: "background-color .3s, opacity .3s !important",
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
    fontSize: "2rem",
    borderRadius: "5px 20px 5px 20px",
    svg: {
        color: "#fff",
    },
}));
