// Tools
import { styled } from "@mui/material";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "6px 40px",
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "5px",
    fontFamily: "Montserrat Alternates",
    boxSizing: "border-box",
    overflow: "hidden",
    "span.text": {
        position: "relative",
        zIndex: 2,
        transition: "color .3s",
    },
    transition: "padding .3s",
    "&::before": {
        content: "''",
        position: "absolute",
        width: "110%",
        height: "calc(100% + 10px)",
        background: theme.palette.primary.main,
        transform: "translateY(110%)",
        transition: "transform .3s linear",
    },
    "&:hover": {
        padding: "6px 50px",
        "span.text": {
            color: "#fff",
        },
        "&::before": {
            transform: "translateY(-5px)",
        },
    },
}));
