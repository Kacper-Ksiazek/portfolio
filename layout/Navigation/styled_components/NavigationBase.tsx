// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
//
const outro = keyframes({
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    },
});
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
        // This animation is required by the initial loading of the landing page, because it is trigger then alongside with all other one time playing intro animations
        animation: `${fadeFromTop} .2s 2.6s both linear`,
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
    "&.display-outro-animation": {
        animation: `${outro} .3s linear both`,
    },
    "&.display-intro-animation": {
        animation: `${fadeSimple} .3s linear both !important`,
    },
}));
