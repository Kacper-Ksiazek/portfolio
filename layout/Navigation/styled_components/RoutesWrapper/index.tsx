// Tools
import { styled } from "@mui/system";
import fadeToTop from "@/components/_keyframes/outro/fadeToTop";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";
import { wrapperIntroAnimation, wrapperOutroAnimation } from "./wrapperKeyframes";
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
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 10,
        transform: "translateX(-100%)",

        "&.opened": {
            animation: `${wrapperIntroAnimation} .4s both linear`,
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
        },
        "&.closed": {
            animation: `${wrapperOutroAnimation} .4s .4s both linear`,
            ".single-main-navigation-route": {
                "&:nth-of-type(1)": {
                    animation: `${fadeToTop} .2s .1s both linear`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeToTop} .2s .05s both linear`,
                },
                "&:nth-of-type(3)": {
                    animation: `${fadeToTop} .2s both linear`,
                },
            },
        },
    },
}));
