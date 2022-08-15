// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";
// Styled components
export default styled("div")(({ theme }) => ({
    "p, h3, a": {
        visibility: "hidden",
    },
    "&.visible": {
        "p, h3, a": {
            visibility: "visible",
        },
        h3: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .3s .2s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .3s .3s both linear`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeFromLeft} .3s .4s both linear`,
            },
        },
        p: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .3s .25s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .3s .35s both linear`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeFromLeft} .3s .45s both linear`,
            },
        },
        a: {
            animation: `${fadeFromBottom} .3s 1s both linear`,
        },
    },
}));
