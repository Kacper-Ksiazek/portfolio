// Tools
import { styled, keyframes } from "@mui/material";
// Styled components
import BackgroundShapeBase from "./_BackgroundShapeBase";

interface LineProps {
    initialHeight: `${string}px`;
    backgroundColor: string;
    zIndex: number;
    delays: {
        intro: number;
        outro: number;
    };
}

export default styled(BackgroundShapeBase, {
    shouldForwardProp: (prop: string) => {
        return !(["initialHeight", "backgroundColor", "zIndex", "delays"] as (keyof LineProps | string)[]).includes(prop);
    },
})<LineProps>(({ theme, ...props }) => {
    const introAnimationOne = keyframes({
        "0%": {
            maxHeight: props.initialHeight,
            transform: "translate(calc(-100% - 20px - 50%), -50%)",
        },
        "40%,60%": {
            maxHeight: props.initialHeight,
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            maxHeight: "100%",
            transform: "translate(-50%,-50%)",
        },
    });

    const outroAnimationOneVertical = keyframes({
        "0%": {
            width: "100%",
            transform: "translate(-50%,-50%)",
        },
        "40%,60%": {
            width: props.initialHeight,
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            width: props.initialHeight,
            transform: "translate(-50%,calc(-50% + 100% + 20px))",
        },
    });

    const outroAnimationOneHorizontal = keyframes({
        "0%": {
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            transform: "translate(calc(100vw + 100px),-50%)",
            visibility: "hidden",
        },
    });

    return {
        background: props.backgroundColor,
        zIndex: props.zIndex,
        borderRadius: "5px",
        animation: [
            `${introAnimationOne} .8s ${props.delays.intro}s linear both`, //
            `${outroAnimationOneHorizontal} .8s ${props.delays.outro}s linear forwards`,
        ].join(", "),
        "@media (min-width:1001px)": {
            animation: [
                `${introAnimationOne} .8s ${props.delays.intro}s linear both`, //
                `${outroAnimationOneVertical} .8s ${props.delays.outro}s linear forwards`,
            ].join(", "),
        },
        "@media (max-width:1000px)": {
            animation: [
                `${introAnimationOne} .7s ${props.delays.intro}s linear both`, //
                `${outroAnimationOneHorizontal} .5s ${props.delays.outro}s linear forwards`,
            ].join(", "),
        },
    };
});
