// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0%",
    paddingTop: "40px",
    width: "100vw",
    height: "80px",
    zIndex: 2,
    transition: "all .3s",
    "div#main-navigation-content": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        height: "100%",
        margin: "0 auto",
        transition: "all .3s, color .15s",
    },
    "&.contrast-colors": {
        color: "#fff",
        ".MuiButtonBase-root": {
            border: "1px solid #fff",
        },
        "&.after-scroll-styles": {
            color: "#000",
            ".MuiButtonBase-root": {
                border: "1px solid #000",
            },
        },
    },
    "&.after-scroll-styles": {
        color: "#000",
        paddingTop: "0px",
        boxSizing: "border-box",
        background: theme.palette.background.default,
        "div#main-navigation-content": {
            maxWidth: "1400px",
        },
    },
}));
