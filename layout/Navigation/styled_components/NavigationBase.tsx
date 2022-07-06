// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "50%",
    marginTop: "20px",
    transform: "translateX(-50%)",
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
    "&.applyAfterScrollStyles": {
        marginTop: "0",
        color: "#fff",
        boxSizing: "border-box",
        background: theme.palette.background.paper,
        "div#main-navigation-content": {
            maxWidth: "1400px",
        },
        ".MuiButtonBase-root": {
            border: "1px solid #fff",
            "&::after": {
                opacity: 1,
            },
        },
    },
}));
