// Tools
import { styled, alpha } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";
import { imageIntroFast, imageIntroFastReversed, imageIntroSlow, imageIntroSlowReversed } from "./_keyframes";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    "&.initial-active": {
        ".label": {
            animation: `${fadeFromBottom} .3s 2s both`,
        },
        h4: {
            animation: `${fadeFromTop} .3s 1.8s both`,
        },
        p: {
            animation: `${fadeFromTop} .3s 1.9s both`,
        },
        ".image-wrapper": {
            "img, a": {
                animation: `${fadeSimple} .01s 1.5s both`,
            },
        },
        "&:nth-of-type(1)": {
            ".image-wrapper": {
                "&::after": {
                    animation: `${imageIntroFastReversed} 1.1s 1.1s both linear`,
                },
                "&::before": {
                    animation: `${imageIntroSlowReversed} 1.4s 1s both linear`,
                },
            },
        },
        "&:nth-of-type(2)": {
            ".image-wrapper": {
                "&::after": {
                    animation: `${imageIntroFast} 1.1s 1.1s both linear`,
                },
                "&::before": {
                    animation: `${imageIntroSlow} 1.4s 1s both linear`,
                },
            },
        },
        // Divider animaiton
        "&:not(&:nth-of-type(1))": {
            "&::after": {
                animation: `${fadeSimple} .3s 2s both linear`,
            },
        },
    },
    "&.active": {
        ".label": {
            animation: `${fadeFromBottom} .3s 1.4s both`,
        },
        ".image-wrapper": {
            "img, a": {
                animation: `${fadeSimple} .01s .9s both`,
            },
            "&::after": {
                animation: `${imageIntroFast} 1.1s .5s both linear`,
            },
            "&::before": {
                animation: `${imageIntroSlow} 1.4s .4s both linear`,
            },
        },
        h4: {
            animation: `${fadeFromTop} .3s 1.2s both`,
        },
        p: {
            animation: `${fadeFromTop} .3s 1.3s both`,
        },
        // Divider animaiton
        "&:not(&:nth-of-type(1))": {
            "&::after": {
                animation: `${fadeSimple} .3s 1.4s both linear`,
            },
        },
    },
    "&:not(&:nth-of-type(1))": {
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "-20px",
            height: "75%",
            background: alpha("#000", 0.1),
            width: "1px",
        },
    },
}));
