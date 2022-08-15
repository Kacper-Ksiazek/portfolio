// Tools
import { styled } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "5px 10px 5px 10px",
    height: "32px",
    padding: "0 30px",
    fontWeight: "500",
    marginLeft: "20px",
    overflow: "hidden",
    "&:nth-of-type(1)": {
        marginLeft: "0",
    },
    "span.text": {
        position: "relative",
        zIndex: 2,
        transition: "color .15s",
    },
    "span.line": {
        position: "absolute",
        background: theme.palette.primary.main,
        width: "calc(50% + 20px)",
        height: "100%",
        top: 0,
        zIndex: 1,
        transition: "transform .3s",
        "&.left": {
            left: "-10px",
            transform: "translateX(-100%)",
        },
        "&.right": {
            right: "-10px",
            transform: "translateX(100%)",
        },
        "&.big": {
            transition: "transform .3s .2s",
            zIndex: 0,
            background: theme.palette.secondary.main,
        },
    },
    "&:hover": {
        "span.line": {
            transition: "transform .3s .2s",
            transform: "translateX(0%)",
            "&.big": {
                transition: "transform .3s",
            },
        },
        "span.text": {
            color: "#fff",
        },
    },
    ["@media (max-width:1000px)"]: {
        marginLeft: "0px",
        fontSize: "20px",
        width: "calc(100% - 20px)",
        padding: "24px 0",
        maxWidth: "300px",
        "&:not(&:nth-of-type(1))": {
            marginTop: "20px",
        },
    },
}));
