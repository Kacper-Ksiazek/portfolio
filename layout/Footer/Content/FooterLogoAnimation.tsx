// Tools
import { useState } from "react";
import { alpha, styled } from "@mui/material";
import { renderNTimes } from "@/utils/client/renderNTimes";
// Keyframes
import { fadeFromBottom, fadeFromLeft, fadeFromRight, fadeFromTop, fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
// Other components
import RenderWhenVisible from "@/components/utils/RenderWhenVisible";
import { fadeSimpleOUT } from "@/components/keyframes/outro/fade";
// Styled components
const AnimationStep = styled("span", {
    shouldForwardProp: (prop) => prop !== "step",
})<{ step: number }>(({ theme, ...props }) => {
    const folderName: "dark_theme" | "light_theme" = theme.palette.mode === "light" ? "light_theme" : "dark_theme";
    const imgName: `${string}.png` = `step_${props.step}.png`;

    return {
        ...theme.mixins.absolute_full,
        backgroundPosition: "center !important",
        background: `url(/main-page-logo/animations/${folderName}/${imgName})`,

        "&.step-1, &.step-2, &.step-3, &.step-6, &.step-5": {
            zIndex: 1,
        },

        opacity: 0,

        "&.step-1": {
            animation: `${fadeSimple} .24s .3s both`,
        },
        "&.step-2": {
            animation: `${fadeSimple} .24s .5s both`,
        },
        "&.step-3": {
            animation: `${fadeSimple} .24s .7s both`,
        },
        "&.step-4": {
            animation: `${fadeFromRight} .3s 1.1s both`,
        },
        "&.step-5": {
            animation: `${fadeFromLeft} .3s 1.1s both`,
        },
        "&.step-6": {
            animation: `${fadeFromTop} 1s .9s both`,
        },
        "&.step-7": {
            animation: `${fadeFromBottom} 1s 1.2s both`,
        },
        "&.step-8": {
            animation: `${fadeFromRight} 1s 1.24s both`,
        },
        "&.step-9": {
            animation: `${fadeFromLeft} 1s 1.24s both`,
        },
        "&.step-10": {
            animation: `${fadeFromRight} .2s .9s both`,
        },
        "&.step-11": {
            animation: `${fadeFromLeft} .2s .9s both`,
        },
    };
});

const FooterLogoAnimation: FunctionComponent = () => {
    const pathname: string = window ? window.location.pathname : "loading";
    const [key, setKey] = useState<number>(1);

    function incrementKey() {
        setKey((prevKey) => prevKey + 1);
    }

    return (
        <RenderWhenVisible
            key={key + pathname}
            onClick={incrementKey}
            sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                "span.animation-key": {
                    position: "absolute",
                    top: "50%",
                    left: "48%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "64px",
                    color: alpha("#fff", 0.2),
                    fontWeight: 700,
                    animation: `${fadeSimpleOUT} .5s .1s both`,
                },
            }}
        >
            {key !== 1 && <span className="animation-key">{key}</span>}

            {renderNTimes({
                n: 11,
                startWith: 1,
                renderElement: (i) => (
                    <AnimationStep
                        key={i} //
                        step={i}
                        className={`step-${i}`}
                    />
                ),
            })}
        </RenderWhenVisible>
    );
};

export default FooterLogoAnimation;
