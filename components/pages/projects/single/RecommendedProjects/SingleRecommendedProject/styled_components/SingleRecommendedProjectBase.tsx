// Tools
import { styled, alpha } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { imageIntroFast, imageIntroSlow } from "../styled_components/_keyframes";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
// Styled components
export default styled("div")(({ theme }) => ({
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    visibility: "hidden",
    "&:not(&:nth-of-type(1))": {
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "-21px",
            transform: "translateY(-50%)",
            width: "2px",
            height: "80%",
            background: alpha("#000", 0.1),
        },
    },
    ".thumbnail-wrapper": {
        height: "270px",
        width: "100%",
        overflow: "hidden",
    },
    "&.active, &.initial-active": {
        visibility: "visible",
        "&::after": {
            animation: `${fadeSimple} .5s 1.5s both`,
        },
        ".duration": {
            animation: `${fadeFromLeft} .3s .9s both`,
        },
        h3: {
            animation: `${fadeFromLeft} .3s 1.1s both`,
        },
        ".technologies-wrapper": {
            ".single-technology": {
                "&:nth-of-type(1)": {
                    animation: `${fadeSimple} .2s 1.3s both`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeSimple} .2s 1.4s both`,
                },
                "&:nth-of-type(3)": {
                    animation: `${fadeSimple} .2s 1.5s both`,
                },
                "&:nth-of-type(4)": {
                    animation: `${fadeSimple} .2s 1.6s both`,
                },
                "&:nth-of-type(5)": {
                    animation: `${fadeSimple} .2s 1.7s both`,
                },
                "&:nth-of-type(6)": {
                    animation: `${fadeSimple} .2s 1.8s both`,
                },
            },
            ".there-are-more-technologies": {
                animation: `${fadeSimple} .2s 1.8s both`,
            },
        },
        p: {
            animation: `${fadeFromTop} .3s 1.3s both`,
        },
        ".read-more": {
            animation: `${fadeFromLeft} .3s 1.7s both`,
        },
        ".thumbnail-wrapper": {
            "img, span.border-shape": {
                animation: `${fadeSimple} .01s .9s both`,
            },
            "&::after": {
                background: theme.palette.primary.main,
                animation: `${imageIntroFast} 1.1s .3s both linear`,
            },
            "&::before": {
                background: theme.palette.secondary.main,
                animation: `${imageIntroSlow} 1.4s .2s both linear`,
            },
        },
    },
}));
