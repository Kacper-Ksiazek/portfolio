// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
const IntroAnimationStageOne = keyframes({
    from: {
        height: "0",
        width: "100%",
    },
    to: {
        height: "110%",
        width: "100%",
    },
});
const IntroAnimationStageTwo = keyframes({
    from: {
        width: "100%",
        height: "110%",
    },
    to: {
        width: "0",
        height: "110%",
    },
});

export default styled("h2")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: 700,
    margin: "4px 0 16px 0",
    lineHeight: "50px",
    position: "relative",
    boxSizing: "border-box",
    span: {
        animation: `${fadeSimple} .001s 1.2s both`,
    },
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: "#000",
        animation: [
            `${IntroAnimationStageOne} .3s .8s both linear`, //
            `${IntroAnimationStageTwo} .2s 1.4s forwards linear`,
        ].join(", "),
    },
}));
