// Tools
import { styled } from "@mui/material";
import fadeToTop from "@/components/keyframes/outro/fadeToTop";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
import fadeFromBottom from "@/components/keyframes/intro/fadeFromBottom";
import { wrapperIntroAnimation, wrapperOutroAnimation, backgroundImageIntro, backgroundImageOutro } from "./wrapperKeyframes";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    ["@media (max-width:1000px)"]: {
        position: "fixed",
        alignItems: "center",
        background: "#000",
        top: 0,
        right: "-1px",
        width: "calc(100% + 2px)",
        maxHeight: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 20,
        transform: "translateX(-100%)",
        boxSizing: "border-box",
        paddingTop: "96px",
        "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/mobile_menu_background_picture.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0,
            filter: "blur(3px)",
        },

        "&.opened": {
            animation: `${wrapperIntroAnimation} .4s both linear`,
            "&::before": {
                animation: `${backgroundImageIntro} 1s .4s both linear`,
            },
            ".single-main-navigation-route": {
                "&:nth-of-type(1)": {
                    animation: `${fadeFromBottom} .2s .5s both linear`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeFromBottom} .2s .55s both linear`,
                },
                "&:nth-of-type(3)": {
                    animation: `${fadeFromBottom} .2s .6s both linear`,
                },
            },
            "#theme-switch": {
                animation: `${fadeFromBottom} .2s .65s both linear`,
            },
            "#mobile-menu-bottom-card-name": {
                animation: `${fadeSimple} .2s .7s both linear`,
            },
            "#mobile-menu-bottom-card-year": {
                animation: `${fadeSimple} .2s .8s both linear`,
            },
        },
        "&.closed": {
            animation: `${wrapperOutroAnimation} .4s .4s both linear`,
            "&::before": {
                animation: `${backgroundImageOutro} .3s both linear`,
            },
            ".single-main-navigation-route": {
                "&:nth-of-type(1)": {
                    animation: `${fadeToTop} .2s .15s both linear`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeToTop} .2s .1s both linear`,
                },
                "&:nth-of-type(3)": {
                    animation: `${fadeToTop} .2s .05s both linear`,
                },
            },
            "#theme-switch": {
                animation: `${fadeToTop} .2s  both linear`,
            },
            "#mobile-menu-bottom-card-name": {
                animation: `${fadeSimpleOUT} .2s both linear`,
            },
            "#mobile-menu-bottom-card-year": {
                animation: `${fadeSimpleOUT} .2s both linear`,
            },
        },
    },
}));
