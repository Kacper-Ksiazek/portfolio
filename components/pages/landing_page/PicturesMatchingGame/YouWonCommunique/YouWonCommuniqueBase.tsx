// Tools
import { styled, alpha, keyframes } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeToBottom from "@/components/keyframes/outro/fadeToBottom";
// Styled components
const introAnimation = keyframes({
    from: {
        transform: "scaleY(0)",
    },
    to: {
        transfrom: "scaleY(1)",
    },
});
const outroAnimation = keyframes({
    from: {
        transfrom: "scaleY(1)",
    },
    to: {
        transform: "scaleY(0)",
    },
});
export default styled("div")(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    background: alpha("#000", 0.5),
    borderRadius: "10px 50px 10px 50px",
    backdropFilter: "blur(3px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    h3: {
        fontSize: "32px",
        margin: "0 0 20px 0",
        fontFamily: "Montserrat Alternates",
    },
    p: {
        fontSize: "20px",
        margin: "0",
    },
    button: {
        marginTop: "20px",
        width: "200px",
        fontFamily: "Montserrat Alternates",
    },
    "&.intro": {
        animation: `${introAnimation} .3s both linear`,
        h3: {
            animation: `${fadeFromTop} .3s .4s both linear`,
        },
        p: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromTop} .3s .5s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromTop} .3s .6s both linear`,
            },
        },
        button: {
            animation: `${fadeFromTop} .3s .7s both linear`,
        },
    },
    "&.outro": {
        animation: `${outroAnimation} .3s .7s both linear`,
        h3: {
            animation: `${fadeToBottom} .3s .3s both linear`,
        },
        p: {
            "&:nth-of-type(1)": {
                animation: `${fadeToBottom} .3s .2s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeToBottom} .3s .1s both linear`,
            },
        },
        button: {
            animation: `${fadeToBottom} .3s  both linear`,
        },
    },
}));
