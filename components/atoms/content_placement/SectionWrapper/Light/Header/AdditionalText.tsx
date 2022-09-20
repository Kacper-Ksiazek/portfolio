// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
const IntroAnimationStageOne = keyframes({
    "0%": {
        width: "8px",
        height: "0",
    },
    "33%,66%": {
        width: "8px",
        height: "100%",
    },
    "100%": {
        width: "100%",
        height: "100%",
    },
});
const IntroAnimationStageTwo = keyframes({
    from: {
        height: "100%",
        top: "auto",
        bottom: 0,
    },
    to: {
        height: "0",
        top: "auto",
        bottom: 0,
    },
});

export default styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    span: {
        animation: `${fadeSimple} .001s .7s both`,
    },
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: theme.palette.primary.main,
        animation: [
            `${IntroAnimationStageOne} .3s .3s both linear`, //
            `${IntroAnimationStageTwo} .2s 1s forwards linear`,
        ].join(", "),
    },
}));
