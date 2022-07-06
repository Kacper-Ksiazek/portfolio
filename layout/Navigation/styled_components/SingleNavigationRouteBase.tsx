// Tools
import { styled } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "5px 10px 5px 10px",
    height: "30px",
    padding: "0 30px",
    fontWeight: "500",
    marginLeft: "20px",
    overflow: "hidden",
    "&::after": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%) skew(3deg)",
        width: "8px",
        height: "8px",
        background: theme.palette.primary.main,
        opacity: 0,
        transition: "opacity .2s .1s ease-in-out",
    },
    "&:nth-of-type(1)": {
        marginLeft: "0",
    },
    "span.text": {
        position: "relative",
        zIndex: 2,
    },
    "span.line": {
        position: "absolute",
        background: theme.palette.primary.main,
        width: "calc(50% + 20px)",
        height: "100%",
        top: 0,
        transition: "transform .3s",
        "&.left": {
            left: "-10px",
            transform: "skew(30deg) translateX(-100%)",
        },
        "&.right": {
            right: "-10px",
            transform: "skew(30deg) translateX(100%)",
        },
    },
    "&:hover": {
        "span.line": {
            transform: "skew(30deg) translateX(0%)",
        },
    },
}));
