// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    left: "50%",
    top: "20px",
    height: "450px",
    maxWidth: "550px",
    width: "calc(100% - 30px)",
    transform: "translateX(-50%)",
    "&:before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        left: "-2px",
        width: "30px",
        height: "30px",
        background: theme.palette.primary.main,
    },
    "&:after": {
        content: "''",
        position: "absolute",
        top: "-2px",
        right: "-2px",
        width: "30px",
        height: "30px",
        background: theme.palette.secondary.main,
    },
}));
