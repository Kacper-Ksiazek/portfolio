// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { SxProps } from "@mui/system";
// Styled components

export default styled("section")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    ".single-feature, #features-display-toggler": {
        visibility: "hidden",
    },
    "&.visible": {
        ".single-feature, #features-display-toggler": {
            visibility: "visible",
        },
        ".single-feature": {
            ...addAnimationsToNFirstElements(5, theme.palette.background),
        },
        "#features-display-toggler": {
            animation: `${fadeSimple} .3s 1.4s both`,
        },
    },
}));

/**
 * Generates **CSS** clauses matching `nth-of-type` convention, based on received amount of children to tackle.
 * Returns CSS-in-JS Object, adequate to MaterialUI's styles managing approach.
 */
const addAnimationsToNFirstElements = (
    amountOfElements: number,
    background: {
        default: string;
        paper: string;
        lightAnimationBar: string;
    }
): SxProps => {
    const DELAY_BETWEEN_ELEMENTS: number = 0.1;
    const result: SxProps = {};

    (result as any)[`&:nth-of-type(-n+${amountOfElements})`] = {
        "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: background.lightAnimationBar,
            zIndex: 3,
        },
    };

    for (let index: number = 0; index < amountOfElements; index++) {
        (result as any)[`&:nth-of-type(${index + 1})`] = {
            "&::after": {
                animation: `${fadeSimpleOUT} .5s ${0.8 + index * DELAY_BETWEEN_ELEMENTS}s both linear`,
            },
            animation: [
                `${fadeSimple} .3s ${0.2 + index * DELAY_BETWEEN_ELEMENTS}s both linear`, //
                `${keyframes({
                    from: {
                        border: `2px solid ${background.default}`,
                    },
                    to: {
                        border: `2px solid ${background.paper}`,
                    },
                })} .3s ${0.8 + index * DELAY_BETWEEN_ELEMENTS}s both linear`,
            ].join(", "),
        };
    }

    return result;
};
