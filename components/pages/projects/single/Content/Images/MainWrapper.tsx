// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
const intro = keyframes({
    "0%": {
        width: "0px",
        height: "50px",
    },
    "20%, 40%": {
        width: "120px",
        height: "50px",
    },
    "60%, 80%": {
        width: "120px",
        height: "100%",
    },
    "100%": {
        width: "100%",
        height: "100%",
    },
});

const outro = keyframes({
    "0%": {
        transform: "translateX(-50%)",
        left: "50%",
        width: "100%",
        height: "100%",
        top: "auto",
        bottom: 0,
    },
    "33%,66%": {
        height: "100%",
        width: "120px",
    },
    "100%": {
        transform: "translateX(-50%)",
        left: "50%",
        width: "120px",
        height: "0",
        top: "auto",
        bottom: 0,
    },
});

export default styled("div")(({ theme }) => ({
    width: "100%",
    position: "relative",
    overflow: "hidden",
    margin: "20px 0",
    borderRadius: "10px",
    //
    height: "650px",
    "#features-overflow-hidden-container": {
        height: "467px",
    },
    ".project-thumbnail": {
        animation: `${fadeSimple} .001s 1.7s both`,
    },
    "&::after, &::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
    },
    "&::after": {
        zIndex: 11,
        background: theme.palette.primary.main,
        animation: `${intro} 1s .6s both linear, ${outro} .7s 2s forwards linear`,
    },
    "&::before": {
        zIndex: 10,
        background: theme.palette.secondary.main,
        animation: `${intro} 1s .5s both linear, ${outro} .7s 2.1s forwards linear`,
    },
}));
