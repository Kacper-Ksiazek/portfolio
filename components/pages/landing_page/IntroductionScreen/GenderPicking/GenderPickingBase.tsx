// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "112px",
    h3: {
        margin: 0,
        animation: `${fadeSimple} .3s both linear`,
        fontSize: "32px",
    },
    p: {
        margin: "12px 0 0 0",
        fontSize: "20px",
        textAlign: "center",
        animation: `${fadeSimple} .3s .1s both linear`,
    },
    i: {
        fontSize: "14px",
        marginTop: "64px",
        textAlign: "center",
        animation: `${fadeSimple} .3s 1s both linear`,
        span: {
            opacity: 0.5,
        },
    },
    ".simple-flexbox": {
        display: "flex",
        margin: "32px 0",
        ".male": {
            animation: `${fadeSimple} .3s .2s both linear`,
        },
        ".female": {
            animation: `${fadeSimple} .3s .3s both linear`,
        },
    },
    ".prefer-not-to-answer": {
        padding: "6px 64px",
        fontSize: "20px",
        animation: `${fadeSimple} .3s .4s both linear`,
    },
    "&.outro": {
        animation: `${fadeSimpleOUT} .4s both`,
    },
}));
