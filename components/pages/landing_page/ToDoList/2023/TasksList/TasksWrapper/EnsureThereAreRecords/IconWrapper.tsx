// Tools
import { styled, keyframes } from "@mui/material";
import { fadeSimple } from "@keyframes/intro/fade";
// Styled components
const strikeThroughIntro = keyframes({
    from: {
        transform: "translate(-50%,-44%) rotate(-45deg) scaleY(0)",
    },
    to: {
        transform: "translate(-50%,-44%) rotate(-45deg) scaleY(100%)",
    },
});

export default styled("span")(({ theme }) => ({
    position: "relative",
    svg: {
        color: "#494949",
        animation: `${fadeSimple} .3s .1s both ease-in-out`,
    },
    "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "0",
        width: "10px",
        height: "calc(100% + 32px)",
        background: theme.palette.primary.main,
        transform: "translate(-50%,-54%) rotate(-45deg)",
        animation: `${strikeThroughIntro} .3s .5s both ease-in-out`,
        transformOrigin: "top",
        borderRadius: "3px",
    },
}));
