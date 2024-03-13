// Tools
import { styled } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import * as outro from "@/components/keyframes/outro";
import * as intro from "@/components/keyframes/intro";
import * as wrapperKeyframes from "./wrapperKeyframes";
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
        maxHeight: "100dvh",
        flexDirection: "column",
        justifyContent: "flex-end",
        zIndex: 20,
        transform: "translateX(-100%)",
        boxSizing: "border-box",
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
            animation: `${wrapperKeyframes.wrapperIntroAnimation} .4s both linear`,
            "&::before": {
                animation: `${wrapperKeyframes.backgroundImageIntro} 1s .4s both linear`,
            },
            ".single-main-navigation-route": {
                ...repeat(4, (index) => {
                    const delta: number = 0.05;
                    const delay = 0.5 + index * delta;
                    return {
                        animation: `${intro.fadeFromBottom} .2s ${delay}s both linear`,
                    };
                }),
            },
            "#theme-switch": {
                animation: `${intro.fadeFromBottom} .2s .65s both linear`,
            },
            "#mobile-menu-bottom-card-name": {
                animation: `${intro.fadeSimple} .2s .7s both linear`,
            },
            "#mobile-menu-bottom-card-year": {
                animation: `${intro.fadeSimple} .2s .8s both linear`,
            },
        },
        "&.closed": {
            animation: `${wrapperKeyframes.wrapperOutroAnimation} .4s .4s both linear`,
            "&::before": {
                animation: `${wrapperKeyframes.backgroundImageOutro} .3s both linear`,
            },
            ".single-main-navigation-route": {
                ...repeat(4, (index) => {
                    const delta: number = -0.05;
                    const delay = 0.25 + index * delta;
                    return {
                        animation: `${outro.fadeToTop} .2s ${delay}s both linear`,
                    };
                }),
            },
            "#theme-switch": {
                animation: `${outro.fadeToTop} .2s  both linear`,
            },
            "#mobile-menu-bottom-card-name": {
                animation: `${outro.fadeSimpleOUT} .2s both linear`,
            },
            "#mobile-menu-bottom-card-year": {
                animation: `${outro.fadeSimpleOUT} .2s both linear`,
            },
        },
    },
}));
